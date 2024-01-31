import React from 'react'
import Collection from "./collection";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
const App = () => {
  return (
    <>
    <Router>
    <Routes>
       <Route  path="/" element={<Collection/>} />
    </Routes>
    </Router>
    </>
  )
}

export default App