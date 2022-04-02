import React, { useState } from 'react'
import { Transition, Menu } from '@headlessui/react'
import { FiChevronDown } from 'react-icons/fi'
import Dropdown from '../dropdowns/dropdown-1'
import { Link } from 'react-router-dom'


const Navbar1 = () => {

    const DropwDownInformasi = () => {
        const items = [
            {
                title: 'Daya Tampung',
                url: "/daya-tampung"

            },
            {
                title: 'Jalur',
                url: "/landing/jalur/pendaftaran"

            },
            {
                title: 'Sekolah',
                url: '/sekolah'

            },
            {
                title: 'Jadwal',
                url: '/landing/jadwal'

            },

        ]

        return (
            <>

                <div className="flex flex-col w-40 bg-white rounded-md px-2 py-2 shadow-lg">
                    {items.map((item, i) => (
                        <div
                            key={i}
                            className="    ">
                            <Link to={item.url}>
                                <h1 className="cursor-pointer font-serif text-black text-base">{item.title}</h1>
                            </Link>
                        </div>
                    ))}
                </div>
            </>
        )
    }

    const DropDOwnPerangkingan = () => {
        const items = [
            {
                title: 'SMA',
                url: '/perangkingan'

            },
            {
                title: 'SMK',
                url: '/perangkingan'

            },
            {
                title: 'SMP',
                url: '/perangkingan'

            },

        ]

        return (
            <>

                <div className="flex flex-col w-40 bg-white rounded-md px-2 py-2 shadow-lg">
                    {items.map((item, i) => (
                        <div
                            key={i}
                            className="    ">
                            <Link to="/perangkingan">
                                <h1 className="cursor-pointer font-serif text-black text-base">{item.title}</h1>
                            </Link>
                        </div>
                    ))}
                </div>
            </>
        )
    }
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div>
            <nav className="bg-white shadow-md">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-20">
                        <div className="flex items-center">
                            <div className="flex items-center justify-center">
                                <img
                                    className="h-8 w-8 mr-2"
                                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                                    alt="Workflow"
                                />
                                <div className='flex flex-col'>
                                    <h1 className='text-base block '>PPDB Online</h1>
                                    <h1 className='text-sm block'>Kabupaten Tegal</h1>
                                </div>

                            </div>
                            <div className="hidden md:block">
                                <div className="ml-10 flex items-baseline space-x-4">
                                    <Link to="/">
                                        <h1

                                            className=" hover:bg-gray-200 text-blue-600 font-serif  px-3 py-2 rounded-md text-sm font-bold uppercase"
                                        >
                                            Beranda
                                        </h1>
                                    </Link>

                                    <Dropdown
                                        title={`INFORMASI`}
                                        placement={`bottom-start`}
                                        dropdownToggleClass="btn btn-default btn-outlined btn-outlined-indigo">
                                        <DropwDownInformasi />

                                    </Dropdown>

                                    <Dropdown
                                        title={`PERANGKINGAN`}
                                        placement={`bottom-start`}
                                        dropdownToggleClass="btn btn-default btn-outlined btn-outlined-indigo">
                                        <DropDOwnPerangkingan />

                                    </Dropdown>

                                </div>
                            </div>
                        </div>
                        <div className='ml-auto flex flex-wrap '>
                            <Link to="/hasil-seleksi">
                                <h1 className="text-white bg-blue-600 mr-2    px-4 py-2 rounded-lg text-sm font-bold uppercase"  >
                                    Masuk
                                </h1>
                            </Link>

                            <Link to="/dashboard">

                                <h1 className="text-white bg-blue-600     px-4 py-2 rounded-lg text-sm font-bold uppercase"
                                >
                                    Daftar
                                </h1>
                            </Link>
                        </div>
                        <div className="-mr-2 flex md:hidden">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                type="button"
                                className="bg-gray-300 inline-flex items-center justify-center p-2 rounded-md text-gray-4  hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                                aria-controls="mobile-menu"
                                aria-expanded="false"
                            >
                                <span className="sr-only">Open main menu</span>
                                {!isOpen ? (
                                    <svg
                                        className="block h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        className="block h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                <Transition
                    show={isOpen}
                    enter="transition ease-out duration-100 transform"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="transition ease-in duration-75 transform"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    {(ref) => (
                        <div className="md:hidden" id="mobile-menu">
                            <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                                <Link to="/">
                                    <h1

                                        className=" hover:bg-gray-200 text-blue-600 font-serif  px-3 py-2 rounded-md text-sm font-bold uppercase"
                                    >
                                        Beranda
                                    </h1>
                                </Link>

                                <Dropdown
                                    title={`INFORMASI`}
                                    placement={`bottom-start`}
                                    dropdownToggleClass="btn btn-default btn-outlined btn-outlined-indigo">
                                    <DropwDownInformasi />

                                </Dropdown>

                                <Dropdown
                                    title={`PERANGKINGAN`}
                                    placement={`bottom-start`}
                                    dropdownToggleClass="btn btn-default btn-outlined btn-outlined-indigo">
                                    <DropDOwnPerangkingan />

                                </Dropdown>

                                <div className='ml-auto flex flex-wrap'>
                                    <Link to="/hasil-seleksi">
                                        <h1 className="text-white bg-blue-600 mr-2    px-4 py-2 rounded-lg text-sm font-bold uppercase"  >
                                            Masuk
                                        </h1>
                                    </Link>

                                    <Link to="/dashboard">

                                        <h1 className="text-white bg-blue-600     px-4 py-2 rounded-lg text-sm font-bold uppercase"
                                        >
                                            Daftar
                                        </h1>
                                    </Link>
                                </div>

                            </div>
                        </div>
                    )}
                </Transition>
            </nav>


        </div>
    )
}

export default Navbar1