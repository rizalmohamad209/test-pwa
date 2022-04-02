import React from 'react'
import { Link } from 'react-router-dom'

const Prestasi = () => {
  return (
    <>
     <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div
                class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Prestasi
                </h1>
                <p class="leading-relaxed text-lg">PPDB melalui jalur prestasi sebagaimana dimaksud merupakan jalur yang diperuntukkan bagi peserta didik yang memiliki prestasi yang ditentukan berdasarkan: </p>
                <p className='leading-relaxed text-lg ml-5'>1. Rapor pada 5 (lima) semester terakhir mata pelajaran Matematika, Bahasa Indonesia, Bahasa Inggris, Ilmu Pengetahuan Alam (IPA), dan Ilmu Pengetahuan Sosial (IPS) peserta didik dari sekolah asal; dan/atau </p>
                <p class="leading-relaxed text-lg ml-5 mb-3">2. DPrestasi terbagi dua, yaitu Prestasi Akademik dan Prestasi Non-Akademik. Dengan bukti atas prestasi diterbitkan paling singkat 6 (enam) bulan dan paling lama 3 (tiga) tahun sebelum tanggal pendaftaran PPDB.  </p>
                
               


                <div class="flex justify-center">
                    <Link to="/landing">
                    <button
                        class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Kembali</button>
                        </Link>
                </div>
            </div>
            <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                <img class="object-cover object-center rounded" alt="hero"
                    src="https://res.cloudinary.com/desug/image/upload/v1648674298/PPDB/zonasi_vlqyuf.jpg" />
            </div>
        </div>
    </section>
    </>
  )
}

export default Prestasi