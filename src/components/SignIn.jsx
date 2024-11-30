import { useContext } from "react";
import Navbar from "./Navbar";
import { AuthContext } from "../provider/AuthProvider";
import { data, Link } from "react-router-dom";


const SignIn = () => {
    const {signInUser} = useContext(AuthContext)

    const handleSignIn = e => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password)
        signInUser(email, password)
        .then(result => {
            console.log(result.user)

            // update last login time
            const lastSignInTime = result?.user?.metadata?.lastSignInTime;
            const loginInfo = {email, lastSignInTime}

            fetch(`http://localhost:5000/users`, {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(loginInfo)
            })
            .then(res => res.json())
            .then(data => {
                console.log('sign in info updated', data)
            })
        })
        .catch(error => {
            console.log('ERROR', error.message)
        })
    }
    return (
        <div>
            <Navbar></Navbar>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <h2 className="text-3xl font-bold text-center">Sign In</h2>
                        <form onSubmit={handleSignIn} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Sign in</button>
                            </div>
                            <p>new to coffee drinker: <Link to='/signup'>sign up</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;