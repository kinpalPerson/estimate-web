import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import RequestForm from './pages/RequestForm'
import Complete from './pages/Complete'
//import './Home.css' // 이거 하나면 끝

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/request" element={<RequestForm />} />
        <Route path="/complete" element={<Complete />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
