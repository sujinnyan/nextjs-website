import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

function Footer() {
	return (
		<>
			<div className="bg-gray-50 h-1/2 w-full flex md:flex-row flex-col justify-around items-start p-20">
				<div className="p-5 ">
					<ul>
						<p className="text-gray-800 font-bold text-3xl pb-6">
							Co.<span className="text-blue-600">Travel</span>
						</p>
                    
						<div className="flex gap-6 pb-5">
							<FaInstagram className="text-2xl cursor-pointer hover:text-yellow-600" />
							<FaTwitter className="text-2xl cursor-pointer hover:text-blue-600" />
							<FaLinkedin className="text-2xl cursor-pointer hover:text-blue-600" />
							<FaYoutube className="text-2xl cursor-pointer hover:text-red-600" />
						</div>
					</ul>
				</div>
			<div>
				<div className="p-5">
					<ul className=" flex justify-between">
						<li className="text-gray-500 text-md pr-5 pb-2 font-bold hover:text-blue-600 cursor-pointer">
							About
						</li>
						<li className="text-gray-500 text-md px-5 pb-2 font-bold hover:text-blue-600 cursor-pointer">
							Gallery
						</li>
						<li className="text-gray-500 text-md px-5 pb-2 font-bold hover:text-blue-600 cursor-pointer">
							Contact
						</li>
						<li className="text-gray-500 text-md px-5 pb-2 font-bold hover:text-blue-600 cursor-pointer">
							Careers
						</li>
						
					</ul>
				</div>


                </div>


			</div>


			<div className="flex flex-col justify-center items-center text-center  p-5 bg-gray-50">
				<h1 className=" text-gray-800 font-semibold">
					© 2022 All rights reserved | Build by Sujin An
				</h1>
			</div>
		</>
	);
}

export default Footer;