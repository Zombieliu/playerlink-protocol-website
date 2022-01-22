
import { Fragment } from 'react'
const toend=[
    {
        title:"Quick Entry",
        h1:"About PlayerLink",
        h1url:"#",
        h2:"Manual",
        h2url:"#",
        h3:"Update record",
        h3url:"#",
        h4:"Any feedback",
        h4url:"#",
        h5:"",
        h5url:"",
    },
    {
        title:"Links",
        h1:"Protocol",
        h1url:"https://playerlink.org/",
        h2:"Network ",
        h2url:"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fplayerlink.network#/explorer",
        h3:"Foundation",
        h3url:" https://playerlink.foundation/",
        h4:"Ventures ",
        h4url:"https://playerlink.ventures/",
        h5:"Capital ",
        h5url:" https://playerlink.capital/"
    },{
        title:"社区",
        h1:"Discord",
        h1url:"https://discord.gg/Hypkryxwsb",
        h2:"Telegram",
        h2url:"https://t.me/PlayerLink",
        h3:"Instagram",
        h3url:"#",
        h4:'Medium',
        h4url:"",
        h5:"Twitter",
        h5url:"",
    },
]

export default function Tail(){
    return(
        <div>
            <div className="text-center mt-5 ">
                <div className="font-extrabold">
                    Subscription
                </div>
                <div className="text-4xl mt-6 font-extrabold">
                    Stay up to date on PlayerLink
                </div>
                <div className="mt-5 md:flex justify-center">
                    <input type="text"
                           className="bg-gray-50 text-lg rounded-full p-3   w-9/12 lg:w-8/12 xl:w-5/12 border hover:border-indigo-500 "
                           placeholder="Email"/>
                    <p className="flex justify-center text-center text-base font-medium text-gray-500">
                        <button  className="text-lg whitespace-nowrap border-2 border-blue-400 inline-flex items-center md:-ml-44 md:mt-1 md:mb-1 mt-6 py-3 px-24 justify-center md:px-10  border border-transparent rounded-full shadow-sm text-base font-medium text-black bg-white transform duration-500 hover:shadow-2xl "
                        >
                            Subscribe
                        </button>
                    </p>
                </div>
                <div className="mt-12 border-t ">
                    <div className="flex justify-center">
                        <img
                            className="w-72  " src="https://cdn.discordapp.com/attachments/897398778166906911/916731990269644902/11.png" alt=""/>
                    </div>
                    <div className="border-b">
                        <div className=" pt-5  sm:px-6 lg:px-8 ">
                            <div className="md:flex md:justify-around mb-12 ">
                                {toend.map((ends)=>(
                                    <div key={ends.title} className="">
                                        <div className="mb-6">
                                            <h1 className="flex justify-center text-xl font-bold text-black mb-4">
                                                {ends.title}
                                            </h1>
                                            <h2 className="">
                                                <p className="flex mb-2 justify-center text-gray-400 hover:text-black hover:underline delay-75">
                                                    <a href={ends.h1url}>{ends.h1}</a></p>
                                                <p className="flex mb-2 justify-center text-gray-400 hover:text-black  hover:underline delay-75">
                                                    <a href={ends.h2url}>{ends.h2}</a></p>
                                                <p className="flex mb-2 justify-center text-gray-400 hover:text-black hover:underline delay-75">
                                                    <a href={ends.h3url}>{ends.h3}</a></p>
                                                <p className="flex mb-2 justify-center text-gray-400 hover:text-black hover:underline delay-75">
                                                    <a href={ends.h4url}>{ends.h4}</a></p>
                                                <p className="flex mb-2 justify-center text-gray-400 hover:text-black hover:underline delay-75">
                                                    <a href={ends.h5url}>{ends.h5}</a></p>
                                            </h2>
                                        </div>
                                    </div>))}
                            </div>



                        </div>

                    </div>
                    <p className=" text-center p-5 text-left  text-sm font-semibold uppercase text-gray-500 tracking-wide">
                        ©2022 PlayerLink,A service platform built on PlayerLink.  All RIGHTS RESERVED.
                    </p>
                </div>


            </div>
        </div>
    )
}