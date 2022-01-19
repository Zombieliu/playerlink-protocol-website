
import { Fragment } from 'react'
import Header from "../../components/header";
import Tail from "../../components/tail";

const guild=[
    {
        img:"https://raw.githubusercontent.com/near/ecosystem/main/img/4nts.png",
        title:"4NTS Guild",
        h1:"A community building and marketing focussed guild.",

        hrefhome:"",
        ihome:"fa fa-google",

        hreftwitter:"",
        itwitter:"fa fa-twitter",

        hrefmedium:"",
        imedium:"fa fa-medium",

        hrefdiscrod:"",
        idiscrod:"",



    },
    {
        img:"https://raw.githubusercontent.com/near/ecosystem/main/img/arroz-criativo.png",
        title:"Arroz Criativo",
        h1:"Arroz Estúdios is a non-profit cultural association based in Lisbon, Portugal.",

        hrefhome:"",
        ihome:"fa fa-google",

        hreftwitter:"",
        itwitter:"",

        hrefmedium:"",
        imedium:"",


        hrefdiscrod:"",
        idiscrod:"fa fa-reddit-alien -ml-6",



    },

    {
        img:"https://raw.githubusercontent.com/near/ecosystem/main/img/c1guild.png",
        title:"Blockchain Club Uganda",
        h1:"Introduce Near protocol to Uganda through community engagement to enhance growth and expansion of the protocol within the country.",

        hrefhome:"",
        ihome:"fa fa-google",


        hreftwitter:"",
        itwitter:"",

        hrefmedium:"",
        imedium:"fa fa-medium -ml-3",

        hrefdiscrod:"",
        idiscrod:"",

    },
    {
        img:"https://raw.githubusercontent.com/near/ecosystem/main/img/codame.png",
        title:"c1 Guild",
        h1:"C1 was founded with the goal to help creatives who may not have the means, produce, mint and sell NFTs.",

        hrefhome:"",
        ihome:"fa fa-google",


        hreftwitter:"",
        itwitter:"fa fa-twitter",

        hrefmedium:" ",
        imedium:"fa fa-medium",

        hrefdiscrod:"",
        idiscrod:"fa fa-reddit-alien",

    },
    {
        img:"https://raw.githubusercontent.com/near/ecosystem/main/img/corpsemen.png",
        title:"Clean NFT Guild",
        h1:"Our mission is educate and raise awareness about energy efficient blockchains and NFT platforms that are committed to lessen the impact on our environment",

        hrefhome:"",
        ihome:"fa fa-google",

        hrefdiscrod:"",
        idiscrod:"",

        hreftwitter:"",
        itwitter:"",

        hrefmedium:"",
        imedium:"",

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
                                        <span className="block text-black text-4xl  tracking-tight sm:text-5xl pb-12">Find a Guild</span>
                                        <span className="block text-base text-indigo-200 xl:w-1/2">Guilds are communities that make up the greater PlayerLink community. Each guild shares a specific vision and mission related to driving a more open, interconnected and consumer-empowered word.
                                    </span>
                                    </h1>

                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Logo cloud */}
                    <div className="max-w-7xl mx-auto py-16  px-4 ">
                        <div className="mt-5 flex justify-center">
                            <div className="flex justify-center z-10 text-gray-300 text-3xl mt-3 -mr-11">
                            <i className="fa fa-search" aria-hidden="true"></i></div>
                            <input type="text"
                                   className="bg-gray-50 text-lg rounded-full p-3 pl-14  w-9/12 lg:w-8/12  border hover:border-indigo-500 outline-none"
                                   placeholder="Search by title …"
                                   />
                        </div>
                        <div className="xl:flex ">
                            <div  className="text-5xl text-black font-medium pr-20 mt-5">
                            </div>
                            <div className=" flex mt-5 grid md:grid-cols-2 xl:grid-cols-4  ">
                                {guild.map((item=>(

                                    <div key={item.title} className="mt-5 mx-5  ">
                                        <img className="w-16 h-16 rounded-full" src={item.img} alt=""/>
                                        <h1 className="font-semibold text-xl mt-5">{item.title}</h1>
                                        <h2 className="py-8 text-gray-500 text-sm">
                                            {item.h1}
                                        </h2>
                                        <div className="flex">
                                            <a className="text-gray-500 hover:text-gray-800 text-2xl transition duration-500 mr-3" href={item.hrefhome}>
                                                <i className={item.ihome} aria-hidden="true"></i></a>

                                            <a className="text-gray-500 hover:text-gray-800 text-2xl transition duration-500 mr-3" href={item.hreftwitter}>
                                                <i className={item.itwitter} aria-hidden="true"></i></a>

                                            <a className="text-gray-500 hover:text-gray-800 text-2xl transition duration-500 mr-3" href={item.hrefmedium}>
                                                <i className={item.imedium} aria-hidden="true"></i></a>

                                            <a className="text-gray-500 hover:text-gray-800 text-2xl transition duration-500 mr-3" href={item.hrefdiscrod}>
                                                <i className={item.idiscrod} aria-hidden="true"></i></a>

                                        </div>

                                    </div>
                                )))}

                            </div>

                        </div>

                        <div className="md:flex justify-center my-32 ">
                            <div className="w-80 mr-32">
                                <h1 className=" text-3xl mb-5">Have a vision?
                                    <h2 className="text-3xl mb-5 flex"> Start a
                                        <div className="ml-1 text-purple-400 mb-3"> Guild. </div></h2>

                                    </h1>
                                <h2 className="mb-5 text-base text-gray-500">
                                    Learn about the process of creating your own community.</h2>
                                <h3><a className="text-blue-300 font-medium hover:text-blue-600 " href="">
                                    Learn more
                                    <i className="fa fa-chevron-right ml-5" aria-hidden="true"></i>
                                </a></h3>
                            </div>
                            <div className="flex justify-center mt-20 md:mt-0">
                                <img className="w-48 h-48" src="https://near.org/wp-content/uploads/2021/08/find-a-guild-3d.png" alt=""/>
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
