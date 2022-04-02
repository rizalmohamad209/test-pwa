import React from 'react'
import Alert from '../alerts'
import {FiAlertCircle} from 'react-icons/fi'
import {Link} from 'react-router-dom'

const Finish = ({index, dispatch, setOpenTab, isLast}) => {
  return (
    <div className="flex flex-col ">
    <h1 className='text-lg text-center font-medium'>Yeay pendaftaran kamu bentar lagi selesai nih..</h1>
       <img className='w-80 h-96 mx-auto' src="https://res.cloudinary.com/dk4dgvu4w/image/upload/v1648718821/bubble-gum-workflow-1_fpm8os.png" alt="" />
       <div className='mx-auto'>
       <h1 className='text-lg font-medium'>Silahkan pilih sekolah yang ingin kamu daftar klik tombol di bawah ini.</h1>
        <Link to="/list-sekolah">
     <center> <button className='px-4 text-white text-center py-4 bg-blue-500 rounded-xl items-center justify-center'> Pilih Sekolah</button></center>
      </Link>
      </div>
        </div>
  )
}

export default Finish
