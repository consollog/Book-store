import React from 'react'
import { useForm } from "react-hook-form"
import { Link } from 'react-router-dom'


function Contact() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => console.log(data)
    return (
        <div className="flex h-screen justify-center items-center">
            <div className="w-[500px] border-[2px] border-blue-500 p-3 relative">
                <div className="model-box">
                    <form onSubmit={handleSubmit(onSubmit)} method="dialog" className="">
                        {/* if there is a button in form, it will close the modal */}
                        <Link to='/' className="absolute right-3 top-2">✕</Link>

                        <h3 className="font-bold text-lg mt-4 flex justify-center items-center underline">Contact us</h3>
                        {/* Name*/}
                        <div className="mt-4 space-y-2">
                            <label>Name</label>
                            <br />
                            <input type="name" className="border rounded-md outline-none w-80 py-1 px-3" placeholder='Enter Your Name'  {...register("name", { required: true })} />
                            <br />
                            {errors.name && <span className="text-red-500" >Name is required</span>}
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
                            <label htmlFor="" className="mt-4">Message</label>
                            <br />
                            <textarea type="text" className="border rounded-md outline-none w-80 py-1 px-3 " placeholder='Enter Your Password'  {...register("password", { required: true })} />
                            <br />
                            {errors.text && <span className="text-red-500" >Message is required</span>}
                        </div>
                        {/*button*/}
                        <div className="flex justify-around mt-4">
                            <button className="bg-blue-400 px-3 py-2 text-white rounded-md cursor-pointer item-center" >submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact
