import React from 'react'
import Previews from '../components/dropzone/previews'
import SectionTitle from '../components/section-title'
const DataDokumen = () => {
  return (
      <>
      <SectionTitle title={"Data Dokumen"}/>
       <SectionTitle title={"SKHUN (Wajib)"}/>
         <Previews />

           <SectionTitle title={"Akte Kelahiran (Wajib)"}/>
         <Previews />

           <SectionTitle title={"Kartu Keluarga (Wajib)"}/>
         <Previews />
           <SectionTitle title={"Nilai Raport 5 Semester (Wajib)"}/>
         <Previews />
           <SectionTitle title={"SKHUN (Wajib)"}/>
         <Previews />

          <SectionTitle title={"Piagam Penghargaan (Optional)"}/>
         <Previews /> 
         <Previews /> 
         <Previews /> 
         <Previews /> 
         <Previews /> 
    </>

  )
}

export default DataDokumen