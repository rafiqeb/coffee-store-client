import { useLoaderData } from "react-router-dom";


const UpdateCoffee = () => {
    const coffee = useLoaderData()
    const { _id, name, supply, category, photo, quantity, taste, details } = coffee;

    const handleUpdateCoffee = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const supply = form.supply.value;
        const category = form.category.value;
        const photo = form.photo.value;
        const quantity = form.quantity.value;
        const taste = form.taste.value;
        const details = form.details.value;

        const updatedCoffee = {name, supply, category, photo, quantity, taste, details}

        fetch(`http://localhost:5000/coffee/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.modifiedCount > 0){
                    alert('Coffee updated successfully')
                }
            })
    }

    return (
        <div className="flex flex-col justify-center items-center bg-slate-200 max-w-3xl mx-auto p-10">
            <h2 className="text-3xl font-bold mb-10">Update Coffee</h2>
            <form onSubmit={handleUpdateCoffee}>
                <div className="flex gap-8">
                    <div className="space-y-4">
                        <div className="space-y-1">
                            <p className="font-bold">Coffee Name</p>
                            <input name="name" type="text" defaultValue={name} placeholder="Enter coffee name" className="input input-bordered w-full max-w-xs" />
                        </div>
                        <div className="space-y-1">
                            <p className="font-bold">Supplier</p>
                            <input name="supply" type="text" defaultValue={supply} placeholder="Coffee suplier" className="input input-bordered w-full max-w-xs" />
                        </div>
                        <div className="space-y-1">
                            <p className="font-bold">Category</p>
                            <input name="category" defaultValue={category} type="text" placeholder="Coffee category" className="input input-bordered w-full max-w-xs" />
                        </div>
                        <div className="space-y-1">
                            <p className="font-bold">Photo</p>
                            <input name="photo" defaultValue={photo} type="text" placeholder="Photo url" className="input input-bordered w-full max-w-xs" />
                        </div>
                    </div>
                    <div className="space-y-4">
                        <div className="space-y-1">
                            <p className="font-bold">Quantity</p>
                            <input name="quantity" defaultValue={quantity} type="text" placeholder="coffee chef" className="input input-bordered w-full max-w-xs" />
                        </div>
                        <div className="space-y-1">
                            <p className="font-bold">Taste</p>
                            <input name="taste" defaultValue={taste} type="text" placeholder="Coffee taste" className="input input-bordered w-full max-w-xs" />
                        </div>
                        <div className="space-y-1">
                            <p className="font-bold">Details</p>
                            <input name="details" defaultValue={details} type="text" placeholder="Coffee details" className="input input-bordered w-full max-w-xs" />
                        </div>
                    </div>
                </div>
                <input className="border-2 bg-slate-400 text-center px-4 py-1 w-full rounded-full mt-4" type="submit" value="Add coffee" />
            </form>
        </div>
    );
};

export default UpdateCoffee;