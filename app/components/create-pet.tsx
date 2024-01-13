export const CreatePet = () => {
    return (
        <div className="flex gap-4 md:flex-row flex-col">
            <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                <input
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered w-full max-w-xs"
                />
                <input
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered w-full max-w-xs"
                />
            </div>
            <button className="btn btn-active">Add Your Pet</button>
        </div>
    );
};
