import React from 'react'
import { Select } from '../components/forms/selects'
import { FiSearch } from 'react-icons/fi'

const Perangkingan = () => {
    const items = [
        { value: " null", label: '--Pilih SMP--' },
        { value: "smpn 1 pangkah", label: 'SMPN 1 Pangkah' },
        { value: "smpn 2 slawi", label: "SMPN 2 Slawi" },
        { value: "smpn 1 balapulang", label: "SMPN 1 Balapulang" }
    ]
    return (
        <section class="text-gray-600 body-font mb-8">
            <div class="container px-10 py-25 mx-auto">
                <div class="flex flex-col justify-center">

                    <h1 className='text-blue-600 text-2xl font-bold mb-5 mt-5'> Pengumuman Hasil PPDB Tahun 2022</h1>
                    <h1 className='text-gray-700 text-lg font-medium '>Perangkingan Calon Peserta Didik Yang Mendaftar Pada <span className='font-bold'>Sekolah Menengah Pertama </span> Se-Kabupaten Tegal Tahun Ajaran 2022/2023 </h1>


                    <div className='flex gap-10 justify-center items-center'>
                        <div className='w-1/2'>

                            <Select items={items} label='Satuan Pendidikan' inline={false} name='satuanPendidikan' />

                        </div>
                        <div className='w-1/2'>

                            <form className="  navbar-search ">
                                <div className="relative">
                                    <div className='font-semibold  text-gray-700 -mt-4'>Nama Sekolah</div>
                                    <input
                                        type="search"
                                        name="search"
                                        placeholder="Search..."
                                        className="pl-10 pr-5 appearance-none mt-2 border-gray-400 border h-10 w-full rounded-full text-sm focus:outline-none"
                                    />
                                    <button type="submit" className="absolute top-0 mt-11 left-0 ml-4">
                                        <FiSearch className="stroke-current h-4 w-4" />
                                    </button>
                                </div>
                            </form>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Perangkingan