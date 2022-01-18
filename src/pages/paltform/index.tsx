
import { Fragment } from 'react'
import Header from "../../components/header";
import Tail from "../../components/tail";

const whatplayerlink=[
    {
        title:"A Protocol",
        h1:"Built by contributors all over the world,Create a new form of agreement.",
        a:"Learn more",
        href:"/home",
    },
    {
        title:"A  Platform",
        h1:"An easy-to-use, user-facing trusted platform.",
        a:"Learn more",
        href:"https://playerlink.io/",
    },

    {
        title:"A Blockchain",
        h1:"Building a new generation of Web3-oriented services with Substrate.",
        a1:"",
        a1href:"",
        h2:" ",
        a:"Learn more",
        href:"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fplayerlink.network#/explorer",

    },

]
const buildplayerlink=[
    {
        title:"Sustainable",
        h1:"Our efficient PoS network was also certified as carbon-neutral in February 2021 by south pole.",
        a1:"",
        a1href:"",

    },
    {
        title:"No Need To Trust",
        h1:"All historical data on the network can be verified and securely backed up.",

    },
    {
        title:"Decentralization",
        h1:"A service network maintained by members of the global community.",

    },
    {
        title:"Safety",
        h1:"The network has higher security through decentralized node guarantee.",
        a1:"",
        a1href:"",
        h2:"",

    },
    {
        title:"High Performance",
        h1:"Separate module design enables thousands of service transactions per minute.",

    },
    {
        title:"Low Cost",
        h1:"Thanks to an excellent economic model, network participants do not need to pay high fees.",

    },
]
const onbuildplayerlink=[
    {
        title:"TypeScript User Example",
        h1:"With a simple code, users can use PlayerLink to experience the service.",
        a:"Learn more",
        href:"https://github.com/playerlinkio/playerlink-user-back-end-ts-example",
    },
    {
        title:"Jave User Example",
        h1:"Users of the Jave version implement with code samples.",
        a:"Learn more",
        href:"https://github.com/playerlinkio/playerlink-user-back-end-java-example",
    },

    {
        title:"Python User Example",
        h1:"Users of the Python version implement with code samples.",
        a:"Learn more",
        href:"",
    },
    {
        title:"TypeScript Build Example",
        h1:"Through simple code service builder can provide external services through PlayerLink.",
        a:"Learn more",
        href:"https://github.com/playerlinkio/playerlink-builder-back-end-ts-example",
    },
    {
        title:"Jave Build Example",
        h1:"Users of the Jave version implement with code samples.",
        a:"Learn more",
        href:"https://github.com/playerlinkio/playerlink-builder-back-end-java-example",
    },
    {
        title:"Python Build Example",
        h1:"Users of the Python version implement with code samples.",
        a:"Learn more",
        href:"",
    },





]
function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}
export default function Paltform() {
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
                                        <span className="block text-black text-4xl  tracking-tight sm:text-5xl pb-12">Platform</span>
                                        <span className="block text-base text-indigo-200">PlayerLink is a collective, a foundation,  and service platform built on <br/>a new layer 0 blockchain.
                                    </span>
                                    </h1>

                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Logo cloud */}
                    <div className="max-w-7xl mx-auto py-16  px-4 ">
                        <div className="xl:flex xl:-mt-10">
                            <div  className="text-5xl text-black font-medium pr-20 mt-5">
                                <i className="fa fa-dot-circle-o text-blue-400 mb-3 " aria-hidden="true"></i>
                                <div className="mt-5 xl:w-56 text-3xl">
                                    What is PlayerLink?
                                </div>
                            </div>
                            <div className=" flex mt-5 grid md:grid-cols-2 xl:grid-cols-3">
                                {whatplayerlink.map((item=>(

                                    <div key={item.title} className="mt-5 mr-5 xl:mr-10">
                                        <h1 className="font-semibold text-xl">{item.title}</h1>
                                        <h2 className="py-8 text-gray-500 text-sm">{item.h1}
                                            <a href={item.a1href} className="text-gray-700 hover:text-gray-500 underline ">{item.a1}</a>
                                            {item.h2}
                                        </h2>
                                        <a className="text-blue-300 font-medium hover:text-blue-600 " href={item.href}>{item.a} <i className="fa fa-chevron-right ml-5" aria-hidden="true"></i>
                                        </a>
                                    </div>
                                )))}

                            </div>

                        </div>
                        <div className="xl:flex my-36">
                            <div  className="text-5xl text-black font-medium pr-20 mt-5">
                                <i className="fa fa-cubes  text-green-400 mb-3" aria-hidden="true"></i>
                                <div className="mt-5 xl:w-56 text-3xl">
                                    Why build on PlayerLink?
                                </div>
                            </div>
                            <div className=" flex mt-5 grid md:grid-cols-2 xl:grid-cols-3">
                                {buildplayerlink.map((item=>(

                                    <div key={item.title} className="mt-5 mr-5 xl:mr-10">
                                        <h1 className="font-semibold text-xl">{item.title}</h1>
                                        <h2 className="py-8 text-gray-500 text-sm">{item.h1}
                                            <a href={item.a1href} className="text-gray-700 hover:text-gray-500 underline ">{item.a1}</a>
                                            {item.h2}
                                        </h2>

                                    </div>
                                )))}

                            </div>

                        </div>
                        <div className="xl:flex ">
                            <div  className="text-5xl text-black font-medium pr-20 mt-5">
                                <i className="fa fa-search text-yellow-300 mb-3 " aria-hidden="true"></i>
                                <div className="mt-5 xl:w-56 mb-6 text-3xl">
                                    How do I build on PlayerLink?
                                </div>
                                <div><a href="" className=" px-5 py-3 rounded-full text-gray-600 text-lg font-normal border border-black transition duration-700 hover:bg-gray-700  hover:text-white">
                                    Jump to the Docs</a></div>
                            </div>
                            <div className=" flex mt-5 grid md:grid-cols-2 xl:grid-cols-3 ">
                                {onbuildplayerlink.map((item=>(

                                    <div key={item.title} className="mt-5 mr-5 xl:mr-10 mb-10">
                                        <h1 className="font-semibold text-xl">{item.title}</h1>
                                        <h2 className="py-8 text-gray-500 text-sm">{item.h1}
                                        </h2>
                                        <a className="text-blue-300 font-medium hover:text-blue-600 " href={item.href}>{item.a} <i className="fa fa-chevron-right ml-5" aria-hidden="true"></i>
                                        </a>
                                    </div>
                                )))}

                            </div>

                        </div>
                        <div className="md:flex justify-center my-32 ">
                            <div className="w-80 mr-32">
                                <h1 className="flex flex-wrap text-3xl mb-5">Explore <div className="ml-1 text-purple-400 mb-3"> Courses </div>
                                    <div className="ml-1 text-purple-400">& Workshops</div></h1>
                                <h2 className="mb-5 text-gray-500">PlayerLink University can help you start building on PlayerLink.</h2>
                                <h3><a className="text-blue-300 font-medium hover:text-blue-600 " href="">
                                    Visit PlayerLink.university
                                    <i className="fa fa-chevron-right ml-5" aria-hidden="true"></i>
                                </a></h3>
                            </div>
                            <div className="flex justify-center mt-20 md:mt-0">
                                <img className="w-48 h-48" src="https://cdn.discordapp.com/attachments/876498266550853642/931859468201910292/c6529312c54d4d6e.png" alt=""/>
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
