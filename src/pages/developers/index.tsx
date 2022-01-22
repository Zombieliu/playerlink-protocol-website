
import { Fragment } from 'react'
import Header from "../../components/header";
import Tail from "../../components/tail";

const whyplayerlink=[
    {
        i:"fa fa-laptop text-blue-400",
        title:"Developer Friendly",
        h1:"No need to learn and write any smart contracts.",

    },
    {
        i:"fa fa-money text-yellow-400",
        title:"Get Paid",
        h1:"Service Builders will receive service usage fees.",

    },
    {
        i:"fa fa-arrows-alt text-indigo-400",
        title:"Limitless Scalability",
        h1:"PlayerLink passes aggregate signatures, threshold signatures, and zk-SNARKs with low, stable gas fees.",

    },
    {
        i:"fa fa-link text-purple-700",
        title:"Built-in Bridges",
        h1:"Multi-chain integration." ,

    },

    {
        i:"fa fa-leaf text-green-300",
        title:"To Green",
        h1:"The world’s first certified climate-neutral blockchain.",

    },
    {
        i:"fa fa-bolt text-yellow-400",
        title:" Fast",
        h1:"Verify service instantly on PlayerLink.",

    },

]
const onbuildplayerlink=[
    {
        img:"https://near.org/wp-content/uploads/2021/09/flux-300x300.jpg",
        title:"Flux",
        h1:"Learn how flux built a fast, inexpensive, and decentralized open market protocol on PlayerLink.",
        a:"Read Case Study",
        href:"",
    },
    {
        img:"https://near.org/wp-content/uploads/2021/09/mintbase-300x300.jpg",
        title:"Mintbase",
        h1:"Learn how Mintbase makes minting NFTs cheaper, faster, scalable and secure with PlayerLink.",
        a:"Read Case Study",
        href:"",
    },

    {
        img:"https://near.org/wp-content/uploads/2021/08/paras-icon-150x150.png",
        title:"Paras",
        h1:"Learn how Paras built a curated, high-quality NFT marketplace powered by PlayerLink.",
        a:"Read Case Study",
        href:"",
    },

]
const started=[
    {
        i:"fa fa-exchange text-blue-500",
        title:"1. Interact with PlayerLink",
        h1:"Pick the service you like and set it up with.",
        a:"Mint an Serve",
        href:"",

    },
    {
        i:"fa fa-code text-green-400",
        title:"2. Build on PlayerLink",
        h1:"Build servers in any language.",
        a:"Build an App",
        href:"",

    },

]
const developer=[
    {
        i:"fa fa-file-o text-indigo-500",
        title:"Documentation",
        h1:"Nothing but the docs.",
        a:"View the Docs",
        href:"",
    },
    {
        i:"fa fa-code text-green-400",
        title:"Developer Tools",
        h1:"CLIs, SDKs, APIs, and more.",
        a:"View the Tools",
        href:"",
    },

    {
        i:"fa fa-opera text-purple-500",
        title:"Get Certified",
        h1:"Get to grips with PlayerLink.",
        a:"Learn more",
        href:"",

    },
    {
        i:"fa fa-genderless text-yellow-600",
        title:"Grants",
        h1:"Access funding for your idea.",
        a:"Learn more",
        href:"",

    },
    {
        i:"fa fa-user-o text-purple-400",
        title:"Office Hours",
        h1:"Daily times to get your questions answered.",
        a:"Ask your questions",
        href:"",

    },
    {
        i:"fa fa-window-restore text-blue-400",
        title:"Platform Overview",
        h1:"Take a look at PlayerLink in a nutshell.",
        a:"Learn more",
        href:"https://playerlink.io/",

    },
    {
        i:"fa fa-dot-circle-o text-green-400",
        title:"Explore Bounties",
        h1:"Explore Bounties",
        a:"View Bounties",
        href:"",

    },
    {
        i:"fa fa-play-circle-o text-yellow-500",
        title:"Watch & Learn",
        h1:"Hear from founders and other experts.",
        a:"View on YouTube",
        href:"",

    },
    {
        i:"fa fa-asterisk text-purple-400",
        title:"Block Explorer",
        h1:"View activity on the blockchain.",
        a:"explorer.PlayerLink.org",
        href:"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Ftestnet.playerlink.io#/settings",

    },
    {
        i:"fa fa-credit-card text-green-200",
        title:"Create a Wallet",
        h1:"Get yourself setup on PlayerLink",
        a:"wallet.PlayerLink.org",
        href:"",

    },
    {
        i:"fa fa-check-square text-red-400",
        title:"Find an Event",
        h1:"Worldwide opportunities to attend, participate, connect and more.",
        a:"Go to Events Site",
        href:"",

    },
    {
        i:"fa fa-flickr text-indigo-500",
        title:"Join our Discord",
        h1:"Join ongoing topical conversations about all things PlayerLink.",
        a:"Go to Discord",
        href:"https://discord.gg/Hypkryxwsb",

    },

]
function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}
export default function Developers() {
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
                                    <h1 className=" max-w-sm ">
                                        <span className="block text-black text-4xl  tracking-tight sm:text-5xl pb-12">A better future requires a better foundation</span>
                                        <span className="block text-base text-indigo-200">Build apps capable of taking millions of users on journeys they’ve never been on before. Simple. Scalable. Secure.
                                    </span>
                                    </h1>
                                    <div className="flex justify-between mt-10">
                                        <a href=''  className=" px-5 py-3 rounded-full text-white text-base font-normal border border-black bg-gray-700  ">
                                            Quick Start</a></div>

                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Logo cloud */}

                    <div className="max-w-7xl mx-auto py-16  px-4 ">
                        <div className="xl:flex">
                        <div className="mt-24 xl:mt-0">
                            <div className="text-4xl text-green-400">
                            <i className="fa fa-code" aria-hidden="true"></i>
                            </div>
                            <div  className="text-5xl text-black font-medium  mt-5 ">
                                <div className="mt-5 xl:w-96 text-3xl">
                                    Why PlayerLink?
                                </div>
                                <div className="text-sm text-black font-medium pr-20 mt-5 xl:w-96">
                                    Use languages you already know to build apps that take your users where they’ve never been before. From Instagram to NFTs, and beyond.
                                </div>
                            </div>
                        </div>
                            <div className=" flex mt-5 xl:mt-0 grid md:grid-cols-2 xl:grid-cols-3">
                                {whyplayerlink.map((item=>(


                                    <div key={item.title} className="mt-5 xl:ml-10">

                                        <div className="text-3xl my-5">
                                            <i className={item.i} aria-hidden="true"></i>
                                        </div>

                                        <h1 className="font-semibold text-xl">{item.title}</h1>
                                        <h2 className="py-8 text-gray-500 text-sm">{item.h1}
                                        </h2>
                                    </div>
                                )))}

                            </div>

                        </div>
                    </div>
                    <div className="relative ">
                        <div className="absolute inset-x-0 bottom-0    " />
                        <div className=" mx-auto  ">
                            <div className="relative sm:overflow-hidden">
                                <div className="absolute inset-0">
                                    <img
                                        className="h-full w-full object-cover"
                                        src="https://cdn.discordapp.com/attachments/876498266550853642/934417945021538314/41.jpg"
                                        alt="People working on laptops"
                                    />
                                </div>
                                <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-40 mx-auto max-w-7xl">
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="max-w-7xl mx-auto py-16  px-4 ">
                        <div className="xl:flex ">
                            <div className=" flex mt-5 grid md:grid-cols-2 xl:grid-cols-4 ">
                                <div className="pr-10">
                                    <div className="mt-5 xl:w-56 mb-6 text-3xl">
                                        Who’s building on PlayerLink?
                                    </div>
                                    <div className="text-sm text-black font-medium pr-20 mt-5 xl:w-96">
                                        The world’s leading custody providers, wallets, applications, and blockchains are integrating with the PlayerLink network.
                                    </div>
                                </div>
                                {onbuildplayerlink.map((item=>(

                                    <div key={item.title} className="mt-5 ml-10 mb-10">
                                        <div className="mb-10">
                                            <img className="w-12 h-12 rounded-full" src={item.img} alt=""/>
                                        </div>
                                        <h1 className="font-semibold text-xl">{item.title}</h1>
                                        <h2 className="py-8 text-gray-500 text-sm">{item.h1}
                                        </h2>
                                        <a className="text-blue-300 font-medium hover:text-blue-600 " href={item.href}>{item.a} <i className="fa fa-chevron-right ml-5" aria-hidden="true"></i>
                                        </a>
                                    </div>
                                )))}
                            </div>
                        </div>

                    </div>
                    <div className="relative ">
                        <div className="absolute inset-x-0 bottom-0    " />
                        <div className=" mx-auto  ">
                            <div className="relative sm:overflow-hidden">
                                <div className="absolute inset-0">
                                    <img
                                        className="h-full w-full object-cover"
                                        src="https://cdn.discordapp.com/attachments/876498266550853642/934417945248022568/42.jpg"
                                        alt="People working on laptops"
                                    />
                                </div>
                                <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-40 mx-auto max-w-7xl">
                                </div>
                            </div>
                        </div>
                    </div>



                    <div className="max-w-7xl mx-auto py-16  px-4 ">
                        <div className="xl:flex ">
                            <div className=" flex mt-5 grid md:grid-cols-2 xl:grid-cols-4 ">
                                <div className="pr-10">
                                    <div className="mt-5 xl:w-56 mb-6 text-3xl">
                                        Get Started
                                    </div>
                                    <div className="text-sm text-black font-medium pr-20 mt-5 xl:w-96">
                                        Use languages you already know to build apps that take your users where they’ve never been before. From Instagram to NFTs, and beyond.
                                    </div>
                                </div>
                                {started.map((item=>(

                                    <div key={item.title} className="mt-5 ml-10  mb-10">
                                       <div className="text-4xl my-3">
                                           <i className={item.i} aria-hidden="true"></i>
                                       </div>
                                        <h1 className="font-semibold text-xl">{item.title}</h1>
                                        <h2 className="py-8 text-gray-500 text-sm">{item.h1}
                                        </h2>
                                        <div className="flex justify-between ">
                                            <a href={item.href}  className=" px-5 py-3 rounded-full text-gray-600 text-base font-normal border border-black transition duration-700 hover:bg-gray-700  hover:text-white">
                                                {item.a}
                                            </a></div>
                                    </div>
                                )))}
                                <div  className="mt-5 ml-10 mb-10">
                                    <div className="text-4xl my-3">
                                        <i className="fa fa-calendar-check-o text-yellow-400" aria-hidden="true"></i>
                                    </div>
                                    <h1 className="font-semibold text-xl">
                                        3. Manifest Your Vision</h1>
                                    <h2 className="py-8 text-gray-500 text-sm">
                                        Now that you understand the basics of PlayerLink, it’s time to start your own project!
                                    </h2>
                                    <div className="mb-2">
                                        <a className="text-blue-300 font-medium hover:text-blue-600 " href="">
                                            Browse Examples<i className="fa fa-chevron-right ml-5" aria-hidden="true"></i>
                                        </a>
                                    </div>
                                    <div>
                                        <a className="text-blue-300 font-medium hover:text-blue-600 " href="">
                                            Explore Resources<i className="fa fa-chevron-right ml-5" aria-hidden="true"></i>
                                        </a>
                                    </div>
                            </div>
                        </div>
                            </div>

                    </div>
                    <div className="relative ">
                        <div className="absolute inset-x-0 bottom-0    " />
                        <div className=" mx-auto  ">
                            <div className="relative sm:overflow-hidden">
                                <div className="absolute inset-0">
                                    <img
                                        className="h-full w-full object-cover"
                                        src="https://cdn.discordapp.com/attachments/876498266550853642/934417945445150740/43.jpg"
                                        alt="People working on laptops"
                                    />
                                </div>
                                <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-40 mx-auto max-w-7xl">
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="max-w-7xl mx-auto py-16  px-4 ">
                        <div className=" xl:mt-10">
                            <div  className="text-5xl text-black font-medium pr-20 mt-5">
                                <div className="mt-5  text-3xl">
                                    Developer Resources
                                </div>
                            </div>
                            <div className=" flex mt-16 grid md:grid-cols-2 xl:grid-cols-4">
                                {developer.map((item=>(

                                    <div key={item.title} className="mt-5 mr-5 xl:mr-10">
                                        <div className="text-3xl my-5 ">
                                            <i className={item.i} aria-hidden="true"></i>
                                        </div>
                                        <h1 className="font-semibold text-xl">{item.title}</h1>
                                        <h2 className="py-8 text-gray-500 text-sm">{item.h1}
                                        </h2>
                                        <a className="text-blue-300 font-medium hover:text-blue-600 " href={item.href}>{item.a} <i className="fa fa-chevron-right ml-5" aria-hidden="true"></i>
                                        </a>
                                    </div>
                                )))}

                            </div>

                        </div>
                    </div>
                    <div className="relative ">
                        <div className="absolute inset-x-0 bottom-0    " />
                        <div className=" mx-auto  ">
                            <div className="relative sm:overflow-hidden">
                                <div className="absolute inset-0">
                                    <img
                                        className="h-full w-full object-cover"
                                        src="https://cdn.discordapp.com/attachments/876498266550853642/934417945667440700/44.jpg"
                                        alt="People working on laptops"
                                    />
                                </div>
                                <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-40 mx-auto max-w-7xl">
                                </div>
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
