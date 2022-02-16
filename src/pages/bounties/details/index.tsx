import Header from "../../../components/header";
import Tail from "../../../components/tail";
import Link from 'next/link'

const details= [

    {

        status:"Underway",
        time:"151 days left",
        endtime:"2022/01/23-2022/02/01 22:19 UTC+8",
        title:"DAOrayaki | WHAT IS THE ENVIRONMENTAL IMPACT ROCKETS HAVE ON OUR AIR? ",
        h1:"170 ",
        h2:"170.17",
        img:"data:image/png;base64,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",
        types:[

            {type:"DAOrayaki"},
            {type:"Translate"},
        ],
        require:[
            {
                h1:"Type: Translation",
                h2:"Deadline: 1/23/2022-1/27/2022",
                h3:"Committee Decision: 1/28/2022-1/31/2022",
                h4:"Description: English to Chinese; 1.23-1.27 is the translation time for creators, that is, creators need to submit before 1.27;",
                h5:"1.28-1.31 is the committee review and voting time.",
                h6:"Link: ",
                a1:" https://everydayastronaut.com/rocket-pollution/",
                href:"",
                h7:"Bounty: 170u",
            }

        ],
        pull:[
            {
                href:"",
                title:"Update DAOrayaki Bounty : Interstellar Immigrant 2022-1-23",
                name:"David",
                time:"2022/01/26",
            },
            {
                href:"",
                title:"Update DAOrayaki Bounty : Interstellar Immigrant 2022-1-23",
                name:"David",
                time:"2022/01/26",
            },
            {
                href:"",
                title:"Update DAOrayaki Bounty : Interstellar Immigrant 2022-1-23",
                name:"David",
                time:"2022/01/26",
            }

        ],
    },

]

const StatusStyles={
    Done:"bg-green-100 text-black",
    Underway:"bg-yellow-100 text-yellow-500",
    Expired:"bg-gray-100 text-gray-400",
}
const Statusicon={
    Done:"fa fa-check-circle",
    Underway:"fa fa-clock-o",
    Expired:"fa fa-calendar-times-o",

}
const Statustime={
    Done:"text-gray-500",
    Underway:"font-bold text-yellow-500",
    Expired:"text-gray-300",

}
const StatusBotton={
    Done:"border-black  border  hover:bg-black hover:text-white ",
    Underway:"bg-yellow-100 hover:-translate-y-2",
    Expired:"border-black  border  hover:bg-black hover:text-white ",

}



