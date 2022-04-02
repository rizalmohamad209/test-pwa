import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import FormPendaftaran from './pages/FormPendaftaran'
import HasilSeleksi from './pages/HasilSeleksi'
import DataDokumen from './pages/DataDokumen'
import Login from './pages/Login'
import Landing from './pages/Landing'
import DaftarSekolah from './pages/DaftarSekolah'
import Zonasi from './pages/Details/Zonasi'
import Afirmasi from './pages/Details/Afirmasi'
import Prestasi from './pages/Details/Prestasi'
import Pindah_ortu from './pages/Details/Pindah_ortu'
import Sekolah from './pages/Sekolah'
import Perangkingan from './pages/Perangkingan'
import JalurPendaftaran from './pages/Details/JalurPendaftaran'
import Jadwal from './pages/Details/Jadwal'

const MainRoutes = () => {
        return (

                <Routes>
                        <Route path="/test" element={<Home />} />
                        <Route path="/dashboard" element={<FormPendaftaran />} />
                        <Route path="/list-sekolah" element={<DaftarSekolah />} />
                        <Route path="/data-dokumen" element={<DataDokumen />} />
                        <Route path="/hasil-seleksi" element={<HasilSeleksi />} />
                        <Route path='/Login' element={<Login></Login>}></Route>
                        <Route path='/' element={<Landing></Landing>} ></Route>
                        <Route path='/landing/zonasi' element={<Zonasi></Zonasi>}></Route>
                        <Route path='/landing/afirmasi' element={<Afirmasi></Afirmasi>}></Route>
                        <Route path='/landing/prestasi' element={<Prestasi></Prestasi>}></Route>
                        <Route path='/landing/pindah/ortu' element={<Pindah_ortu></Pindah_ortu>}></Route>
                        <Route path="/sekolah" element={<Sekolah />} />
                        <Route path="/perangkingan" element={<Perangkingan />} />
                        <Route path="/landing/jalur/pendaftaran" element={<JalurPendaftaran />} />
                        <Route path="/landing/jadwal" element={<Jadwal />} />
                </Routes>

        )
}

export default MainRoutes;