import { Fragment } from 'react'
import Header from "../../components/header";
import  Tail  from "../../components/tail";

const introduce=[
    {
        title:"Brand New Service",
        h1:"New forms of service require robust infrastructure, including a trustless decentralized protocol and a platform for a good user experience.",
        a:"Learn about the new services on PlayerLink",
        ahref:"",
        a2:"",
        a2href:"",
        a2style:"",
        img:'https://cdn.discordapp.com/attachments/876498266550853642/932149741037453362/1.png',

    },
    {
        title:"Reputation Solutions",
        h1:"PlayerLink is building a new service reputation system for Web3.PlayerLink has a unique reputation algorithm and trusted service metrics.",
        a:"Go to PlayerLink to check",
        ahref:"",
        a2:"",
        a2href:"",
        a2style:"",
        img:'https://cdn.discordapp.com/attachments/876498266550853642/931512427894407168/3.png',


    },
    {
        title:"For Web3 and Metaverse",
        h1:"PlayerLink works with everyone to build new forms of services.We have the support of countless community enthusiasts around the world.",
        a:"PlayerLink-Platform",
        ahref:"",
        a2:"",
        a2href:"",
        img:'https://cdn.discordapp.com/attachments/876498266550853642/931502408729780264/2.png',
        a2style:"",

    },

]
const  path=[
    {
        i:"",
        title:"Create an account & choose a path",
        h1:"The best way to start a new service experience in PlayerLink is to register an account (wallet). Then, choose the first step in your journey.",
        a:"Create an Account",
        ahref:"",
    },
    {
        i:"fa fa-code text-green-600",
        title:"Build",
        h1:"Build decentralized apps on a developer-friendly platform that features low fees, high speeds, and infinite scalability.",
        a:"I'm a Developer",
        ahref:"",
    },
    {
        i:"fa fa-gg text-blue-300",
        title:"Use",
        h1:"Choose the service you like through a platform with a good user experience no commission fee",
        a:"I am a User",
        ahref:"",
    },
    {
        i:"fa fa-futbol-o text-indigo-300",
        title:"Link",
        h1:"Earn your bounties by connecting service providers and users! And become a member of PlayerLink",
        a:"I am a Consultant",
        ahref:"",
    },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Home() {
    return (
        <div className="min-h-screen bg-white">
            <header>
               <Header></Header>
            </header>
            <main>
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

                            <div className="max-w-7xl relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 2xl:mx-auto md:flex justify-between xl:mb-48">
                                <div>
                                    <h1 className=" md:max-w-xs xl:max-w-xl mb-32">
                                        <span className="block text-black text-4xl  tracking-tight sm:text-5xl pb-12">Connected to every one of us.</span>
                                        <span className="block text-sm text-gray-400">  A Trustless Decentralized Web3-Oriented Service Aggregation Protocol.
                                            Through reliable, secure, and scalable technology, PlayerLink empowers billions to create and get a new service experience.

                                    </span>
                                    </h1>
                                </div>
                                <div className="w-56 xl:w-72  md:-mt-8">
                                    <h1 className="text-gray-500 font-normal mb-10">FEATURED</h1>
                                    <h2 className="text-xl mb-8">March 1th Genesis</h2>
                                    <h3 className="text-gray-500 font-normal text-sm mb-8">
                                        PlayerLink will officially set sail in 2022, come and build a new service and experience with us!</h3>

                                    <h4><a className="text-blue-500 text-sm font-medium hover:text-blue-800 " href="">Register Today
                                        <i className="fa fa-chevron-right ml-5" aria-hidden="true"></i>
                                    </a></h4>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

               <div className="mt-16">
                {introduce.map((item=>(
                <div key={item.title} className="max-w-7xl mx-auto py-16  px-4 md:flex justify-between">

                    <div  className="mt-6 xl:mt-36 mb-6 xl:max-w-xl ">
                        <h1 className="text-3xl mb-5">{item.title}</h1>

                        <h2 className="text-sm text-gray-500 mb-5">{item.h1}</h2>
                        <div>
                            <div className="mb-5">
                        <a className="text-blue-500 text-sm font-medium  hover:text-blue-800 " href={item.ahref}>{item.a}
                            <i className="fa fa-chevron-right ml-5" aria-hidden="true"></i>
                        </a></div>
                       <div> <a className="text-blue-500 text-sm font-medium  hover:text-blue-800 " href={item.a2href}>{item.a2}
                            <i className={item.a2style} aria-hidden="true"></i>
                        </a>
                       </div>
                        </div>
                    </div>
                        <div className="md:ml-10">
                        <img className="" src={item.img} alt=""/>
                    </div>
                </div> )))}
               </div>
                <div className="mt-6 max-w-7xl mx-auto py-16  px-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
                    {path.map((item=>(
                    <div key={item.title} className="mr-7 mb-10 ">
                  <div className="text-3xl">
                      <div className="pb-3 ">
                     <i className={item.i} aria-hidden="true"></i>
                      </div>
                    <h1 className="text-3xl mb-5">{item.title}</h1>
                  </div>
                    <h2 className="text-sm text-gray-500 mb-8">
                        {item.h1}</h2>
                    <div className="flex justify-between"><a href={item.ahref}  className=" px-5 py-3 rounded-full text-gray-600 text-base font-normal border border-black transition duration-700 hover:bg-gray-700  hover:text-white">
                        {item.a}</a></div>
                    </div>

                    )))}
                </div>
               <Tail></Tail>

                {/* More main page content here... */}
            </main>
        </div>
    )
}
