import React from 'react'

const hero = ({heading, message}) => {
    return (
        <div className='flex items-center justify-center h-screen mb-[10rem] bg-fixed bg-center bg-cover custom-img'>
            
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2]"/>
            <div  className=" p-10 text-white z-[2] mt-[-1rem] text-center">
                <h2 className="title_text text-5xl font-bold">{heading}</h2>
                <p className="py-10 text-xl text-blue-300">{message}</p>
                <button className="px-8 py-2 border">Learn more</button>
            </div>
            </div>
        
    )
}

export default hero
