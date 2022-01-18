
import { Fragment } from 'react'
import Header from "../../components/header";
import Tail from "../../components/tail";

const whyplayerlink=[
    {
        i:"fa fa-share-alt text-blue-400",
        title:"Simple",
        h1:"NEAR enables a world of NFTs, DAOs, and other new business models, easily.",

    },
    {
        i:"fa fa-arrows-alt text-indigo-400",
        title:"Scalable",
        h1:"NEAR grows with you, delivering extremely fast experiences with extremely low costs.",

    },

    {
        i:"fa fa-leaf text-green-300",
        title:"Green",
        h1:"The world’s first certified climate-neutral blockchain.",

    },
    {
        i:"fa fa-balance-scale text-purple-700",
        title:"Open to All",
        h1:"NEAR bridges to Ethereum and other ecosystems for easy interoperability.",

    },

]
const founders=[
    {
        title:"James from Collab.land",
        h1:"James is a veteran in web3. His resume includes the 1st production deployment on Layer 2, launching Moloch/MetaCartel DAOs, and his current project, Abridged, which powers Collab.land.",
        a:"Visit NFT.hiphop",
        href:"",

    },
    {
        title:"Ed from NFT.hiphop",
        h1:"Co-founder of the Source Magazine, Ed has been a trailblazer since the beginning. With NFT.hiphop he’s bringing new opportunity for artists and fans to connect.",
        a:"Lean more",
        href:"",

    },
    {
        title:"Nate & Carolin from Mintbase",
        h1:"When a super-coder with corporate (Nike) and startup experience met an international businesswoman, Mintbase, a next-gen NFT Utility Engine, was formed.",
        a:"Lean more",
        href:"",

    },
    {
        title:"Peter & Jasper from Flux",
        h1:"They met at ETH Berlin 2018 where they built the first app for derivatives on Startups. After realizing the limitations of Ethereum, they moved to NEAR, and built Flux, a cross-chain oracle aggregator..",
        a:"Lean more",
        href:"",
    },

]
const onbuildplayerlink=[
    {
        img:"https://near.org/wp-content/uploads/2021/09/flux-300x300.jpg",
        title:"Flux",
        h1:"Learn how flux built a fast, inexpensive, and decentralized open market protocol on NEAR.",
        a:"Read Case Study",
        href:"",
    },
    {
        img:"https://near.org/wp-content/uploads/2021/09/mintbase-300x300.jpg",
        title:"Mintbase",
        h1:"Learn how Mintbase makes minting NFTs cheaper, faster, scalable and secure with NEAR.",
        a:"Read Case Study",
        href:"",
    },

    {
        img:"https://near.org/wp-content/uploads/2021/08/paras-icon-150x150.png",
        title:"Paras",
        h1:"Learn how Paras built a curated, high-quality NFT marketplace powered by NEAR.",
        a:"Read Case Study",
        href:"",
    },

]
const nextstep=[
    {
        i:"fa fa-user-plus text-indigo-500",
        title:"Work with Us",
        h1:"Let us help you get your idea built.",
        a:"Tell us about your project",
        href:"",
    },
    {
        i:"fa fa-database text-yellow-400",
        title:"Foundation Grants",
        h1:"Foundation Grants",
        a:"Get Funding",
        href:"",
    },

    {
        i:"fa fa-opera text-purple-500",
        title:"Open Web Collective",
        h1:"Find funding, friends, and mentorship.",
        a:"Join the Accelerator ",
        href:"",

    },
    {
        i:"fa fa-check-square-o text-pink-400",
        title:"Find an Event",
        h1:"Worldwide opportunities to attend, participate, connect and more.",
        a:"Go to Events Site",
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
                                        <span className="block text-black text-4xl  tracking-tight sm:text-5xl pb-12">Superpowers for <div className="mt-3">founders & creators</div></span>
                                        <span className="block text-base text-indigo-200">Access the tools, financing and support you need to reach your next<br/> million users or your first hundred fans.
                                    </span>
                                    </h1>

                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Logo cloud */}

                    <div className="max-w-7xl mx-auto py-16  px-4 ">
                        <div className="mt-24">
                            <div  className="text-5xl text-black font-medium pr-20 mt-5">
                                <div className="mt-5  text-3xl">
                                    Why PlayerLink?
                                </div>
                            </div>
                            <div className=" flex mt-5 grid md:grid-cols-2 xl:grid-cols-4">
                                {whyplayerlink.map((item=>(


                                    <div key={item.title} className="mt-5 mr-5 xl:mr-10">

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
                                        src="https://cdn.discordapp.com/attachments/897398778166906911/930821324136390716/12312312asd.jpg"
                                        alt="People working on laptops"
                                    />
                                </div>
                                <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 mx-auto max-w-7xl">
                                </div>
                            </div>
                        </div>
                    </div>


                        <div className="max-w-7xl mx-auto pt-16  px-4 ">
                      <div className=" mt-36">
                            <div  className="text-5xl text-black font-medium pr-20 mt-5">
                                <div className="mt-5 xl:w-96 text-3xl">
                                    Join like-minded founders and creators on NEAR
                                </div>
                            </div>
                          <div className="text-sm text-black font-medium pr-20 mt-5 xl:w-96">
                              These trailblazers are using NEAR to bring web3 ideas to consumers at web2 scale.
                          </div>
                          <div className="max-w-7xl  py-16 px-4 flex mt-5 grid md:grid-cols-2 xl:grid-cols-4 ">
                              {founders.map((item=>(
                                  <div key={item.title} className=" mt-10 mr-10  ">
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
                                        src="https://cdn.discordapp.com/attachments/897398778166906911/930821324136390716/12312312asd.jpg"
                                        alt="People working on laptops"
                                    />
                                </div>
                                <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 mx-auto max-w-7xl">
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
                                    Leading creators and communities are building the future on NEAR, here are just a few.
                                </div>
                                </div>
                                {onbuildplayerlink.map((item=>(

                                    <div key={item.title} className="mt-5 mr-5 xl:mx-10 mb-10">
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
                                        src="https://cdn.discordapp.com/attachments/897398778166906911/930821324136390716/12312312asd.jpg"
                                        alt="People working on laptops"
                                    />
                                </div>
                                <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 mx-auto max-w-7xl">
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="max-w-7xl mx-auto py-16  px-4 ">
                        <div className=" xl:mt-10">
                            <div  className="text-5xl text-black font-medium pr-20 mt-5">
                                <div className="mt-5  text-3xl">
                                    Take the next step
                                </div>
                            </div>
                            <div className=" flex mt-16 grid md:grid-cols-2 xl:grid-cols-4">
                                {nextstep.map((item=>(

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
                                        src="https://cdn.discordapp.com/attachments/897398778166906911/930821324136390716/12312312asd.jpg"
                                        alt="People working on laptops"
                                    />
                                </div>
                                <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 mx-auto max-w-7xl">
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
