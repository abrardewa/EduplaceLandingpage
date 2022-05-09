import React from "react";
import { LocationMarkerIcon } from "@heroicons/react/outline";
import Facebook from '../Assets/icon/facebook.svg'
import Youtube from '../Assets/icon/youtube.svg'
import Instagram from '../Assets/icon/instagram.svg'
import './Bot.css'

const Courses = [
    { name: 'Machine Learning', href: '#'},
    { name: 'Data Analyst', href: '#'},
    { name: 'Fullstack Web', href: '#' },
    { name: 'View More', href: '#'},
]
const About = [
    { name: 'Contact Us', href: '#'},
    { name: 'Privacy and Policy', href: '#'},
    { name: 'Terms and Condition', href: '#' },
    { name: 'FAQ', href: '#'},
]
export default function Bot(){
    return(
        <div className="bg-color w-screen">
            <div className="container mx-auto px-20 pt-16 pb-20">
                <div className="grid md:grid-rows-1 xs:gap-y-5 md:grid-cols-5 md:gap-x-20">
                    <div className="py-3 md:col-span-3">
                        <h1 className="text-3xl text-gray-800 font-bold pb-8">Eduplace</h1>
                        <div className="grid grid-cols-2 pt-2 xs:w-16 md:w-2/12">
                            <LocationMarkerIcon className="fill-gray-600 stroke-gray-800 w-6 self-center" />
                            <p className="w-64">Eduplace is located in Surabaya, Indonesia</p>
                        </div>
                        <div className="grid grid-cols-3 w-fit gap-3 pt-4">
                            <a href="#"><img src={Facebook} className="fill-gray-700"/></a>
                            <a href="#"><img src={Instagram} style={{fill:"#374151" } }/></a>
                            <a href="#"><img src={Youtube} style={{fill:"#374151" } }/></a>
                        </div>
                    </div>
                    <div className="py-3">
                        <h1 className="text-3xl text-gray-800 font-bold pb-8">Courses</h1>
                        {Courses.map((item) => (
                            <p className="text-gray-700 pb-1 w-fit hover:border-b hover:border-gray-900 hover:text-gray-900"><a key={item.name} href={item.href} >{item.name}</a></p>
                        ))}
                    </div>
                    <div className="py-3">
                        <h1 className="text-3xl text-gray-800 font-bold pb-8">About</h1>
                        {About.map((item) => (
                            <p className="text-gray-700 pb-1 w-fit hover:border-b hover:border-gray-900 hover:text-gray-900"><a key={item.name} href={item.href} >{item.name}</a></p>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}