import React from 'react'
import Previews from '../dropzone/previews'
import Widget from '../widget'
import SectionTitle from '../section-title'

const UploadDokumen = ({ index, dispatch, setOpenTab, isLast }) => {

    const onSubmit = () => {
        dispatch({ type: 'validate', index: index })
        dispatch({ type: 'enable', index: index + 1 })
        dispatch({ type: 'active', index: index })
        if (isLast) {
            setOpenTab(index)
        } else {
            setOpenTab(index + 1)
        }
    }
    return (
        <>
            <SectionTitle title="Upload SKHUN (Wajib)" />

            <Previews />

            <SectionTitle title="Upload Akta Kelahiran (Wajib)" />

            <Previews />
            <SectionTitle title="Upload Kartu Keluarga (Wajib)" />

            <Previews />
            <SectionTitle title="Upload Rapor 5 semester (Wajib)" />

            <Previews />
            <SectionTitle title="Upload Ijazah (Wajib)" />

            <Previews />
            <SectionTitle title="Upload Surat Kelulusan (Wajib)" />

            <Previews />
            <SectionTitle title="Upload Nilai Rapor Terakhir (Wajib)" />

            <Previews />
            <button
                onClick={onSubmit}
                type="submit"
                class="text-white block mt-4  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
                Next
            </button>

        </>

    )
}

export default UploadDokumen