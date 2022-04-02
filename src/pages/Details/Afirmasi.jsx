import React from 'react'
import { Link } from 'react-router-dom'

const Afirmasi = () => {
  return (
    <>
       <section class="text-gray-600 body-font">
  <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <img class="object-cover object-center rounded" alt="hero" src="https://res.cloudinary.com/desug/image/upload/v1648676107/PPDB/afirmasi_hbycmu.jpg"/>
    </div>
    <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Afirmasi
       
      </h1>
      <p class="leading-relaxed text-lg">1. Jalur Afirmasi adalah jalur yang diperuntukkan bagi calon peserta didik baru:  </p>
      <p class="leading-relaxed text-lg ml-5">a. Berasal dari keluarga ekonomi tidak mampu; dan </p>
      <p class="leading-relaxed text-lg ml-5">b. Penyandang disabilitas.</p>
      <p class="leading-relaxed text-lg ml-4">  Peserta didik yang melalui jalur afirmasi merupakan peserta yang berdomisili di dalam dan di luar wilayah zonasi sekolah yang bersangkutan. </p>
      <p class="leading-relaxed text-lg">2. Peserta didik baru yang berasal dari keluarga ekonomi tidak mampu sebagaimana dimaksud menyertakan: </p>
      <p class="leading-relaxed text-lg ml-5">a. Bukti keikutsertaan peserta didik dalam program penanganan keluarga tidak mampu dari Pemerintah Pusat atau Pemerintah Daerah; dan </p>
      <p class="leading-relaxed text-lg ml-5">b. Surat pernyataan dari orang tua/wali peserta didik yang menyatakan bersedia diproses secara hukum jika terbukti memalsukan bukti keikutsertaan dalam program penanganan keluarga tidak mampu. </p>
      <p class="leading-relaxed text-lg ml-4">Dalam hal calon peserta didik yang mendaftar melalui jalur afirmasi melampaui jumlah kuota jalur afirmasi yang ditetapkan oleh Pemerintah Daerah setempat, maka penentuan peserta didik dilakukan dengan memprioritaskan jarak tempat tinggal calon peserta didik yang terdekat dengan sekolah. </p>
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

export default Afirmasi