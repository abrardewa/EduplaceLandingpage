import React, { Fragment,useState, useEffect } from "react";
import { BookmarkIcon,BriefcaseIcon,BookOpenIcon, ArrowRightIcon } from "@heroicons/react/outline";
import './Mid.css'
import Img1 from '../Assets/coding1.png'
import Img2 from '../Assets/coding2.png'
import Img3 from '../Assets/dataanalyst.png'
import Img4 from '../Assets/ml.png'

const navigation = [
    { name: 'All', href: '#', current: true },
    { name: 'Machine Learning', href: '#', current: false },
    { name: 'Data Analyst', href: '#', current: false },
    { name: 'Fullstack Web', href: '#', current: false },
    { name: 'Front End Web', href: '#', current: false },
    { name: 'View More', href: '#', current: false },
  ]

export default function Mid(){
    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
      }
    return(
        <>
        <div className="bg-white h-fit w-screen pt-20 pb-20"  >
            <h1 className="text-2xl text-center"><span className="text-color2 font-bold">Achieve Your Goals</span><span className="text-color1 font-bold"> With Edulab</span></h1>
            <p className="text-center mt-3 text-gray-500">Edulab will help you to achieve your dreams and make it easier for you to find a job</p>
            <div className="flex justify-center">
                <div className="grid place-items-center w-9/12 pt-10 xs:gap-x-0 xs:grid-cols-1 md:gap-x-10 md:grid-cols-3">
                    <div className="border rounded-xl shadow-lg grid px-6 py-6 h-72 w-56 justify-items-stretch xs:mt-6 md:mt-3">
                        <BookOpenIcon className="justify-self-center pt-5 xs:w-8 md:w-10" style={{ color:"#EDC65F" }}/>
                        <span><p className="font-bold text-gray-600 xs:text-md md:text-lg">Learn the latest skills</p>
                        <p className="text-gray-500  xs:text-sm md:text-md">They are many variations of passage of Lorem Ipsum available but.</p></span>
                    </div>
                    <div className="border rounded-xl shadow-lg grid px-6 py-6 h-72 w-56 justify-items-stretch xs:mt-6 md:mt-3">
                        <BriefcaseIcon className="justify-self-center pt-5 xs:w-8 md:w-10" style={{ color:"#EDC65F" }}/>
                        <span><p className="font-bold text-gray-600 xs:text-md md:text-lg">Learn the latest skills</p>
                        <p className="text-gray-500  xs:text-sm md:text-md">They are many variations of passage of Lorem Ipsum available but.</p></span>
                    </div>
                    <div className="border rounded-xl shadow-lg grid px-6 py-6 h-72 w-56 justify-items-stretch xs:mt-6 md:mt-3">
                        <BookmarkIcon className="justify-self-center pt-5 xs:w-8 md:w-10" style={{ color:"#EDC65F" }}/>
                        <span><p className="font-bold text-gray-600 xs:text-md md:text-lg">Learn the latest skills</p>
                        <p className="text-gray-500  xs:text-sm md:text-md">They are many variations of passage of Lorem Ipsum available but.</p></span>
                    </div>
                    
                </div>
            </div>
        </div>
        <div className="bg-gray-100 h-fit w-screen pt-20 pb-20 px-20"  >
            <h1 className="text-2xl text-center"><span className="text-color2 font-bold">Our</span><span className="text-color1 font-bold"> Popular Course </span></h1>
            <div className="flex justify-center pt-5">
                <div class="flex place-items-center scroll-smooth overflow-scroll snap-x overflow-x-auto space-x-5 xs:w-screen md:w-fit px-5 border-b-2">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? 'flex-shrink-0 snap-center border-b-4 rounded-b-sm border-gray-700 text-text-700 px-10 text-sm' : 'flex-shrink-0 snap-center text-gray-600 hover:border-b-4 hover:rounded-b-sm hover:border-gray-500 hover:text-gray-500',
                          'px-3 py-2 text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                </div>
                <ArrowRightIcon className=" w-7 sm:block md:hidden "/>   
            </div>
            <div className="flex justify-center">
                <div className="grid place-items-center w-fit pt-10  xs:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xs:gap-y-10 md:gap-x-24">
                    <div className="border rounded-xl shadow-lg grid px-6 py-6 h-auto min-h-full w-fit  justify-items-stretch xs:mt-6 md:mt-3">
                        <div className="flex justify-center">
                            <img src={Img1} className="w-max max-w-xs h-auto md:max-h-52 xs:max-h-40 border-none rounded-xl"/>
                        </div>
                        <span>
                            <p className="font-bold text-gray-600 pt-5 xs:text-md md:text-lg">React Native</p>
                            <p className="text-gray-500  xs:text-sm md:text-md">Lorem Ipsum</p>
                        </span>
                        <div className=" grid grid-cols-2 pt-3">
                            <a className="border-none rounded-full bg-gray-500 text-white justify-self-start w-fit px-3 self-center">
                                Get Free
                            </a>
                            <div className="grid grid-cols-2 border-none rounded-full text-gray-700 justify-self-center w-20 px-3">
                                <BookOpenIcon className="w-5 self-center"></BookOpenIcon>
                                <p className="w-40 self-center">8 Lesson</p>
                            </div>
                        </div>
                    </div>
                    <div className="border rounded-xl shadow-lg grid px-6 py-6 h-auto min-h-full w-fit  justify-items-stretch xs:mt-6 md:mt-3">
                        <div className="flex justify-center">
                            <img src={Img1} className="w-max max-w-xs h-auto md:max-h-52 xs:max-h-40 border-none rounded-xl"/>
                        </div>
                        <span>
                            <p className="font-bold text-gray-600 pt-5 xs:text-md md:text-lg">React Native</p>
                            <p className="text-gray-500  xs:text-sm md:text-md">Lorem Ipsum</p>
                        </span>
                        <div className=" grid grid-cols-2 pt-3">
                            <a className="border-none rounded-full bg-gray-500 text-white justify-self-start w-fit px-3 self-center">
                                Get Free
                            </a>
                            <div className="grid grid-cols-2 border-none rounded-full text-gray-700 justify-self-center w-20 px-3">
                                <BookOpenIcon className="w-5 self-center"></BookOpenIcon>
                                <p className="w-40 self-center">8 Lesson</p>
                            </div>
                        </div>
                    </div>
                    <div className="border rounded-xl shadow-lg grid px-6 py-6 h-auto min-h-full w-fit  justify-items-stretch xs:mt-6 md:mt-3">
                        <div className="flex justify-center">
                            <img src={Img1} className="w-max max-w-xs h-auto md:max-h-52 xs:max-h-40 border-none rounded-xl"/>
                        </div>
                        <span>
                            <p className="font-bold text-gray-600 pt-5 xs:text-md md:text-lg">React Native</p>
                            <p className="text-gray-500  xs:text-sm md:text-md">Lorem Ipsum</p>
                        </span>
                        <div className=" grid grid-cols-2 pt-3">
                            <a className="border-none rounded-full bg-gray-500 text-white justify-self-start w-fit px-3 self-center">
                                Get Free
                            </a>
                            <div className="grid grid-cols-2 border-none rounded-full text-gray-700 justify-self-center w-20 px-3">
                                <BookOpenIcon className="w-5 self-center"></BookOpenIcon>
                                <p className="w-40 self-center">8 Lesson</p>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
        <div className="bg-white w-full h-fit py-32 xs:px-5 md:px-20">
            <div className="flex justify-center">
                <div className="container xs:w-full md:w-8/12 xs:px-3 border bg-color-warning py-10 border-none rounded-3xl shadow-xl">
                    <h1 className="xs:text-xl md:text-2xl text-center font-bold text-gray-800">Suscribe to Our News Letter</h1>
                    <p className="xs:text-xs md:text-sm text-center text-gray-700 py-4">Suscribe to our Newsletter to get interesting info about our courses</p>
                    <form className="my-8">
                        <div className="flex justify-center">
                            <input type="email" className="border-none rounded-xl h-auto xs:w-8/12 md:w-5/12 mr-6 p-3" placeholder="Enter Your Email Address"></input>
                            <button type="submit" className=" xs:text-xs md:text-base bg-gray-500 text-white border-none rounded-xl py-2 px-4 w-fit hover:bg-gray-700">Subscribe</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </>
    )
}