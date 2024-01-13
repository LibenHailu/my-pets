import { revalidatePath } from "next/cache";
import { sql } from '@vercel/postgres';
export const CreatePet = () => {
    async function createPet(formData: FormData) {
        "use server"
        try {
            const name = formData.get("name") as string;
            const owner = formData.get("owner") as string;
            console.log(name, owner)
            await sql`
            INSERT INTO pets (Name, Owner)
            VALUES (${name}, ${owner});
          `;

            revalidatePath("/");
        } catch (e) {
            console.error(e);
            return { message: "Failed to create pet" };
        }
    }

    return (
        <form action={createPet} className="flex gap-4 md:flex-row flex-col">
            <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                <input
                    type="text"
                    name="name"
                    placeholder="Your pet name"
                    className="input input-bordered w-full max-w-xs"
                />
                <input
                    type="text"
                    name="owner"
                    placeholder="Your name"
                    className="input input-bordered w-full max-w-xs"
                />
            </div>
            <button type="submit" className="btn btn-active">Add Your Pet</button>
        </form>
    );
};
