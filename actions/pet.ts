"use server";
import { revalidatePath } from "next/cache";
import { sql } from "@vercel/postgres";
import { z } from "zod";

const schema = z.object({
    name: z.string().min(1, { message: "Pet name required." }),
    owner: z.string().min(1, { message: "Owner name required." }),
});
export async function createPet(prevState: any, formData: FormData) {
    try {
        const validatedFields = schema.safeParse({
            name: formData.get("name") as string,
            owner: formData.get("owner") as string,
        });

        if (!validatedFields.success) {
            return {
                errors: validatedFields.error.flatten().fieldErrors,
            };
        }

        await sql`
        INSERT INTO pets (Name, Owner)
        VALUES (${validatedFields.data.name}, ${validatedFields.data.owner});
      `;

        revalidatePath("/");
    } catch (e) {
        console.error(e);
        return { message: "Failed to create pet" };
    }
}

export async function deletePet(formData: FormData) {
    try {
        const name = (await formData.get("name")) as string;
        const owner = (await formData.get("owner")) as string;
        await sql`DELETE FROM pets
        WHERE Name = ${name} AND Owner = ${owner};`;

        revalidatePath("/");
    } catch (e) {
        console.error(e);
        return { message: "Failed to delete pet" };
    }
}
