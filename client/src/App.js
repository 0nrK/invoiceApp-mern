import React, { useState, useEffect } from 'react'
import { FormContextProvider } from './context/FormContext'
import Home from './pages/Home'
import axios from 'axios'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import SingleInvoice from './pages/SingleInvoice';

const App = () => {

  const [data, setData] = useState([])

  useEffect(() => {
    axios.get("http://localhost:5000/")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err))
  }, [])

  return (
    <FormContextProvider>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home props={data} />} />
          <Route path="/:id" element={<SingleInvoice props={data} />} />
        </Routes>
      </BrowserRouter>
    </FormContextProvider>
  )
}

export default App
