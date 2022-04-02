import React from 'react'
import { Select } from '../components/forms/selects'
import { FiSearch } from 'react-icons/fi'
import SekolahData from '../json/sekolah.json'

const Sekolah = () => {



    const fields = [
        {
            name: 'No',
            key: 'no'
        },
        {
            name: 'Nama Sekolah',
            key: 'namaSekolah'
        },
        {
            name: 'Alamat Sekolah',
            key: 'alamatSekolah'
        },

    ]


    const items = [
        { value: "Semua Data", label: 'Semua Data' },
        { value: "SMA", label: 'SMA' },
        { value: "SMK", label: "SMK" },
        { value: "SMP", label: "SMP" }
    ]
    return (
        <section class="text-gray-600 body-font mb-8">
            <div class="container px-10 py-25 mx-auto">
                <div class="flex flex-col justify-center">

                    <h1 className='text-blue-600 text-lg font-bold mb-5 mt-5'> Data Sekolah</h1>

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


                    <table className="table bg-white shadow-md px-5 py-2">
                        <thead>
                            <tr>
                                {fields.map((field, i) => (
                                    <th className='font-bold text-black text-2xl' key={i}>{field.name}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {SekolahData.map((country, i) => (
                                <tr key={i}>

                                    <td >{country.id}</td>
                                    <td >{country.name}</td>
                                    <td >{country.alamat}</td>

                                </tr>
                            ))}
                        </tbody>
                    </table>


                </div>
            </div>
        </section>
    )
}

export default Sekolah