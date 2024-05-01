import React from 'react'
import { Link } from 'react-router-dom'
import Login from './Login'

const Register = () => {
    return (
        <div className="flex h-screen justify-center items-center">
            <div className="w-[500px] border p-3 relative">
                <div className="model-box">
                    <form method="dialog" className="">
                        {/* if there is a button in form, it will close the modal */}
                        <Link to='/' className="absolute right-3 top-2">✕</Link>
                    </form>
                    <h3 className="font-bold text-lg mt-4">Login</h3>
                    {/* Name*/}
                    <div className="mt-4 space-y-2">
                        <label htmlFor="text">Name</label>
                        <br />
                        <input type="text" className="border rounded-md outline-none w-80 py-1 px-3" placeholder='Enter Your Name' />
                    </div>
                    {/* email*/}
                    <div className="mt-4 space-y-2">
                        <label htmlFor="text">Email</label>
                        <br />
                        <input type="text" className="border rounded-md outline-none w-80 py-1 px-3" placeholder='Enter Your Mail' />
                    </div>
                    {/*pass*/}
                    <div className="mt-4 space-y-2">
                        <label htmlFor="" className="mt-4">Password</label>
                        <br />
                        <input type="text" className="border rounded-md outline-none w-80 py-1 px-3 " placeholder='Enter Your Password' />
                    </div>
                    {/*button*/}
                    <div className="flex justify-around mt-4">
                        <button className="bg-pink-600 text-white px-2 py-1 rounded-md">Register</button>
                        <p>Have Account? {"  "} <button className="text-blue-400 underline cursor-pointer" onClick={() => document.getElementById("my_modal_3").showModal()} >Login</button>{" "}  <Login /></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register
