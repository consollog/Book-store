import React from 'react'
import { Link, useLocation, useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import axios from 'axios'
import toast from 'react-hot-toast'


const Login = () => {
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
            email: data.email,
            password: data.password
        }
        await axios.post("http://localhost:3000/user/login", userinfo)
            .then((res) => {
                console.log(res);
                if (res.data) {
                    toast.success('Login Successfully!');
                    document.getElementById("my_modal_3").close()
                    navigator(form, { replace: true })
                    setTimeout(() => {
                        window.location.reload();
                        localStorage.setItem("user", JSON.stringify(res.data.user))
                    }, 2000);
                }


            }).catch((errors) => {
                if (errors.response) {
                    toast.error("Error:" + errors.response.data.message);
                }
            })
    }


    return (
        <div>
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={() => document.getElementById("my_modal_3").close()}>✕</Link>

                        <h3 className="font-bold text-lg">Login</h3>
                        {/* email*/}
                        <div className="mt-4 space-y-2">
                            <label>Email</label>
                            <br />
                            <input type="email" className="border rounded-md outline-none w-80 py-1 px-3" placeholder='Enter Your Mail'  {...register("email", { required: true })} />
                            <br />
                            {errors.email && <span className="text-red-500" >Email is required</span>}
                        </div>
                        {/*pass*/}
                        <div className="mt-4 space-y-2">
                            <label className="mt-4">Password</label>
                            <br />
                            <input type="password" className="border rounded-md outline-none w-80 py-1 px-3" placeholder='Enter Your Password' {...register("password", { required: true })} />
                            <br />
                            {errors.password && <span className="text-red-500">Password is required</span>}
                        </div>
                        {/*button*/}
                        <div className="flex justify-around mt-4">
                            <button className="bg-pink-600 text-white px-2 py-1 rounded-md">Login</button>
                            <p>Don`t Have Account? {"  "}<Link to='/register' className="text-blue-400 underline cursor-pointer">Register</Link></p>
                        </div>
                    </form>
                </div>
            </dialog>
        </div>
    )
}

export default Login
