
import { BrowserRouter } from 'react-router-dom'
import Layouts from './layouts'
import Main from './MainRoutes'
import './css/tailwind.css'
import './css/main.css'
import './css/animate.css'
import './css/_components.css'


const Wrapper = ({ children }) => {
  return <Layouts>{children}</Layouts>
}
function App() {


  return (
    <BrowserRouter>
      <Wrapper>
        <Main />
      </Wrapper>

    </BrowserRouter>
  )
}

export default App
