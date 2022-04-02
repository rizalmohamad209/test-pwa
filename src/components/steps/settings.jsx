import React from 'react'
import Validation from '../forms/validation'

const Settings = ({index, dispatch, setOpenTab, isLast}) => {
  const onSubmit = () => {
    dispatch({type: 'validate', index: index})
    dispatch({type: 'enable', index: index + 1})
    dispatch({type:'active', index: index })
    if (isLast) {
      setOpenTab(index)
    } else {
      setOpenTab(index + 1)
    }
  }
  let items = [
     {
      label: 'Kabupaten / Kota',
      error: {required: 'Field ini harus di isi'},
      name: 'name',
      type: 'text',
      placeholder: 'Enter you name'
    },
    {
      label: 'Kecamatan',
      error: {required: 'Field ini harus di isi'},
      name: 'name',
      type: 'text',
      placeholder: 'Enter you name'
    },
    {
      label: 'Alamat',
      error: {required: 'Field ini harus di isi'},
      name: 'alamat',
      type: 'text',
      placeholder: 'Masukan alamat lengkap anda'
    },
      {
      label: 'Kelurahan',
      error: {required: 'Field ini harus di isi'},
      name: 'kelurahan',
      type: 'text',
      placeholder: 'Masukan kelurahan anda'
    },
      {
      label: 'Desa',
      error: {required: 'Field ini harus di isi'},
      name: 'desa',
      type: 'text',
      placeholder: 'Masukan desa anda'
    },
      {
      label: 'Dusun',
      error: {required: 'Field ini harus di isi'},
      name: 'dusun',
      type: 'text',
      placeholder: 'Masukan dusun anda'
    }
    ,
      {
      label: 'RT',
      error: {required: 'Field ini harus di isi'},
      name: 'rt',
      type: 'text',
      placeholder: 'Masukan rt anda'
    }
    ,
      {
      label: 'RW',
      error: {required: 'Field ini harus di isi'},
      name: 'rw',
      type: 'text',
      placeholder: 'Masukan rw anda'
    }
    ,
      {
      label: 'Kose POS',
      error: {required: 'Field ini harus di isi'},
      name: 'kodepos',
      type: 'text',
      placeholder: 'Masukan kode pos anda'
    }
  ]
  return (
    <div className="flex flex-col">
      <Validation items={items} onSubmit={onSubmit} />
    </div>
  )
}

export default Settings
