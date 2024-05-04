import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form"
import axios from 'axios'
import toast from 'react-hot-toast';



const Register = () => {
    const locations = useLocation();
    const navigator = useNavigate();
    const form = locations.state?.form?.pathname || "/"
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = async (data) => {
        const userinfo = {
            fullname: data.fullname,
            email: data.email,
            password: data.password
        }
        await axios.post("http://localhost:3000/user/singup", userinfo)
            .then((res) => {
                console.log(res);
                if (res.data) {
                    toast.success('Register Successfully!');
                    localStorage.setItem("user", JSON.stringify(res.data.user))
                    setTimeout(() => {
                        navigator(form, { replace: true })
                    }, 1000);
                }
            }).catch((errors) => {
                if (errors.response) {
                    toast.error("Error:" + errors.response.data.message);
                }
            })

    }
    return (
        <div className="flex h-screen justify-center items-center">
            <div className="w-[500px] border p-3 relative">
                <div className="model-box">
                    <form onSubmit={handleSubmit(onSubmit)} method="dialog" className="">
                        {/* if there is a button in form, it will close the modal */}
                        <Link to='/' className="absolute right-3 top-2">✕</Link>

                        <h3 className="font-bold text-lg mt-4">Register</h3>
                        {/* Name*/}
                        <div className="mt-4 space-y-2">
                            <label>fullname</label>
                            <br />
                            <input type="name" className="border rounded-md outline-none w-80 py-1 px-3" placeholder='Enter Your Name'  {...register("name", { required: true })} />
                            <br />
                            {errors.fullname && <span className="text-red-500" >Name is required</span>}
                        </div>
                        {/* email*/}
                        <div className="mt-4 space-y-2">
                            <label htmlFor="text">Email</label>
                            <br />
                            <input type="email" className="border rounded-md outline-none w-80 py-1 px-3" placeholder='Enter Your Mail'  {...register("email", { required: true })} />
                            <br />
                            {errors.email && <span className="text-red-500" >Email is required</span>}
                        </div>
                        {/*pass*/}
                        <div className="mt-4 space-y-2">
                            <label htmlFor="" className="mt-4">Password</label>
                            <br />
                            <input type="password" className="border rounded-md outline-none w-80 py-1 px-3 " placeholder='Enter Your Password'  {...register("password", { required: true })} />
                            <br />
                            {errors.password && <span className="text-red-500" >Password is required</span>}
                        </div>
                        {/*button*/}
                        <div className="flex justify-around mt-4">
                            <button className="bg-pink-600 text-white px-2 py-1 rounded-md">Register</button>
                            <p>Have Account? {"  "} <Link to="/" className="text-blue-400 underline cursor-pointer" >Login</Link>{" "} </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register
