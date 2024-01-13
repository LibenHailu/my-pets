import { deletePet } from "@/actions/pet";

type PetItemProps = {
    name: string;
    owner: string;
};
export const PetItem: React.FC<PetItemProps> = ({ name, owner }) => {
    return (
        <form className="card w-full bg-base-100 shadow-xl">
            <div className="card-body">
                <div className="flex items-center justify-between">
                    <div>
                        <input className="card-title disabled" name="name" defaultValue={name} />
                        <input className="hidden" defaultValue={owner} name="owner" />
                        <p className="text-sm">{owner}</p>
                    </div>
                    <div>
                        <button formAction={deletePet} className="btn btn-active">
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        </form>
    );
};
