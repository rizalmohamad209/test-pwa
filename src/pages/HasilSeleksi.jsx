import React from 'react'
import SectionTitle from '../components/section-title'

import Widget from '../components/widget'
import Alert from '../components/alerts'
import { FiAlertCircle } from 'react-icons/fi';
const HasilSeleksi = () => {
    return (
        <>
            <SectionTitle title={"Hasil Seleksi"} />

            <Widget>
                <Alert
                    size="sm"
                    color="bg-green-500 text-grey-900"
                    icon={<FiAlertCircle className="alert-icon " />}>
                    Anda berada pada urutan ke 10
                </Alert>

            </Widget>


            <Widget

            >
                <table className="table table-lg">
                    <thead>

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
                </table>
            </Widget>
        </>
    )
}

export default HasilSeleksi