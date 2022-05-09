import React from "react";
import Topright from "../Assets/tr.svg"
import Microsoft from "../Assets/microsoft.svg"
import Google from "../Assets/Google.svg"
import Databricks from "../Assets/databricks.svg"
import Amazon from "../Assets/Amazon.svg"
import Github from "../Assets/Github.svg"
import './Top.css'

export default function Top(){
    return(
        <div className="background2 bg-bottom h-auto w-screen"  >
            <div className="grid pt-24 place-items-center xs:grid-cols-1 xs:px-10 md:grid-cols-2 md:px-20 ">
                <div className="content-center md:self-center xs:text-center md:text-left ">
                    <h1 className="font-sans font-bold text-white xs:text-3xl md:text-5xl"><span className="text-gray-700">A New Different Way</span> <span>To Improve Your Skills</span></h1>
                    <p className="font-sans mt-5 text-white sm:text-lg md:text-xl">Eduplace is a global training provider based across the Indonesia that specialises in accredited and bespoke tarining courses</p>
                </div>
                <div className="place-items-center xs:pt-10">
                    <img className="w-full ml-auto xs:w-full" src={Topright}/>
                </div>
            </div>
            <p className="text-white text-center mt-5 ">Trusted by many Companies Wordwide</p>
            <div className="flex justify-center">
                <div className="bg-white border rounded-lg shadow-lg px-5 py-5 mt-5 w-1/2 grid place-items-center gap-y-10 md:gap-x-10 md:grid-rows-1 xs:grid-cols-1 md:grid-cols-5 ">                       
                    <img className="xs:w-5/12 md:w-full"  src={Google}/>
                    <img className="xs:w-5/12 md:w-full" src={Microsoft}/>
                    <img className="xs:w-5/12 md:w-full" src={Github}/>
                    <img className="xs:w-5/12 md:w-full" src={Databricks}/>
                    <img className="xs:w-5/12 md:w-full" src={Amazon}/>
                </div>
            </div>
        </div>
    )
}