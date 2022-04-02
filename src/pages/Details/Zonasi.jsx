import React from 'react'
import { Link } from 'react-router-dom'

const Zonasi = () => {
return (
<>
    <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div
                class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Zonasi
                </h1>
                <p class="leading-relaxed text-lg">1. Jalur zonasi diperuntukkan bagi calon peserta didik baru SMA
                    Negeri yang berdomisili pada wilayah zonasi berdasarkan jarak  </p>
                <p className='leading-relaxed text-lg ml-5'>terdekat dengan Satuan Pendidikan yang
                    dibuktikan dengan KK</p>
                <p class="leading-relaxed text-lg">2. Domisili berdasarkan alamat pada KK yang diterbitkan paling
                    singkat 1 (satu) tahun sebelum tanggal pendaftaran PPDB </p>
                <p class="leading-relaxed text-lg">3. Dalam hal kartu keluarga sebagaimana dimaksud pada poin (2) tidak
                    dimiliki oleh calon peserta didik karena keadaan tertentu, </p>
                <p className='leading-relaxed text-lg ml-5'> maka dapat diganti dengan surat
                    keterangan domisili.</p>
                <p class="leading-relaxed text-lg">4. Surat keterangan domisili sebagaimana dimaksud diterbitkan oleh
                    ketua rukun tetangga atau ketua rukun warga yang  </p>
                <p className='leading-relaxed text-lg ml-5'>dilegalisir oleh lurah/kepala desa atau pejabat
                    setempat lain yang berwenang.</p>
                <p class="leading-relaxed text-lg">5. Surat keterangan domisili sebagaimana dimaksud memuat mengenai
                    keterangan bahwa peserta didik yang bersangkutan telah  </p>
                <p className='leading-relaxed text ml-5'>berdomisili paling singkat 1 (satu) tahun
                    sejak diterbitkannya surat keterangan domisili.</p>
                <p class="leading-relaxed text-lg">6. Keadaan tertentu sebagaimana dimaksud pada poin (3) meliputi:
                    bencana alam; dan/atau bencana sosial.</p>
                <p class="leading-relaxed text-lg">7. Sekolah memprioritaskan peserta didik yang memiliki kartu keluarga
                    atau surat keterangan domisili dalam 1 (satu) wilayah
                </p>
                <p className='leading-relaxed text-lg ml-5'> kabupaten/kota yang sama dengan sekolah asal.</p>
                <p class="leading-relaxed text-lg">8. Calon peserta didik hanya dapat memilih 1 (satu) jalur pendaftaran
                    PPDB dalam 1 (satu) wilayah zonasi. </p>
                <p class="leading-relaxed text-lg">9. Selain melakukan pendaftaran PPDB melalui jalur zonasi dalam
                    wilayah zonasi yang telah ditetapkan,</p>
                <p class="mb-8 leading-relaxed"></p>


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

export default Zonasi