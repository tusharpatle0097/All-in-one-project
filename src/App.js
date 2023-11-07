import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import WellCome from './components/Wellcome/WellCome';
import './App.css'
import CrudHomePage from './components/cruds/CrudHomePage/CrudHomePage';
import NormalCrud from './components/cruds/NormalCrud/NormalCrud';
import NormalCrudUpdate from './components/cruds/NormalCrud/NormalCrudUpdate';
import NormalShowCrud from './components/cruds/NormalCrud/NormalShowCrud';
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<WellCome />}></Route>
          <Route path='/CrudHomePage' element={<CrudHomePage />}></Route>
          <Route path='/NormalCrud' element={<NormalCrud/>}></Route>
          <Route path='/Normal-Crud-Update/:id' element={< NormalCrudUpdate/>}></Route>
          <Route path='/Normal-Crud-Show/:id' element={< NormalShowCrud/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App