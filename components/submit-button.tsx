'use client'
import { useFormStatus } from "react-dom"

type SubmitButtonProps = {
    btnText: string
}
export function SubmitButton({ btnText }: SubmitButtonProps) {
    const { pending } = useFormStatus()

    return (
        <button type="submit" className={`btn btn-active ${pending && "btn-disabled"}`} aria-disabled={pending}>
            {btnText}
        </button>
    )
}