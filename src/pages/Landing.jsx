import React from "react";
import { Link } from "react-router-dom"

const Landing = () => {
  return (
    <>

      <section className="text-gray-600 body-font mb-8">
        <div className="flex flex-col justify-center">
          <img className="hidden sm:block h-96 w-full  "
            src="https://res.cloudinary.com/desug/image/upload/v1648749547/PPDB/landingPage/svgexport-1_czcjsa.png" alt="sofa" />
          <img className="sm:hidden w-full"
            src="https://res.cloudinary.com/desug/image/upload/v1648749547/PPDB/landingPage/svgexport-1_czcjsa.png" alt="sofa" />

          <div className="absolute sm:bottom-8 bottom-4 pr-10 sm:pr-0 left-4 sm:left-8 flex justify-start items-start">
          </div>

          <div className="container px-10 py-25 mx-auto">





            <h1 className="sm:text-3xl text-3xl font-semibold title-font text-blue-700 text-opacity-100 text-center mb-10 mt-10 font-serif">Jalur Pendaftaran
            </h1>
            <div className="flex flex-wrap w-full mb-10">

            </div>
            <div className="flex flex-wrap -m-4 content-center">
              <div className="xl:w-1/4 md:w-1/2 p-4">
                <Link to="/landing/zonasi">
                  <div className="bg-transparent p-6 rounded-lg">
                    <img className="h-4/5 rounded w-full object-cover object-center mb-6" src="https://res.cloudinary.com/desug/image/upload/v1648750861/PPDB/landingPage/zonsi_oe1mf1.png" alt="content" />
                    <h2 className="text-lg text-blue-500 text-opacity-100 text-center font-extrabold title-font font-serif mb-4">Zonasi</h2>
                  </div>
                </Link>
              </div>
              <div className="xl:w-1/4 md:w-1/2 p-4">
                <Link to="/landing/prestasi">
                  <div className="bg-transparent p-6 rounded-lg">
                    <img className="h-4/5 rounded w-full object-cover object-center mb-6" src="https://res.cloudinary.com/desug/image/upload/v1648751039/PPDB/landingPage/prestasi_kweuxp.png" alt="content" />
                    <h2 className="text-lg text-blue-500 text-opacity-100 text-center font-extrabold title-font font-serif mb-4">Prestasi</h2>
                  </div>
                </Link>
              </div>
              <div className="xl:w-1/4 md:w-1/2 p-4 mt-16">
                <Link to="/landing/afirmasi">
                  <div className="bg-transparent p-6 rounded-lg">
                    <img className="h-4/5 rounded w-full object-cover object-center mb-6" src="https://res.cloudinary.com/desug/image/upload/v1648751128/PPDB/landingPage/afirmasi_uzduux.png" alt="content" />
                    <h2 className="text-lg text-blue-500 text-opacity-100 text-center font-extrabold title-font font-serif mb-4">Afirmasi</h2>
                  </div>
                </Link>
              </div>
              <div className="xl:w-1/4 md:w-1/2 p-4">
                <Link to="/landing/pindah/ortu">
                  <div className="bg-transparent p-6 rounded-lg">
                    <img className="h-4/5 rounded w-full object-cover object-center mb-6" src="https://res.cloudinary.com/desug/image/upload/v1648751254/PPDB/landingPage/pindahan_ca6rfq.png" alt="content" />
                    <h2 className="text-lg text-blue-500 text-opacity-100 text-center font-extrabold title-font font-serif mb-4">Perpindahan Tugas Orang Tua</h2>
                  </div>
                </Link>
              </div>
            </div>
            <h1 className="sm:text-3xl text-2xl font-semibold title-font mb-16 text-blue-700 text-opacity-100 text-center font-serif mt-10">Tata Cara</h1>

            <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 ">
              <div className="p-4 md:w-1/4 sm:mb-0 mb-6">
                <div className="rounded-lg h-56 bg-center overflow-hidden">
                  <img alt="content" className="object-cover mx-auto object-center h-40 w-auto"
                    src="https://res.cloudinary.com/desug/image/upload/v1648751529/PPDB/landingPage/svgexport-1_1_bulcru.png" />
                </div>
                <h2 className="text-xl font-bold font-serif title-font text-blue-700 text-opacity-100 mt-5 text-center">
                  Pendaftaran
                </h2>
                <p className="text-base leading-relaxed mt-2 text-justify font-serif">
                  Siswa melakukan pendaftaran di website PPDBSekolah yang
                  diinginkan. Kemudian melakukan input data sesuai dengan biodata
                  dan data asli dari calon pendaftar. Data akan digunakan sebagai
                  validasi seleksi kelengkapan data-data siswa.
                </p>
              </div>
              <div className="p-4 md:w-1/4 sm:mb-0 mb-6">
                <div className="rounded-lg h-56 overflow-hidden">
                  <img alt="content" className="object-cover object-center mx-auto h-40 w-auto"
                    src="https://res.cloudinary.com/desug/image/upload/v1648752567/PPDB/landingPage/svgexport-1_2_hhrwle.png" />
                </div>
                <h2 className="text-xl font-serif title-font text-blue-700 text-opacity-100 mt-5 text-center font-bold">
                  Seleksi Peserta
                </h2>
                <p className="text-base leading-relaxed mt-2 text-justify font-serif">
                  Sekolah melakukan analisa data dari calon peserta yang mendaftar
                  dan melakukan rekap data sesuai dengan proses seleksi yang
                  dilakukan oleh sistem. Jika peserta telah menyelesaikan unggah
                  dan melengkapi data maka hanya tinggal menunggu saja
                </p>
              </div>
              <div className="p-4 md:w-1/4 sm:mb-0 mb-6">
                <div className="rounded-lg h-56 overflow-hidden">
                  <img alt="content" className="object-cover object-center mx-auto h-40 w-auto"
                    src="https://res.cloudinary.com/desug/image/upload/v1648752775/PPDB/landingPage/svgexport-1_3_ip0zzn.png" />
                </div>
                <h2 className="text-xl font-serif font-bold title-font text-blue-700 text-opacity-100 mt-5 text-center">
                  Daftar Ulang
                </h2>
                <p className="text-base leading-relaxed mt-2  text-justify font-serif">
                  Siswa dapat melakukan daftar ulang guna menverifikasi bahwa
                  telah diterima disekolah tersebut. Daftar ulang ini bersifat
                  wajib, apabila siswa lolos namun tidak mendaftar ulang maka akan
                  dinyatakan gugur dan tidak dapat menjadi calon peserta didik
                  baru di Sekolah tempat siswa mendaftar.{" "}
                </p>
              </div>
              <div className="p-4 md:w-1/4 sm:mb-0 mb-6 ">
                <div className="rounded-lg h-56 overflow-hidden">
                  <img alt="content" className="object-cover object-center mx-auto h-40 w-auto"
                    src="https://res.cloudinary.com/desug/image/upload/v1648752780/PPDB/landingPage/IllustratorPengumuman_aqd06x.png" />
                </div>
                <h2 className="text-xl font-serif font-bold title-font text-blue-700 text-opacity-100 mt-5 text-center">
                  Pengumuman
                </h2>
                <p className="text-base leading-relaxed mt-2 text-justify font-serif">
                  Peserta dapat melakukan pengecekan hasil pengumuman pada website maupun melakukan kunjungan ke sekolah untuk
                  melihat hasil apakah dinyatakan lolos dan sesuai dengan syarat guna melanjutkan ke tahap selanjutnya yaitu
                  proses pendaftaran ulang peserta didik baru. {" "}
                </p>
              </div>

            </div>


          </div>
        </div>
      </section>
    </>
  );
};

export default Landing;