function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}
export default function Details() {
   const back =()=>{
       window.history.go(-1)
    }

    return(
        <div className="min-h-screen bg-white">
            <header>
                <Header></Header>
            </header>
            <main>
                <div>
                    {/* Hero card */}
                    <div className="relative pt-20">
                    </div>
                    {/* Logo cloud */}

                    <div className="max-w-7xl   mx-auto py-8 mb-14  px-4 ">
                        <div>
                           <button onClick={back} className="flex">
                               <i className="fa fa-angle-double-left" aria-hidden="true"></i>
                               <div className="underline pl-0.5  font-bold text-xs">
                                   Back
                               </div>
                           </button>

                        </div>
                        {details.map(detail=>(
                        <div key={detail.h1} className="xl:flex">

                            <div className="flex">
                            <div>

                                    <div>
                                        <div className="flex justify-between ">
                                            <div className={ classNames(StatusStyles[detail.status],"text-base my-5 p-1 rounded-lg flex p-2")}>

                                                <div className="mr-2 text-2xl "><i className={classNames(Statusicon[detail.status],)}  aria-hidden="true"></i> </div>

                                                <div className="mt-1">
                                                    {detail.status}
                                                </div>
                                                </div>
                                                <div className="mt-6">
                                                    <img className="w-12 transform  " src={detail.img} alt=""/>
                                                </div>
                                        </div>
                                        <div className="max-w-7xl xl:max-w-sm">
                                            <h1 className="font-semibold text-xl ">{detail.title}</h1>
                                        </div>

                                        <div className="flex justify-between">

                                            <div>
                                            <div  className={ classNames(Statustime[detail.status],"text-base mt-5 mb-1  rounded-lg flex ")}>
                                                {detail.time}
                                            </div>
                                            <div className="text-xs">
                                                {detail.endtime}
                                            </div></div>

                                            <div>
                                                <Link href="">
                                                    <a>
                                                        <div className={ classNames(StatusBotton[detail.status],"p-3 ml-5 mt-5 rounded-lg transition transform  duration-700 ")}>
                                                            Participate
                                                        </div>

                                                    </a>
                                                </Link>
                                            </div>

                                        </div>


                                            <div className="flex justify-between">
                                                <div>
                                                    <h2 className="my-5 text-blue-400 text-3xl">{detail.h1} PL
                                                    </h2>
                                                    <h3 className="mb-8 text-gray-500 text-sm">≈${detail.h2} USDT
                                                    </h3>
                                                </div>
                                                <a href="" className="text-xs text-gray-300 ml-16 mt-20">
                                                    Tx record: 0xdc77...d007<i className="fa fa-share" aria-hidden="true"></i>
                                                </a>

                                            </div>

                                        <div className="text-xs text-gray-700 mb-5">
                                            See Issue Details
                                        </div>
                                        <div>
                                            <div className="flex ">
                                                {detail.types.map(item=>(
                                                <div  key={item.type} className="flex">
                                                    <div className="bg-indigo-300 flex justify-center  rounded-lg py-1.5 p-1 text-xs  mb-2 mr-2">
                                                        {item.type}
                                                    </div>
                                                </div> ))}

                                            </div>
                                        </div>

                                        <a href="" className="flex justify-between mt-10 p-3 rounded-lg border-gray-200 border">
                                            <div className="flex">
                                            <div className="rounded-full border border-gray-200">
                                                <img className="w-12" src="https://hackerlink-hk.oss-cn-hongkong.aliyuncs.com/avatar/dce791f15e96e4323dd29415fc166b72.png" alt=""/>
                                            </div>
                                            <div className="text-gray-400 ml-5">
                                                <div className="text-black font-bold">
                                                    will Holden
                                                </div>
                                                <div className="text-sm">
                                                    @U_8f8419a5c47f2b
                                                </div>

                                            </div>
                                            </div>
                                            <div className="text-gray-300 -mt-1 text-sm">
                                                Publisher
                                            </div>
                                        </a>
                                    </div>
                            </div>
                            <div>
                            </div>
                        </div>
                            <div className="">
                            <div className="xl:border-l xl:ml-10 xl:pl-10 mt-20 xl:mt-0 pb-24">
                                <div className="text-gray-400 text-xs font-semibold">
                                    ISSUE DETAILS
                                </div>
                                <div className="font-semibold text-xl my-5">
                                    {detail.title}
                                </div>
                                <div className="">
                                    {detail.require.map(item=>(
                                        <div key={item.h1} className="text-sm mt-8 ">
                                            <div>{item.h1}</div>
                                            <div>{item.h2}</div>
                                            <div>{item.h3}</div>
                                            <div>{item.h4}</div>
                                            <div>{item.h5}</div>
                                            <div className="flex">{item.h6} <div>
                                                <a className="text-blue-300 ml-2" href={item.href}>{item.a1}</a>
                                            </div></div>

                                            <div>
                                                {item.h7}
                                            </div>

                                        </div>
                                    ))}
                                </div>


                            </div>
                                <div className={detail.pull.length?"":"hidden"}>
                                <div className="xl:border-l xl:ml-10  py-5  border-t ">
                                    <div className="my-3 text-xs text-gray-400 pl-8 pb-3 font-semibold">PULL REQUESTS
                                    </div>

                                    {detail.pull.map(requests=>(

                                        <div key={requests.title}>
                                            <div className="flex border-t">
                                            <div className="py-2 pl-3 pr-2 text-2xl">
                                                <i className="fa fa-code-fork" aria-hidden="true"></i>
                                            </div>
                                                <div>

                                            <a href={requests.href} className=" font-semibold pt-3 pb-1 flex">
                                            {requests.title}
                                        </a>
                                         <div className="flex text-sm text-gray-400">
                                            <div className="mr-1">
                                               by </div>
                                            <div className="text-yellow-500">
                                                {requests.name}
                                            </div>
                                             <div className="pl-0.5 pr-1">
                                                 ,
                                             </div>
                                             <div>
                                                 opened on
                                             </div>
                                             <div className="pl-1">
                                                 {requests.time}
                                             </div>
                                                    </div>
                                                </div>
                                            </div>


                                        </div>

                                    ))}
                                </div>
                                </div>
                                <div className={detail.pull.length?"hidden":""}>
                                    <div className="text-center xl:border-l xl:ml-10  py-5  border-t">
                                        <div className="text-xs text-gray-400  py-3 font-semibold">NO PULL REQUESTS</div>
                                        <div className="text-4xl pb-5">
                                            <i className="fa fa-code-fork" aria-hidden="true"></i>
                                        </div>
                                        <div className="text-2xl text-yellow-500 font-semibold pb-2">
                                            Welcome to create a pull request!
                                        </div>
                                        <div>
                                            Contribute to the project and win the reward via pull requests.
                                        </div>

                                    </div>
                                </div>
                        </div>


                        </div>))}
                    </div>





                </div>


                <Tail></Tail>

                {/* More main page content here... */}
            </main>
        </div>
    )
}
