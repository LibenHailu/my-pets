type PetItemProps = {
    name: string,
    owner: string
}
export const PetItem: React.FC<PetItemProps> = ({ name, owner }) => {
    return (<div className="card w-full bg-base-100 shadow-xl">
        <div className="card-body">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="card-title">{name}!</h2>
                    <p>{owner}</p>
                </div>
                <div>
                    <button className="btn btn-active">Delete</button>
                </div>
            </div>
        </div>
    </div>)
}