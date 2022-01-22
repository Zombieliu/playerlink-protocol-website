
import { Fragment } from 'react'
import Header from "../../components/header";
import Tail from "../../components/tail";

const people=[
    {
        h1:"Henry",
        h2:"CEO",
        img:"https://cdn.discordapp.com/attachments/897398778166906911/928298254746140722/liu.jpg",
    },
    {
        h1:"Cheng-gh",
        h2:"",
        img:"https://cdn.discordapp.com/attachments/897398778166906911/928512630069530665/a01d47fe6e570785.jpg",
    },

    {
        h1:"Xue you",
        h2:"",
        img:"https://cdn.discordapp.com/attachments/897398778166906911/928512631030034482/20220106125631.jpg",
    },
    {
        h1:"Feng Feng",
        h2:"",
        img:"https://cdn.discordapp.com/attachments/897398778166906911/928512630321213490/77f952791fc16829.jpg",
    },
    {
        h1:"Bo Bo",
        h2:"",
        img:"https://cdn.discordapp.com/attachments/897398778166906911/928512630539305030/b08c0aaa4908598c.jpg",
    },
    {
        h1:"Joan",
        h2:"",
        img:"https://cdn.discordapp.com/attachments/897398778166906911/928512630786760775/join.jpg",
    },
    {
        h1:"Able",
        h2:"",
        img:"https://cdn.discordapp.com/attachments/897398778166906911/928294692767010906/20220105223124.jpg",
    },
    {
        h1:"David",
        h2:"",
        img:"https://cdn.discordapp.com/attachments/897398778166906911/928294804633305128/20220105223158.jpg",
    },


]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}
export default function Contributor() {
    return(
        <div className="min-h-screen bg-white">
            <header>
                <Header></Header>
            </header>
            <main>
                <div>
                    {/* Hero card */}
                    <div className="relative pt-20">
                        <div className="absolute inset-x-0 bottom-0    " />
                        <div className=" mx-auto  ">
                            <div className="relative sm:overflow-hidden">
                                <div className="absolute inset-0">
                                    <img
                                        className="h-full w-full object-cover"
                                        src="https://cdn.discordapp.com/attachments/897398778166906911/930821324136390716/12312312asd.jpg"
                                        alt="People working on laptops"
                                    />

                                </div>
                                <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 mx-auto max-w-7xl">
                                    <h1 className=" ">
                                        <span className="block text-black text-4xl  tracking-tight sm:text-5xl pb-12">Contributor</span>
                                        <span className="block text-base text-indigo-200">Tribute to our community contributors.
                                    </span>
                                    </h1>

                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Logo cloud */}
                    <div className="max-w-7xl mx-auto py-16  px-4 ">
                        <div className="">
                            <div  className="text-5xl text-black text-center font-medium  mt-5">
                                <div className="mt-5  text-3xl">
                                   The People
                                </div>
                            </div>
                            <div className=" flex mt-5 grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
                                {people.map((item=>(

                                    <div key={item.h1} className="mt-5 mr-5 pb-5 text-center">
                                        <div className="rounded-full h-20 w-20 mx-auto mb-5">
                                        <img className="rounded-full " src={item.img} alt=""/></div>
                                        <h1 className="font-semibold text-xl ">{item.h1}</h1>
                                       <h2 className="mt-5  text-indigo-600 font-semibold text-xl">{item.h2}</h2>
                                    </div>
                                )))}

                            </div>

                        </div>

                    </div>
                </div>
                <Tail></Tail>

                {/* More main page content here... */}
            </main>
        </div>
    )
}
