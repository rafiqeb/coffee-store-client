import Navbar from "./Navbar";


const AddCoffee = () => {
    const handleAddCoffee = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const supply = form.supply.value;
        const category = form.category.value;
        const photo = form.photo.value;
        const quantity = form.quantity.value;
        const taste = form.taste.value;
        const details = form.details.value;

        const newCoffee = { name, supply, category, photo, quantity, taste, details }
        console.log(newCoffee)

        fetch('https://coffee-store-server-lemon-two.vercel.app/coffee', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    alert('Coffee added successfully')
                }
            })
    }

    return (
        <div>
            <div><Navbar></Navbar></div>
            <div className="flex flex-col justify-center items-center bg-slate-200 max-w-3xl mx-auto p-10">
                <h2 className="text-3xl font-bold mb-10">Add New Coffee</h2>
                <form onSubmit={handleAddCoffee}>
                    <div className="flex gap-8">
                        <div className="space-y-4">
                            <div className="space-y-1">
                                <p className="font-bold">Coffee Name</p>
                                <input name="name" type="text" placeholder="Enter coffee name" className="input input-bordered w-full max-w-xs" />
                            </div>
                            <div className="space-y-1">
                                <p className="font-bold">Supplier</p>
                                <input name="supply" type="text" placeholder="Coffee suplier" className="input input-bordered w-full max-w-xs" />
                            </div>
                            <div className="space-y-1">
                                <p className="font-bold">Category</p>
                                <input name="category" type="text" placeholder="Coffee category" className="input input-bordered w-full max-w-xs" />
                            </div>
                            <div className="space-y-1">
                                <p className="font-bold">Photo</p>
                                <input name="photo" type="text" placeholder="Photo url" className="input input-bordered w-full max-w-xs" />
                            </div>
                        </div>
                        <div className="space-y-4">
                            <div className="space-y-1">
                                <p className="font-bold">Quantity</p>
                                <input name="quantity" type="text" placeholder="coffee chef" className="input input-bordered w-full max-w-xs" />
                            </div>
                            <div className="space-y-1">
                                <p className="font-bold">Taste</p>
                                <input name="taste" type="text" placeholder="Coffee taste" className="input input-bordered w-full max-w-xs" />
                            </div>
                            <div className="space-y-1">
                                <p className="font-bold">Details</p>
                                <input name="details" type="text" placeholder="Coffee details" className="input input-bordered w-full max-w-xs" />
                            </div>
                        </div>
                    </div>
                    <input className="border-2 bg-slate-400 text-center px-4 py-1 w-full rounded-full mt-4" type="submit" value="Add coffee" />
                </form>
            </div>
        </div>

    );
};

export default AddCoffee;