import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Cards from './Cards'
import { Link } from 'react-router-dom'

const Courses = () => {
  const [data, setdata] = useState([]);
  useEffect(() => {
    const getdata = async () => {
      const bookdata = await axios.get("http://localhost:3000/book")
      const PaidData = bookdata.data.filter((item) => item.catagory != "free")
      console.log(PaidData);
      setdata(PaidData);
    }
    getdata();
  }, [])
  // console.log(PaidData);
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 mt-20">
        <div className="items-center justify-center text-center ">
          <h2 className="text-2xl md:text-4xl font-semibold">We`re delighted to have you <span className="text-pink-500"> Here :)</span></h2>
          <p className="mt-10">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque fuga voluptates magni dignissimos id molestias, laboriosam, voluptatibus sed neque quos sint libero quasi pariatur expedita ducimus, eos labore? Animi, explicabo.</p>
          <Link to='/'>
            <button className=" mt-5  border-[2px] rounded-md text-white hover:bg-pink-700 bg-pink-500 py-2 px-3">Back to Home</button>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4">
          {data.map((item) => (<Cards key={item.id} item={item} />))}
        </div>
      </div>



    </>
  )
}

export default Courses
