import React from 'react'
import Widget from '../components/widget'
import SectionTitle from '../components/section-title'

import { ProgressBarWithText } from '../components/progress-bars'
const Home = () => {

  const palette = ['bg-red-500', 'bg-green-500', 'bg-blue-500']
  return (
    <>
      <SectionTitle title={"Dashboard"} />
      <Widget>
        <table className="table table-lg">
          <thead>

            <td >Biodata Siswa</td>

          </thead>
          <tbody>

            <tr >

              <td > Nama</td>
              <td>Mohamad Rizal Khamami</td>

            </tr>
            <tr >

              <td > No Pendaftaran</td>
              <td>0094062626</td>

            </tr>
            <tr >

              <td > Jenis Kelamin</td>
              <td>Laki - laki</td>

            </tr>
            <tr >

              <td > Tempat, Tanggal Lahir</td>
              <td>Brebes, 19 November 2001</td>

            </tr>
            <tr >

              <td > Alamat</td>
              <td>Desa Wangandalem, Kec.Brebes, Kab.Brebes</td>

            </tr>
            <tr >

              <td > Tahun Lulus</td>
              <td>2022</td>

            </tr>
            <tr >

              <td > Jalur Pendaftaran</td>
              <td>Zonasi</td>

            </tr>
            <tr >

              <td > Tujuan Sekolah</td>
              <td>SMPN 1 Selawi</td>

            </tr>
            <tr >

              <td > Urutane Ke</td>
              <td>10</td>

            </tr>
            <tr >

              <td >Status</td>
              <td>Masih Dalam Seleksi</td>

            </tr>



          </tbody>
          <thead>
            <tr>
              <td>Rapor</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Rata-rata rapor</td>
              <td>
                <ProgressBarWithText width={90} color={"bg-green-500"} />
              </td>
            </tr>
          </tbody>

          <thead>
            <tr>
              <td>Nilai Rapor Semester 1 Kelas 10</td>

            </tr>
          </thead>
          <tbody>
            <tr>
              <td>B.Ind</td>
              <td>
                <ProgressBarWithText width={90} color={"bg-green-500"} />
              </td>
            </tr>
            <tr>
              <td>Mat</td>
              <td>
                <ProgressBarWithText width={80} color={"bg-red-500"} />
              </td>
            </tr>
            <tr>
              <td>IPA</td>
              <td>
                <ProgressBarWithText width={85} color={"bg-blue-500"} />
              </td>
            </tr>
            <tr>
              <td>B.Ing</td>
              <td>
                <ProgressBarWithText width={95} color={"bg-yellow-500"} />
              </td>
            </tr>
              <tr>
                <td>Rerata</td>
                <td>
                  <ProgressBarWithText width={89} color={"bg-indigo-500"} />
                </td>
            
            </tr>
          </tbody>
        </table>
      </Widget>
    </>
  )
}

export default Home