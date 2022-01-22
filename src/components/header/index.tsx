import {Popover, Transition} from "@headlessui/react";
import {
    AnnotationIcon,
    ChatAlt2Icon,
    InboxIcon,
    MenuIcon,
    QuestionMarkCircleIcon,
    XIcon
} from "@heroicons/react/outline";
import {ChevronDownIcon} from "@heroicons/react/solid";
import {Fragment} from "react";
import Link from 'next/link'

const solutions = [
    {
        name: 'The Platform',
        description: 'Get a better understanding of where your traffic is coming from.',
        href: '/platform',
        icon: InboxIcon,
    },

    {
        name: 'Careers',
        description: 'Speak directly to your customers in a more meaningful way.',
        href: '/careers',
        icon: AnnotationIcon,
    },

    {
        name: 'Guilds',
        description: "Your customers' data will be safe and secure.",
        href: '/guilds',
        icon: ChatAlt2Icon
    },

    {
        name: 'Grant',
        description: "Connect with third-party tools that you're already using.",
        href: 'https://community-grant-website.vercel.app/',
        icon: QuestionMarkCircleIcon,
    },
    {
        name: 'Contributor ',
        description: "Connect with third-party tools that you're already using.",
        href: '/contributor ',
        icon: QuestionMarkCircleIcon,
    },

]
const navigation = [
    { name: 'Developers', href: '/developers' },
    {name:  'Builders',   href:"/builders"},
    { name: 'Community',  href: '/community' },
    { name: 'Airdrop',    href: '/airdrop' },
    { name: 'Blog',       href: 'https://playerlink.gitbook.io/welcome-to-gitbook/ZMImdXpg8mvWIc1Z1H3L' },
]
function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}
export default function Header(){
    return(
        <header>
            <Popover className="relative bg-white ">
                <div className="flex  fixed z-20 inset-x-0 bg-white mb-10  justify-between  items-center p-3 md:p-3 sm:px-6 lg:justify-start md:space-x-10 2xl:pl-32 ">
                    <div className="flex justify-start lg:w-0 lg:flex-1">
                        <Link  href="/">
                        <a>
                            <span className="sr-only">Workflow</span>
                            <img
                                className="h-8 w-auto sm:h-10"
                                src="/pllogo.svg"
                                alt=""
                            />
                        </a></Link>

                    </div>
                    <div className="-mr-2  -my-2 lg:hidden">
                        <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                            <span className="sr-only">Open menu</span>
                            <MenuIcon className="h-6 w-6" aria-hidden="true" />
                        </Popover.Button>
                    </div>
                    <Popover.Group as="nav" className="hidden lg:flex  space-x-10 ">
                        <Popover className="relative xl:-ml-32">
                            {({ open }) => (
                                <>
                                    <Popover.Button
                                        className={classNames(
                                            open ? 'text-gray-900' : 'text-gray-500',
                                            'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                                        )}
                                    >
                                        <span>Learn</span>
                                        <ChevronDownIcon
                                            className={classNames(
                                                open ? 'text-gray-600' : 'text-gray-400',
                                                'ml-2 h-5 w-5 group-hover:text-gray-500'
                                            )}
                                            aria-hidden="true"
                                        />
                                    </Popover.Button>

                                    <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-200"
                                        enterFrom="opacity-0 translate-y-1"
                                        enterTo="opacity-100 translate-y-0"
                                        leave="transition ease-in duration-150"
                                        leaveFrom="opacity-100 translate-y-0"
                                        leaveTo="opacity-0 translate-y-1"
                                    >
                                        <Popover.Panel className="absolute z-10 -ml-4 mt-3 transform w-screen max-w-md lg:max-w-2xl lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                                            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                                                <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8 lg:grid-cols-2">
                                                    {solutions.map((item) => (
                                                        <Link  key={item.name}
                                                               href={item.href}>
                                                        <a

                                                            className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                                                        >
                                                            <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-indigo-600 text-white sm:h-12 sm:w-12">
                                                                <item.icon className="h-6 w-6" aria-hidden="true" />
                                                            </div>
                                                            <div className="ml-4">
                                                                <p className="text-base font-medium text-gray-900">{item.name}</p>
                                                                <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                                                            </div>
                                                        </a></Link>
                                                    ))}

                                                </div>
                                            </div>
                                        </Popover.Panel>
                                    </Transition>
                                </>
                            )}
                        </Popover>
                        {navigation.map((item) => (
                            <a key={item.name} href={item.href} className="text-base font-medium text-gray-500 hover:text-gray-900">
                                {item.name}
                            </a>
                        ))}


                    </Popover.Group>
                    <div className="hidden lg:flex  justify-end md:flex-1 ">

                        <select
                            id="location"
                            name="location"
                            className="mt-1 block   font-medium  text-base text-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                            defaultValue="Canada"
                        >
                            <option>English</option>
                            <option>China</option>
                            <option>Tiếng Việt</option>
                        </select>

                    </div>


                </div>

             <div className="fixed z-20 inset-x-0">
                <Transition
                    as={Fragment}
                    enter="duration-200 ease-out"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="duration-100 ease-in"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    <Popover.Panel
                        focus
                        className="absolute my-auto  fixed z-20 inset-x-0  min-h-screen  inset-y-auto   p-2 transition transform origin-top-right lg:hidden"
                    >
                        <div className="rounded-lg  shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                            <div className="pt-5 pb-6 px-5">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <img
                                            className="h-8 w-auto"
                                            src="https://cdn.discordapp.com/attachments/897398778166906911/918367515242029106/viewfile.png"
                                            alt="Workflow"
                                        />
                                    </div>
                                    <div className="-mr-2">
                                        <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                            <span className="sr-only">Close menu</span>
                                            <XIcon className="h-6 w-6" aria-hidden="true" />
                                        </Popover.Button>
                                    </div>
                                </div>
                                <div className="mt-6">
                                    <nav className="grid grid-cols-1 gap-7">
                                        {solutions.map((item) => (
                                            <a
                                                key={item.name}
                                                href={item.href}
                                                className="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50"
                                            >
                                                <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-indigo-600 text-white">
                                                    <item.icon className="h-6 w-6" aria-hidden="true" />
                                                </div>
                                                <div className="ml-4 text-base font-medium text-gray-900">{item.name}</div>
                                            </a>
                                        ))}
                                    </nav>
                                </div>
                            </div>
                            <div className="py-6 px-5">
                                <div className="grid grid-cols-2 gap-4">
                                    {navigation.map((item) => (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            className="text-base font-medium text-gray-900 hover:text-gray-700"
                                        >
                                            {item.name}
                                        </a>
                                    ))}
                                </div>

                            </div>
                        </div>
                    </Popover.Panel>

                </Transition>
</div>
            </Popover>
        </header>
    )
}