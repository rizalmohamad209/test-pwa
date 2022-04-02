import React, {useEffect, useState} from 'react'
import {useDropzone} from 'react-dropzone'

const Previews = props => {
  const [files, setFiles] = useState([])
  const {getRootProps, getInputProps, isDragActive} = useDropzone({
    accept: '',
    onDrop: acceptedFiles => {
      setFiles(
        acceptedFiles.map(file =>
          Object.assign(file, {
            preview: URL.createObjectURL(file)
          })
        )
      )
    }
  })

  useEffect(
    () => () => {
     
      files.forEach(file => URL.revokeObjectURL(file.preview))
    },
    [files]
  )
console.log(files,"files");
  return (
    <>
      <div {...getRootProps()} className='mb-8'>
        <input {...getInputProps()} />
        <div
          className={` ${
            isDragActive ? 'bg-grey-100 dark:bg-grey-800' : 'bg-grey-50 dark:bg-grey-700'
          } border-dashed border-4 border-grey-200 dark:border-grey-600 p-8 h-24 w-full flex items-center justify-center`}>
          <div className="font-bold text-base">
          {files.length > 0 ? ( files.map((file, i) => (
          
           <h1 className='font-bold text-base'>{file.path}</h1>
          
        ))) :( <span className='text-sm text-center'>Drag and drop some files here, or click to select files</span>) }

          </div>
        </div>
       
         <div className='mt-2 '>
         <button  className=' rounded-xl border border-black px-5 py-1   float-right ' value={"Ganti"}> Ganti</button>
           </div>
      </div>
      
     
     
    </>
  )
}

export default Previews
