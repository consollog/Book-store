import React from 'react'
import bookeimg from "../../public/bookeimage.jpg"

function Cards({ item }) {
    // console.log(item);
    return (
        <>
            <div className=" my-3 p-3 flex ">
                <div className="card w-96 bg-base-100 shadow-xl dark:bg-slate-900 dark:text-white border">
                    <figure><img src={bookeimg} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            {item.name}
                            <div className="badge badge-secondary">{item.catagory}</div>
                        </h2>
                        <p>{item.title}</p>
                        <div className="card-actions justify-between">
                            <div className="badge badge-outline">1$</div>
                            <div className="cursor-pointer rounded-full px-2 py-1 border-[2px] hover:bg-pink-500 hover:text-white duration-200">Products</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cards

/* <div>
 <h3>1</h3>
</div>
<div>
    <h3>2</h3>
</div>
<div>
    <h3>3</h3>
</div>
<div>
    <h3>4</h3>
</div>
<div>
    <h3>5</h3>
</div>
<div>
    <h3>6</h3>
</div>
<div>
    <h3>7</h3>
</div>
<div>
    <h3>8</h3>
</div> */