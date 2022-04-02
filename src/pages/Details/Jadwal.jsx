import React from 'react'

const Jadwal = () => {
    return (
        <div>
            <section className="text-gray-600 body-font">

                <div className="container px-5 py-24 mx-auto flex flex-wrap">
                    <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                        <h1 className="sm:text-3xl text-2xl font-medium ml-20 title-font mb-2 text-gray-900">Jadwal PPDB</h1>
                        <div className="h-1 w-20 ml-20 bg-indigo-500 rounded"></div>
                    </div>
                    <div className="flex flex-wrap w-full ml-20 items-center justify-center ">
                        <div className="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6">
                            <div className="flex relative pb-12">
                                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                                    <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                                </div>
                                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                                    </svg>
                                </div>
                                <div className="flex-grow pl-4">
                                    <h2 className="title-font sm:text-4xl text-lg mb-4 font-medium text-gray-900 ">Pendaftaran dan Seleksi</h2>
                                    <p className="text-xl leading-relaxed">1 January 2022 - 1 February 2022</p>
                                </div>
                            </div>
                            <div className="flex relative pb-12">
                                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                                    <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                                </div>
                                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                                    </svg>
                                </div>
                                <div className="flex-grow pl-4">
                                    <h2 className="title-font sm:text-4xl text-lg mb-4 font-medium text-gray-900 ">Pengumuman Hasil</h2>
                                    <p className=" text-xl leading-relaxed">15 February 2022 </p>
                                </div>
                            </div>


                            <div className="flex relative">
                                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                        <path d="M22 4L12 14.01l-3-3"></path>
                                    </svg>
                                </div>
                                <div className="flex-grow pl-4">
                                    <h2 className="title-font sm:text-4xl text-lg mb-4 font-medium text-gray-900 ">Pendaftaran Ulang</h2>
                                    <p className="text-xl leading-relaxed">20 February 2022</p>
                                </div>
                            </div>
                        </div>
                        <img alt="ecommerce" className="  h-1/2 object-cover object-center rounded" src="https://res.cloudinary.com/desug/image/upload/v1648752780/PPDB/landingPage/IllustratorPengumuman_aqd06x.png" />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Jadwal