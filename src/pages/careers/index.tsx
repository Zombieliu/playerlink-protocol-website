import { Fragment } from 'react'
import Header from "../../components/header";
import Tail from "../../components/tail";

const winning=[
    {
        h1:"",
        h2:"",
    },
    {
        h1:"",
        h2:"",
    },
    {
        h1:"",
        h2:"",
    },
    {
        h1:"",
        h2:"",
    },

]
const vetted=[
    {
      img:'https://near.org/wp-content/uploads/2021/08/vetted-google.png',
    },
    {
        img:'https://near.org/wp-content/uploads/2021/08/vetted-memsql.png',
    },
    {
        img:'https://near.org/wp-content/uploads/2021/08/vetted-logi.png',
    },
    {
        img:'https://near.org/wp-content/uploads/2021/08/vetted-microsoft.png',
    },
    {
        img:'https://near.org/wp-content/uploads/2021/08/vetted-fb.png',
    },
    {
        img:'https://near.org/wp-content/uploads/2021/08/vetted-niantic.png',
    },
    {
        img:'https://near.org/wp-content/uploads/2021/08/vetted-invision.png',
    },
    {
        img:'https://near.org/wp-content/uploads/2021/08/vetted-pokemon.png',
    },



]
const connected=[
    {
        img:'https://near.org/wp-content/uploads/2021/10/a16z.png',
    },
    {
        img:'https://near.org/wp-content/uploads/2021/10/fabric.png',
    },
    {
        img:'https://near.org/wp-content/uploads/2021/10/dragonfly.png',
    },
    {
        img:'https://near.org/wp-content/uploads/2021/08/connected-pantera.png',
    },
    {
        img:'https://near.org/wp-content/uploads/2021/08/connected-metastable.png',
    },
    {
        img:'https://near.org/wp-content/uploads/2021/08/connected-coinbaseventures.png',
    },
    {
        img:'https://near.org/wp-content/uploads/2021/08/connected-baidu.png',
    },
    {
        img:'https://near.org/wp-content/uploads/2021/08/connected-electric-capital.png',
    },
    {
        img:'https://near.org/wp-content/uploads/2021/08/connected-amplify.png',
    },



]
const ecosystem=[
    {
        title:"Fast-learner",
        h1:"We’re building technology that has never been seen before. We learn each day and build on this new knowledge as we go.",
        i:"fa fa-graduation-cap text-yellow-400",

    },
    {
        title:"Intelligence",
        h1:"Creating the infrastructure of the new web requires figuring out novel solutions to an endless array of challenging problems.",
        i:"fa fa-info-circle text-red-600",

    },

    {
        title:"Positive Energy",
        h1:"The best ideas come when teams support and encourage each other. We look for positive thinkers to problem solve not put up blockers.",
        i:"fa fa-users text-indigo-400",
    },
    {
        title:"Communication",
        h1:"Teams and organizations live and die by their ability to keep everyone moving the same direction.",
        i:"fa fa-arrows-h text-blue-400",
    },

]
const Benefits=[
    {

        h1:"Flexible vacation and parental leave wherever possible.",
        i:"fa fa-check-square text-green-400",

    },
    {

        h1:"Education and conference budgets for continuous learning.",
        i:"fa fa-graduation-cap text-purple-400",

    },

    {

        h1:"Highly competitive compensation and upside.",
        i:"fa fa-user-o text-indigo-400",
    },
    {

        h1:"Full coverage of health benefits wherever possible.",
        i:"fa fa-gratipay text-red-400",
    },
    {

        h1:"Top technical hardware and peripherals for epic productivity.",
        i:"fa fa-crosshairs text-blue-400",
    },

]
const collective=[
    {

        h1:"Engineering",
        i:"fa fa-list-alt text-green-200",

        href:"",
        a:"Full Stack Engineer",
        d:"Remote",

        href1:"",
        a1:"Graphic Designer ",
        d1:"Remote",

    },
    {

        h1:"Ecosystem",
        i:"fa fa-assistive-listening-systems text-purple-400",

        href:"",
        a:"Business Development",
        d:"Remote",

        href1:"",
        a1:"Developer Relations",
        d1:"Remote",

        href2:"",
        a2:"Ecosystem Analytics Lead",
        d2:"Ecosystem Analytics Lead",

        href3:"",
        a3:"Head of Developer Relations",
        d3:"Remote",

        href4:"",
        a4:"",
        d4:"",

    },

    {

        h1:"Product",
        i:"fa fa-inbox text-green-500",

        href:"",
        a:"Head of Product",
        d:"Remote",




    },
    {

        h1:"Operations",
        i:"fa fa-sliders text-blue-400",

        href:"",
        a:"Community Operations Manager ",
        d:"Remote ",

    },

]
function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}
export default function Careers() {
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
                                        <span className="block text-black text-4xl  tracking-tight sm:text-5xl pb-12">Rebuild the web</span>
                                        <span className="block text-base text-indigo-200 w-96"> PlayerLink`s mission is to enable everyone to use and build services without trust. join us
                                    </span>
                                    </h1>
                                    <div className="flex justify-between mt-10">
                                        <a href=''  className=" px-5 py-3 rounded-full text-gray-600 border bg-white text-base font-normal transition duration-700   hover:text-blue-400">
                                            View Current Openings</a></div>

                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Logo cloud */}
                    <div className="max-w-7xl mx-auto py-16  px-4 ">
                        <div className="">
                            <div  className="text-5xl text-black font-medium pr-20 mt-5">
                                <div className="mt-5  text-3xl">
                                    Who is building  PlayerLink?
                                </div>
                                <div className="text-base xl:w-1/2 my-5 text-gray-500 font-medium">
                                    PlayerLink Protocol is built by a global, world-class, cross-organizational group of contributors called the PlayerLink Collective. A foundation is being created for future user builders  and companies of the future while solving some of the hardest problems that exist in decentralized and distributed systems.
                                </div>
                            </div>


                        </div>
                        {/*1*/}
                        <div className="xl:flex mb-14 ">
                            <div  className="text-5xl text-black font-medium pr-20 mt-5">

                                <div className="mt-5 xl:w-56 text-3xl">
                                    Award-
                                    winning
                                </div>
                                <div className="text-base w-80 my-5 text-gray-500 font-medium">
                                    Work alongside championship level competitive coders.
                                </div>
                            </div>

                            <div className="mx-auto md:mx-0 text-center flex mt-10 grid md:grid-cols-2 ">
                                {winning.map((item=>(

                                    <div key={item.h1} className="mb-10  mr-5 xl:mr-10">
                                        <h1 className=" text-lg">{item.h1}</h1>
                                        <h2 className=" text-lg">{item.h2}</h2>

                                    </div>
                                )))}
                            </div>



                        </div>
                        {/*2*/}
                        <div className="xl:flex  mb-14">
                            <div  className="text-5xl text-black font-medium pr-20 mt-5">

                                <div className="mt-5 xl:w-32 text-3xl">
                                    Well-
                                    vetted
                                </div>
                                <div className="text-base w-80 my-5 text-gray-500 font-medium">
                                    Work with people who have built world-changing companies.
                                </div>
                            </div>

                            <div className=" flex mt-10 grid md:grid-cols-3 ">
                                {vetted.map((item=>(

                                    <div key={item.img} className="mx-10 mb-10">
                                        <img src={item.img} alt=""/>
                                    </div>
                                )))}
                            </div>
                        </div>
                        {/*3*/}
                        <div className="xl:flex mb-14 ">
                            <div  className="text-5xl text-black font-medium pr-20 mt-5">

                                <div className="mt-5 xl:w-32 text-3xl">
                                    Crypto-
                                    connected
                                </div>
                                <div className="text-base w-80 my-5 text-gray-500 font-medium">
                                    Join a network made up of the world’s top crypto funds.
                                </div>
                            </div>

                            <div className=" flex mt-10 grid md:grid-cols-3 ">
                                {connected.map((item=>(

                                    <div key={item.img} className="mx-10 mb-10">
                                        <img src={item.img} alt=""/>
                                    </div>
                                )))}
                            </div>
                        </div>
                    {/*    4*/}
                        <div className=" my-32">
                            <div  className="text-5xl text-black font-medium  my-20">
                                <div className="mt-5  text-3xl">
                                    Ecosystem Values
                                </div>
                                <div className="text-base xl:w-1/2 my-5 text-gray-500 font-medium">
                                    The PlayerLink Collective has unashamedly high standards. We’re looking for people at the top of their game who share our values of building a future that is open, inclusive and fair.
                                </div>
                            </div>
                            <div className=" flex mt-5 grid md:grid-cols-2 xl:grid-cols-4">
                                {ecosystem.map((item=>(

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
                    {/*    5*/}
                        <div className=" my-32">
                            <div  className="text-5xl text-black font-medium  my-20">
                                <div className="mt-5  text-3xl">
                                    Benefits
                                </div>
                                <div className="text-base xl:w-1/2 my-5 text-gray-500 font-medium">
                                    PlayerLink is at the forefront of world-changing technology, new and disruptive markets, and radical new ways of organising people and ideas. You’ll have everything you need to focus and thrive:

                                </div>
                            </div>
                            <div className=" flex mt-5 grid md:grid-cols-2 xl:grid-cols-3">
                                {Benefits.map((item=>(

                                    <div key={item.h1} className="mt-5 mr-5 xl:mr-10">

                                        <div className=" text-3xl">
                                            <i className={item.i} aria-hidden="true"></i>
                                        </div>
                                        <h1 className="py-8 text-gray-500 text-sm font-medium">{item.h1}
                                        </h1>
                                    </div>
                                )))}

                            </div>

                        </div>
                    {/*    6*/}
                        <div className=" my-32">
                            <div  className="text-5xl text-black font-medium  my-20">
                                <div className="mt-5 xl:w-96 text-3xl">
                                    Openings across the PlayerLink Collective
                                </div>
                                <div className="text-base xl:w-1/2 my-5 text-gray-500 font-medium">
                                    If you’re excited by launching a new ecosystem while being pushed to operate at the top of your game by world class colleagues operating at the top of theirs, join one of the teams below! Tip: The best way to get noticed is to participate actively in the community and show what you can do first.
                                </div>
                            </div>
                            <div className=" flex mt-5 grid md:grid-cols-2 xl:grid-cols-4">
                                {collective.map((item=>(

                                    <div key={item.h1} className="mt-5 mr-5 ">

                                        <div className=" text-3xl">
                                            <i className={item.i} aria-hidden="true"></i>
                                        </div>
                                        <h1 className="py-8 text-gray-500 text-lg font-semibold font-medium">{item.h1}
                                        </h1>
                                        <a className="text-blue-300 text-base   transition duration-300 transform font-medium hover:text-blue-600 " href={item.href}>
                                            {item.a}
                                            <div className="text-gray-400 pb-3">
                                                {item.d}
                                            </div>
                                        </a>
                                        <a className="text-blue-300 text-base  transition duration-300 transform font-medium hover:text-blue-600 " href={item.href1}>
                                            {item.a1}
                                            <div className="text-gray-400 pb-3">
                                                {item.d1}
                                            </div>
                                        </a>
                                        <a className="text-blue-300 text-base  transition duration-300 transform font-medium hover:text-blue-600 " href={item.href2}>
                                            {item.a2}
                                            <div className="text-gray-400 pb-3">
                                                {item.d2}
                                            </div>
                                        </a>
                                        <a className="text-blue-300 text-base  transition duration-300 transform font-medium hover:text-blue-600 " href={item.href3}>
                                            {item.a3}
                                            <div className="text-gray-400 pb-3">
                                                {item.d3}
                                            </div>
                                        </a>
                                        <a className="text-blue-300 text-base  transition duration-300 transform font-medium hover:text-blue-600 " href={item.href4}>
                                            {item.a4}
                                            <div className="text-gray-400 pb-3">
                                                {item.d4}
                                            </div>
                                        </a>
                                    </div>
                                )))}

                            </div>

                        </div>
                        {/*7*/}
                        <div className=" my-32">
                            <div  className="text-5xl text-black font-medium  my-20">
                                <div className="mt-5 xl:max-w-4xl text-3xl">

                                    Don’t see a role that fits but still want to join? <br/>
                                    The PlayerLink collective is always looking for smart people.
                                </div>
                                <div className="flex justify-between mt-10">
                                    <a href='mailto: hello@playerlink.org'  className=" px-5 py-3 rounded-full text-gray-600 text-base font-normal border border-black transition duration-500 hover:bg-gray-700  hover:text-white">
                                        Tell us why you belong here
                                    </a></div>

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
