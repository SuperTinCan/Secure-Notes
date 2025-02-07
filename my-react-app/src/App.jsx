import { BrowserRouter, Routes, Route } from "react-router-dom"
import SignUp from "./sign-up"
import Login from "./login"

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route index element={<SignUp />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
