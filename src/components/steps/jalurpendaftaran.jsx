import React from 'react'
import { useForm } from 'react-hook-form'
import alerts from '../alerts'
import FormValidation from '../forms/validation'

const JalurPendaftaran = ({ index, dispatch, setOpenTab, isLast }) => {


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
    let items =
        [
            {
                label: 'Pilih Jalur Pendaftaran',
                error: {
                    required: 'Jalur pendaftaran harus di isi'
                },
                name: 'jalurPendaftaran',
                type: 'radio',
                options: [
                    { value: 'zonasi', label: 'Zonasi' },
                    { value: 'prestasi', label: 'Prestasi' },
                    { value: 'afirmasi', label: 'Afirmasi' },
                    { value: 'perpindahan', label: 'Perpindahan Orang Tua' }
                ]
            },


        ]


    return (
        <FormValidation items={items} onSubmit={onSubmit} />

    )
}

export default JalurPendaftaran