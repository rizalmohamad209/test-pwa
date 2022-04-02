export const initialState = [
  {index: 1, title: 'Data Diri', active: true, disabled: false, valid: false},
  {index: 2, title: 'Alamat',  active: false,disabled: true, valid: false},
  {index: 3, title: 'Data Orang Tua', active: false, disabled: true, valid: false},
   {index: 4, title: 'Jalur Pendaftaran', active: false, disabled: true, valid: false},
  {index: 5, title: 'Upload Dokumen', active: false, disabled: true, valid: false},
  {index: 6, title: 'Finish',  active: false,disabled: true, valid: false},
]

export const reducer = (state, action) => {
  switch (action.type) {
    case 'disable':
      return state.map(step => {
        if (action.index === step.index) {
          step['disabled'] = true
        }
        return step
      })
    case 'enable':
      return state.map(step => {
        if (action.index === step.index) {
          step['disabled'] = false
        }
        return step
      })
    case 'validate':
      return state.map(step => {
        if (action.index === step.index) {
          step['valid'] = true
        }
        return step
      })
    case 'active':
      return state.map(step =>{
        if(action.index === step.index){
          step['active'] = true
        }
        return step
      })
    default:
      throw new Error()
  }
}

