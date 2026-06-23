import {Link} from "react-router-dom"
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
    let [loginData, setLoginData] = useState({});
    let [error, setError] = useState({});
    let navigate = useNavigate()
    
    let handleChange = (e) => {
        let {name, value} = e.target; // target object mein input field ka name and value aati hai the destructure karte hain
       
        setLoginData({...loginData, [name]: value});
    };

    let handleSubmit = (e) => {
        e.preventDefault();
        handleValidate(loginData); //call for field validation and display data as API data
    }

    let formError = {}

    let handleValidate = (loginData) => {
        if(!loginData.email) {
            formError.email="Email is required"
        }
        else if(!loginData.password) {
            formError.password="Password required"
        }

        if(loginData.email && loginData.password) {
            console.log("API data ", loginData);
            navigate("/admin")

        }
        setError(formError)
    }

    return (
        // <>
        //     <div>
        //         <h1 className="bg-amber-500">Login</h1>
        //         <div>
        //             Email: <input type="email" placeholder="adityaraj@gmail.com" name="" id="" />
        //         </div>
        //         <div>
        //             Password: <input type="password" placeholder="*****a@#!" name="" id="" />
        //         </div>
        //         <div>
        //             <button type="submit">Submit</button>
        //         </div>
        //     </div>
        // </>
        <>
            <div class="grid grid-cols-3 gap-4">
                <div class="..."></div>
                <div class="...">
                    <div className="card w-100 h-150 border-2 border-amber-500 m-auto shadow-2xl rounded-2xl">
                        <h1 className="card-header text-center font-bold text-2xl">Login</h1>
                        <div className="card-body w-80 h-100 m-auto mt-8">
                            <div>
                                <label className="font-bold text-sm">Email</label>
                            </div>
                            <div  className="mb-3">
                                <input 
                                className="w-full h-10 border border-black-200 rounded-md" 
                                type="email" 
                                placeholder="adityaraj@gmail.com" 
                                onChange={handleChange} name="email" />
                                <p>{error.email}</p>
                            </div>
                            <div>
                                <label className="font-bold text-sm mb-3">Password</label>
                            </div>
                            <div>
                                <input className="w-full h-10 border border-black-200 rounded-md" 
                                type="password" 
                                placeholder="*****a@#!" 
                                onChange={handleChange} 
                                name="password" />
                                <p>{error.password}</p>
                            </div>
                            <div className="mt-3">
                                <button 
                                className="w-full bg-blue-500 text-white h-10 rounded-md " 
                                type="submit" 
                                onClick={handleSubmit}>Login</button>
                            </div>
                            <div>
                                <Link to="/signup" className="text-blue-700 underline">Dont have an account?</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="..."></div>
            </div>
        </>
    );
}

export default Login;