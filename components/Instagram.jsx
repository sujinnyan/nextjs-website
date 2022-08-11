import React from 'react'
import IgImg1 from '../public/Img-1.jpg'
import IgImg2 from '../public/Img-3.jpg'
import IgImg3 from '../public/Img-4.jpg'
import IgImg4 from '../public/Img-5.jpg'
import IgImg5 from '../public/Img-6.jpg'
import IgImg6 from '../public/Img-7.jpg'
import IgImg7 from '../public/Img-8.jpg'
import IgImg8 from '../public/Img-9.jpg'
import IgImg9 from '../public/Img-10.jpg'

import InstagramImg from './InstagramImg'



const Instagram = () => {
    return (
        <div className="max-w-[1240px] mx-auto text-center py-24">
            <p className="text-2xl font-bold">/ Follow me on Instagram /</p>
            <p className="pb-4">@Co.Travel</p>
            <div className="grid gird-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 p-4">
                <InstagramImg socialImg={IgImg1} />
                <InstagramImg socialImg={IgImg2} />
                <InstagramImg socialImg={IgImg3} />
                <InstagramImg socialImg={IgImg4} />
                <InstagramImg socialImg={IgImg5} />
                <InstagramImg socialImg={IgImg6} />
                <InstagramImg socialImg={IgImg7} />
                <InstagramImg socialImg={IgImg8} />
                <InstagramImg socialImg={IgImg9} />
            </div>
        </div>
    )
}

export default Instagram
