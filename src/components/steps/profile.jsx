import React from 'react'
import Validation from '../forms/validation'

const Profile = ({index, dispatch, setOpenTab, isLast}) => {
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
      label: 'Nama',
      error: {required: 'Please enter your name'},
      name: 'name',
      type: 'text',
      placeholder: 'Enter you name'
    },
    {
      label: 'NISN',
      error: {required: 'Please enter valid NISN'},
      name: 'nisn',
      type: 'nisn',
      placeholder: 'Enter you NISN'
    },
    {
      label: 'Tempat Lahir',
      error: {required: 'Tempat lahir harus di isi'},
      name: 'tempatLahir',
      type: 'text',
      placeholder: 'Nasukan tempat lahir'
    },
      {
      label: 'Tanggal Lahir',
      error: {required: 'Tanggal lahir harus di isi'},
      name: 'tanggalLahir',
      type: 'text',
      placeholder: 'Masukan tanggal lahir'
    },
     {
      label: 'NIK',
      error: {required: 'NIK harus di isi'},
      name: 'nik',
      type: 'text',
      placeholder: 'Masukan NIK anda'
    },
      {
      label: 'Agama',
      error: {required: 'Agama harus di isi'},
      name: 'agama',
      type: 'text',
      placeholder: 'Masukan agama anda'
    },
     {
      label: 'No Peserta UN',
      error: {required: 'Field ini harus di isi'},
      name: 'noun',
      type: 'text',
      placeholder: 'Masukan no un anda'
    },
     {
      label: 'No Telepon',
      error: {required: 'Field ini harus di isi'},
      name: 'notlp',
      type: 'text',
      placeholder: 'Masukan no telepon anda'
    },
    {
      label: 'No Hp',
      error: {required: 'Field ini harus di isi'},
      name: 'nohp',
      type: 'text',
      placeholder: 'Masukan no HP anda'
    },  {
      label: 'Email',
      error: {required: 'Field ini harus di isi'},
      name: 'email',
      type: 'email',
      placeholder: 'Masukan email anda'
    },  {
      label: 'Alat Transportasi',
      error: {required: 'Field ini harus di isi'},
      name: 'transportasi',
      type: 'text',
      placeholder: 'Masukan Alat transportasi anda'
    },
      {
      label: 'Jarak Rumah ke sekolah',
      error: {required: 'Field ini harus di isi'},
      name: 'jarak',
      type: 'text',
      placeholder: 'Masukan jarak rumah ke sekolah anda'
    },
      {
      label: 'Waktu tempuh ke sekolah',
      error: {required: 'Field ini harus di isi'},
      name: 'tempuh',
      type: 'text',
      placeholder: 'Masukan waktu tempuh ke sekolah anda'
    },
     {
      label: 'Jumlah Saudara kandung',
      error: {required: 'Field ini harus di isi'},
      name: 'saudara',
      type: 'text',
      placeholder: 'Masukan jumlah saudara kandung anda'
    },
     {
      label: 'Berat Badan',
      error: {required: 'Field ini harus di isi'},
      name: 'berat',
      type: 'text',
      placeholder: 'Masukan Berat Badan anda'
    },
       {
      label: 'Tinggi Badan',
      error: {required: 'Field ini harus di isi'},
      name: 'tinggi',
      type: 'text',
      placeholder: 'Masukan Tinggi Badan anda'
    },
      {
      label: 'Kebutuhan khusus',
      name: 'kebutuhan',
      type: 'text',
      placeholder: 'Masukan kebutuhan khusus jika mempunyai'
    },
      {
      label: 'No KIP',
      error: {required: 'Field ini harus di isi'},
      name: 'KIP',
      type: 'text',
      placeholder: 'Masukan No KIP anda jika mempunyai'
    },
    {
      label: 'Jenis Kelamin',
      error: {
        required: 'Gender is required'
      },
      name: 'gender',
      type: 'radio',
      options: [
        {value: 'laki-laki', label: 'Laki-laki'},
        {value: 'perempuan', label: 'Perempuan'}
      ]
    },
      {
      label: 'Penerima KIP',
      error: {
        required: 'Penerima KIP is required'
      },
      name: 'penerimakip',
      type: 'radio',
      options: [
        {value: 'ya', label: 'Ya'},
        {value: 'tidak', label: 'Tidak'}
      ]
    },  {
      label: 'Jenis Tinggal',
      error: {
        required: 'Jenis Tinggal is required'
      },
      name: 'jenisTinggal',
      type: 'radio',
      options: [
        {value: 'bersama orang tua', label: 'Bersama Orang Tua'},
        {value: 'bersama wali', label: 'Bersama Wali'}
      ]
    }
      
  
    // {
    //   label: 'Perempuan',
    //   name: 'JenisKelamin',
    //   type: 'radio',
    // },
    //    {
    //   label: 'Penerima KIP',
    //   error: {required: 'Field ini harus di isi'},
    //   name: 'penerimaKIP',
    //   type: 'checkbox',
    // },
    //    {
    //   label: 'Jenis Tinggal',
    //   error: {required: 'Field ini harus di isi'},
    //   name: 'Tinggal',
    //   type: 'checkbox',
    // },
    
  ]
  return (
    <div className="flex flex-col w-full gap-3">
    
         
        
      <Validation items={items} onSubmit={onSubmit} />
      
    </div>
  )
}

export default Profile
