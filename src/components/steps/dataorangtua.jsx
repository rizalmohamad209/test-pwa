import React from 'react'
import Validation from '../forms/validation'

const DataOrangTua = ({index, dispatch, setOpenTab, isLast}) => {
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
      label: 'Nama Ayah',
      error: {required: 'Field ini harus di isi'},
      name: 'namaayah',
      type: 'text',
      placeholder: 'Masukan nama ayah anda'
    },
    {
      label: 'Tahun Lahir Ayah',
      error: {required: 'Filed ini harus di isi'},
      name: 'tahunLahriAyah',
      type: 'text',
      placeholder: 'Masukan tanggal lahir ayah'
    },
    {
      label: 'Pekerjaan Ayah',
      error: {required: 'Filed ini harus di isi'},
      name: 'pekerjaanAyah',
      type: 'text',
      placeholder: 'Masukan pekerjaan ayah'
    }
    ,
    {
      label: 'Penghasilan Ayah',
      error: {required: 'Filed ini harus di isi'},
      name: 'penghasilanAyah',
      type: 'text',
      placeholder: 'Masukan penghasilan ayah'
    }
    ,
    {
      label: 'Kebutuhan Khusus Ayah',
      error: {required: 'Filed ini harus di isi'},
      name: 'kebutuhanKhususAyah',
      type: 'text',
      placeholder: 'Masukan kebutuhan khusus ayah'
    }
    ,
    {
      label: 'Jenjang Pendidikan Ayah',
      error: {required: 'Filed ini harus di isi'},
      name: 'jenjangPendidikanAyah',
      type: 'text',
      placeholder: 'Masukan jenjang pendidikan ayah'
    }, 
     {
      label: 'Nama Ibu',
      error: {required: 'Field ini harus di isi'},
      name: 'namaIbu',
      type: 'text',
      placeholder: 'Masukan nama Ibu anda'
    },
    {
      label: 'Tahun Lahir Ibu',
      error: {required: 'Filed ini harus di isi'},
      name: 'tahunLahriIbu',
      type: 'text',
      placeholder: 'Masukan tanggal lahir Ibu'
    },
    {
      label: 'Pekerjaan Ibu',
      error: {required: 'Filed ini harus di isi'},
      name: 'pekerjaanIbu',
      type: 'text',
      placeholder: 'Masukan pekerjaan Ibu'
    }
    ,
    {
      label: 'Penghasilan Ibu',
      error: {required: 'Filed ini harus di isi'},
      name: 'penghasilanIbu',
      type: 'text',
      placeholder: 'Masukan penghasilan Ibu'
    }
    ,
    {
      label: 'Kebutuhan Khusus Ibu',
      error: {required: 'Filed ini harus di isi'},
      name: 'kebutuhanKhususIbu',
      type: 'text',
      placeholder: 'Masukan kebutuhan khusus Ibu'
    }
    ,
    {
      label: 'Jenjang Pendidikan',
      error: {required: 'Filed ini harus di isi'},
      name: 'jenjangPendidikanIbu',
      type: 'text',
      placeholder: 'Masukan jenjang pendidikan Ibu'
    }
  ]
 
  return (
    <div className="flex flex-col">
 
      <Validation items={items} onSubmit={onSubmit} />
    </div>
  )
}

export default DataOrangTua
