import Header from "../../components/header";
import Tail from "../../components/tail";

const getinvolved=[
    {
        title:"Find your Tribe",
        h1:"Make friends and connections pursuing a mission you’re passionate about.",
        i:"fa fa-futbol-o text-indigo-500",

    },
    {
        title:"Make an Impact",
        h1:"Help give power (money, data, and governance) back to the people.",
        i:"fa fa-bullseye text-pink-400",

    },

    {
        title:"Give Back",
        h1:"When you contribute to building a better future, good things happen.",
        i:"fa fa-users text-indigo-400",
    },
    {
        title:"Make a Living",
        h1:"Work when you want, how you want, and get paid based on your contribution.",
        i:"fa fa-briefcase",
    },

]
const Guilds=[
    {
        title:"Createbase",
        h1:"Community for Creators/Projects launching on Mintbase. Get support/funding and connect with other creatives!",
        img:"https://near.org/wp-content/uploads/2021/10/createbase-150x150.jpg",

    },
    {
        title:"Cypherpunk Guild",
        h1:"A guild focussed on incentivizing builders to create privacy-enhancing technologies on NEAR.",
        img:"https://near.org/wp-content/uploads/2021/10/cpg-150x150.png",

    },
    {
        title:"4NTS Guild",
        h1:"A community building and marketing-focused guild.",
        img:"https://near.org/wp-content/uploads/2021/10/4nts-150x150.jpg",

    },


]
const Started=[
    {
        i:"fa fa-archive text-yellow-300",
        title:"Open Web Sandbox",
        h1:"A safe place to ask questions, experiment, and get acquainted.",
        a:"Learn more",
        href:"",
    },
    {
        i:"fa fa-graduation-cap text-indigo-600",
        title:"Education",
        h1:"Learn the basics, explore the ecosystem, or dive deep into the tech.",
        a:"Learn more",
        href:"https://github.com/playerlinkio/playerlink-user-back-end-java-example",
    },

    {
        i:"fa fa-comments-o text-blue-500",
        title:"Join our Discord",
        h1:"Join ongoing topical conversations about all things NEAR.",
        a:"Go to Discord",
        href:"",
    },
    {
        i:"fa fa-check-square-o text-pink-500",
        title:"Community Events",
        h1:"Worldwide opportunities to attend, participate, connect and more.",
        a:"Go to Events Site",
        href:"",
    },


]
const community=[
    {
        i:"fa fa-university text-blue-400",
        title:"Community Wiki",
        h1:"A playbook for the NEAR Community.",
        a:"Go to the Wiki",
        href:"",
    },
    {
        i:"fa fa-graduation-cap text-indigo-600",
        title:"NEAR Brand Toolkit",
        h1:"Tools to build the brand together.",
        a:"Learn more",
        href:"https://github.com/playerlinkio/playerlink-user-back-end-java-example",
    },

    {
        i:"fa fa-sun-o text-yellow-300",
        title:"The NEAR Forum",
        h1:"Follow progress within the Ecosystem.",
        a:"forum.near.org",
        href:"",
    },
    {
        i:"fa fa-futbol-o text-indigo-500",
        title:"Explore DAOs",
        h1:"Supercharge your community.",
        a:"Learn about DAOs",
        href:"",
    },
]

