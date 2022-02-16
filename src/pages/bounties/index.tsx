
import { Fragment } from 'react'
import Header from "../../components/header";
import Tail from "../../components/tail";

const bounties= [

        {

            href:"/bounties/details",
            status:"Done",
            title:"DAOrayaki | WHAT IS THE ENVIRONMENTAL IMPACT ROCKETS HAVE ON OUR AIR? ",
            h1:"170 ",
            h2:"170.17",
            img:"data:image/png;base64,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",
            types:[

                {type:"DAOrayaki"},

            ]
        },
        {

            href:"",
            status:"Underway",
            time:"151 days left",
            title:"DAOrayaki | Ion Propulsion: Farther, Faster, Cheaper",
            h1:"170",
            h2:"170.17",
            img:"data:image/png;base64,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",
            types:[

                {type:"hackathonDAO"},
                {type:"DAOrayaki"},

            ],

        },
        {

            href:"",
            status:"Expired",
            title:"DAOrayaki | WHAT IS THE ENVIRONMENTAL IMPACT ROCKETS HAVE ON OUR AIR? ",
            h1:"170",
            h2:"170.17",
            img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrxd8negoZbq4SWW4sl6saYIajdDaXV_2Qsg&usqp=CAU",
            types:[

                {type:"hackathonDAO"},
                {type:"DAOrayaki"},

            ],


        },
        {

            href:"",
            status:"Expired",
            title:"DAOrayaki | Ion Propulsion: Farther, Faster, Cheaper",
            h1:"170 ",
            h2:"170.17",
            img:"data:image/png;base64,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",
            types:[

                {type:"Translate"},

            ],

        },
    ]

const StatusStyles={
    Done:"bg-green-100 text-black",
    Underway:"bg-yellow-100 text-yellow-800",
    Expired:"bg-gray-100 text-gray-400",
}
const Statusicon={
    Done:"fa fa-check-circle",
    Underway:"fa fa-clock-o",
    Expired:"fa fa-calendar-times-o",

}



function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}
export default function Bounties() {

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
                                    <h1 className=" max-w-xl ">
                                        <span className="block text-black text-4xl  tracking-tight sm:text-5xl pb-12">Empower your projects with the power of open source community!</span>
                                        <span className="block text-base text-indigo-200">Collaborate with hackers, build something great, bootstrap your projects and grow the open source community network!
                                    </span>
                                    </h1>
                                    <div className="flex justify-between mt-10 max-w-sm">
                                        <a href=''  className=" px-5 py-3 rounded-lg text-white text-base font-normal border border-black bg-gray-700  ">
                                            Create a Bounty</a>
                                        <a href=''  className=" px-5 py-3 rounded-lg text-gray-600 text-base font-normal border border-black transition duration-700 hover:bg-gray-700  hover:text-white ">
                                            View the Guide</a>
                                    </div>



                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Logo cloud */}

                    <div className="lg:px-48 mx-auto py-16  px-4 ">
                        <div className="">
                            <div className="mt-24 xl:mt-0">
                                <div  className="text-5xl text-black font-medium  mt-5 ">
                                    <div className="mt-5 xl:w-96 text-3xl">
                                        Explore 69 bounties
                                    </div>
                                </div>
                            </div>
                            <div className=" flex mt-5 xl:mt-0 grid md:grid-cols-2 3xl:grid-cols-3 ">
                                {bounties.map((item=>(


                                    <a href={item.href} key={item.title} className="mt-5 md:mr-5 border-gray-300 border rounded-lg p-2">


                                       <div className="flex">
                                           <div className={ classNames(StatusStyles[item.status],"text-base my-5 p-1 rounded-lg flex p-2")}>

                                           <div className="mr-2 text-2xl "><i className={classNames(Statusicon[item.status],)}  aria-hidden="true"></i> </div>

                                            <div className="mt-1">
                                                {item.status}
                                            </div>

                                        </div>
                                           <div className="text-yellow-800 text-base my-5  rounded-lg flex p-3">
                                               {item.time}
                                           </div>
                                       </div>

                                        <div className="h-24  overflow-hidden ">
                                        <h1 className="font-semibold text-xl ">{item.title}</h1></div>

                                        <h2 className="my-5 text-blue-400 text-3xl">{item.h1} PL
                                        </h2>
                                        <h3 className="mb-8 text-gray-500 text-sm">≈${item.h2} USDT
                                        </h3>
                                        <div className="flex justify-between">
                                            <div className="flex">
                                                {item.types.map(typ=>(


                                                <div key={typ.type} className="bg-indigo-300 flex justify-center p-1 rounded-lg py-1.5  text-xs  mb-2 mr-2">
                                                   {typ.type}
                                                </div>))}

                                            </div>
                                            <div>
                                                <div>
                                                    <img className="w-9 transform  " src={item.img} alt=""/>
                                                </div>
                                            </div>



                                        </div>
                                    </a>
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
