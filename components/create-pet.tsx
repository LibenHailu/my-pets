"use client";
import { useFormState } from "react-dom";
import { createPet } from "@/actions/pet";
import { SubmitButton } from "./submit-button";
export const CreatePet = () => {
    const [state, formAction] = useFormState(createPet, null);
    return (
        <form action={formAction} className="flex gap-4 md:flex-row flex-col">
            <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                <div>
                    <input
                        type="text"
                        name="name"
                        placeholder="Your pet name"
                        className="input input-bordered w-full max-w-xs"
                    />
                    <p className="text-sm text-red-600 p-2">
                        {state?.errors?.name?.map((err) => err)}
                    </p>
                </div>
                <div>
                    <input
                        type="text"
                        name="owner"
                        placeholder="Your name"
                        className="input input-bordered w-full max-w-xs"
                    />
                    <p className="text-sm text-red-600 p-2">
                        {state?.errors?.owner?.map((err) => err)}
                    </p>
                </div>
            </div>
            <SubmitButton btnText="Add Your Pet" />
        </form>
    );
};