export default function Community() {
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
                                <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-32">
                                    <div className=" xl:w-4/12">
                                        <span className="block text-black text-4xl  tracking-tight sm:text-5xl pb-12">Community</span>
                                        <span className="block text-sm text-gray-500">The PlayerLink Community is made up of Innovators, Creators, Contributors, and, of course, a few wild cards. We’re all here to build a stronger ecosystem.
                                    </span>
                                    </div>
                                    <div className="flex justify-between mt-10">
                                        <a href=''  className=" px-5 py-3 rounded-full text-gray-600 text-base font-normal border border-black transition duration-700 hover:bg-gray-700  hover:text-white">
                                        Connect to a Human on Discord</a></div>
                                    <div className="flex justify-between mt-20 xl:mr-32 grid grid-cols-2 xl:grid-cols-4">
                                        <div className="mb-24 xl:mb-0">
                                            <div className="text-5xl mb-10">1M+ </div>

                                            <div className="text-xl text-blue-500"> Accounts Created</div></div>
                                        <div  className="mb-24 xl:mb-0">
                                            <div className="text-5xl mb-10">100+</div>
                                            <div  className="text-xl text-indigo-600 ">Guilds & DAOs</div>
                                        </div>

                                        <div  className="mb-24 xl:mb-0">
                                            <div className="text-5xl mb-10">83k+</div>
                                            <div  className="text-xl text-purple-500">Members</div>
                                        </div>

                                        <div  className="mb-24 xl:mb-0">
                                            <div className="text-5xl mb-10">$5M+</div>
                                            <div  className="text-xl text-green-500">Community Fund</div>
                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="max-w-7xl mx-auto py-16  px-4 ">
                        <div className=" mb-14">
                            <div  className="text-5xl text-black font-medium  my-20">
                                <div className="mt-5  text-3xl">
                                    Why get involved?
                                </div>
                            </div>
                            <div className=" flex mt-5 grid md:grid-cols-2 xl:grid-cols-4">
                                {getinvolved.map((item=>(

                                    <div key={item.title} className="mt-5 mr-5 xl:mr-10">

                                        <div className="mb-10 text-3xl">
                                        <i className={item.i} aria-hidden="true"></i>
                                        </div>

                                        <h1 className=" text-xl font-semibold">{item.title}</h1>
                                        <h2 className="py-8 text-gray-500 text-sm font-medium">{item.h1}
                                        </h2>
                                    </div>
                                )))}

                            </div>

                        </div>

                        <div className="pt-36">
                            <div  className="text-5xl text-black font-medium pr-20 mt-5">
                                <div className="mt-5 xl:w-56 text-3xl">
                                    Guilds
                                </div>
                                <div className="text-base xl:w-1/2 my-5 text-gray-500 font-medium">
                                    Guilds are communities that make up the greater NEAR community. Each guild shares a specific vision and mission related to driving a more open, interconnected, and consumer-empowered world.
                                </div>
                                <div className="text-xl py-5">
                                    Featured Guilds
                                </div>
                            </div>
                            <div className=" flex mt-5 grid md:grid-cols-2 xl:grid-cols-4">
                                {Guilds.map((item=>(

                                    <div key={item.title} className="mt-5 mr-5 xl:mr-10">
                                        <div className="rounded-full my-5">
                                        <img className="rounded-full w-16 h-16"
                                             src={item.img} alt=""/>
                                        </div>
                                        <h1 className="font-semibold text-xl">{item.title}</h1>
                                        <h2 className="py-8 text-gray-500 text-sm">{item.h1}
                                        </h2>

                                    </div>
                                )))}
                                <div className="mt-5 mr-5 xl:mr-10">
                                    <div className="text-4xl text-indigo-500 my-5">
                                        <i className="fa fa-futbol-o" aria-hidden="true"></i>
                                    </div>
                                    <div className="text-xl pt-5">
                                        <h1 className="flex">Find your <div className="ml-1 text-indigo-600	">purpose</div>.</h1>
                                        <h2 className="flex">Find your <div className="ml-1 text-indigo-600	">people</div>.</h2>
                                    </div>
                                    <div className="mt-5">
                                    <a className="text-blue-300  transition duration-300 transform font-medium hover:text-blue-600 " href="">
                                        View All Guilds
                                        <i className="fa fa-chevron-right ml-5" aria-hidden="true"></i>
                                    </a>
                                    </div>


                                </div>

                            </div>

                        </div>


                        <div className="pt-36">
                            <div  className="text-5xl text-black font-medium pr-20 mt-5">
                                <div className="mt-5 xl:w-56 mb-6 text-3xl">
                                    Get Started
                                </div>
                                <div className="text-base xl:w-1/2 my-5 text-gray-500 font-medium">
                                    The NEAR Community provides a number of ways for you to start learning, earning and growing.
                                </div>

                            </div>
                            <div className=" flex mt-5 grid md:grid-cols-2 xl:grid-cols-4 ">
                                {Started.map((item=>(
                                    <div key={item.title} className="mt-5 mr-5 xl:mr-10 mb-10">
                                        <div className="text-3xl my-5 ">
                                        <i className={item.i} aria-hidden="true"></i>
                                        </div>
                                        <h1 className="font-semibold text-xl mt-10">{item.title}</h1>
                                        <h2 className="py-8 text-gray-500 text-sm">{item.h1}
                                        </h2>
                                        <a className="text-base text-blue-300 font-medium hover:text-blue-600  transition duration-300 transform font-medium" href={item.href}>
                                            {item.a} <i className="fa fa-chevron-right ml-5" aria-hidden="true"></i>
                                        </a>
                                    </div>
                                )))}

                            </div>

                        </div>

                        <div className="py-36">
                            <div  className="text-5xl text-black font-medium pr-20 mt-5">
                                <div className="mt-5  mb-6 text-3xl">
                                    More for Community
                                </div>
                            </div>
                            <div className=" flex mt-5 grid md:grid-cols-2 xl:grid-cols-4 ">
                                {community.map((item=>(
                                    <div key={item.title} className="mt-5 mr-5 xl:mr-10 mb-10">
                                        <div className="text-3xl my-5 ">
                                            <i className={item.i} aria-hidden="true"></i>
                                        </div>
                                        <h1 className="font-semibold text-xl mt-10">{item.title}</h1>
                                        <h2 className="py-8 text-gray-500 text-sm">{item.h1}
                                        </h2>
                                        <a className="text-base text-blue-300 font-medium hover:text-blue-600  transition duration-300 transform font-medium" href={item.href}>
                                            {item.a} <i className="fa fa-chevron-right ml-5" aria-hidden="true"></i>
                                        </a>
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
