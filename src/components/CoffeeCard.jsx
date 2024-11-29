import { Link } from "react-router-dom";


const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
    const { _id, name, supply, category, photo, quantity, taste, details } = coffee;
    const handleDelete = (_id) => {

        alert('Are you sure delete this item')

        fetch(`http://localhost:5000/coffee/${_id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount > 0) {
                    alert('Deleted confirm')
                    const remaining = coffees.filter(cof => cof._id !== _id)
                    setCoffees(remaining)
                }
            })
    }

    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl">
                <figure>
                    <img
                        src={photo}
                        alt="Movie" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Name: {name}</h2>
                    <p>Details: {details}</p>
                    <p>Quantity: {quantity}</p>
                    <p>Supply: {supply}</p>
                    <p>Taste: {taste}</p>
                </div>
                <div className="join join-vertical space-y-4 mt-6">
                    <button className="btn join-item">View</button>
                    <Link to={`updateCoffee/${_id}`}>
                        <button className="btn join-item">Edit</button>
                    </Link>
                    <button onClick={() => handleDelete(_id)} className="btn join-item">X</button>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;