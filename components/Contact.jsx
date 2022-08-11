import React from 'react'

const Contact = () => {
    return (

        <div className="max-w-[1240px] m-auto h-screen">
            <h1 className="text-2xl font-bold text-center p-2">Contact</h1>
            <p className="text-1xl text-center pb-6">Submit the form below</p>
            <form className="max-w-[800px] m-auto">
                <div className="grid grid-cols-2 gap-2">
                    <input className="border shadow-lg p-3" type="text" placeholder="Name" />
                    <input className="border shadow-lg p-3" type="email" placeholder="Email" />
                </div>

                <input className=" p-3 w-full my-2 border shadow-lg"  placeholder="Subject" type="text"  />
                <textarea className="border p-3 w-full shadow-lg" cols="30" rows="10" placeholder="Message" />
                <button className="border p-3 w-full shadow-lg mt-2 hover:text-white cursor-pointer">Submit</button>
            </form>
        </div>
    )
}

export default Contact
