import React from 'react'
import {Link} from 'react-router-dom'

const Pindah_ortu = () => {
  return (
   <>
    <section class="text-gray-600 body-font">
  <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <img class="object-cover object-center rounded" alt="hero" src="https://res.cloudinary.com/desug/image/upload/v1648676107/PPDB/afirmasi_hbycmu.jpg"/>
    </div>
    <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Perpindahan Tugas Orang Tua
       
      </h1>
      <p class="leading-relaxed text-lg">1. Perpindahan tugas orang tua/wali sebagaimana dimaksud dibuktikan dengan surat penugasan dari</p>
      <p class="leading-relaxed text-lg ml-5">a. Instansi; </p>
      <p class="leading-relaxed text-lg ml-5">b.Lembaga;</p>
      <p class="leading-relaxed text-lg ml-5">c.kantor; atau</p>
      <p class="leading-relaxed text-lg ml-5">d.perusahaan yang mempekerjakan.</p>
      <p class="leading-relaxed text-lg ml-4">  Dalam hal terdapat sisa kuota jalur perpindahan tugas orang tua/wali, maka sisa kuota dapat dialokasikan untuk calon peserta didik pada sekolah tempat orang tua/wali mengajar. Penentuan peserta didik dalam jalur perpindahan tugas orang tua/wali diprioritaskan pada jarak tempat tinggal calon peserta didik yang terdekat dengan sekolah. </p>
      
      <p class="mb-8 leading-relaxed"></p>
      <div class="flex justify-center">
          <Link to="/landing">
          <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Kembali</button>
          </Link>
       
      </div>
    </div>
  </div>
</section>
   </>
  )
}

export default Pindah_ortu