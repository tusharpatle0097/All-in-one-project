import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import WellCome from '../../components/Wellcome/WellCome';
import '../../../src/App.css';
import CrudHomePage from '../cruds/CrudHomePage/CrudHomePage';
import NormalCrud from '../../components/cruds/NormalCrud/NormalCrud';
import NormalCrudUpdate from '../../components/cruds/NormalCrud/NormalCrudUpdate';
import NormalShowCrud from '../../components/cruds/NormalCrud/NormalShowCrud';
import DarkModeStore from '../context/DarkModeStore';
import CompilerHomePage from '../../components/TransCompiler/CompilerHomePage/CompilerHomePage';
import NormalTransCompiler from '../../components/TransCompiler/NormalTransCompiler/NormalTransCompiler';

const routes = [
  { path: '/', element: <WellCome /> },
  { path: '/CrudHomePage', element: <CrudHomePage /> },
  { path: '/NormalCrud', element: <NormalCrud /> },
  { path: '/Normal-Crud-Update/:id', element: <NormalCrudUpdate /> },
  { path: '/Normal-Crud-Show/:id', element: <NormalShowCrud /> },
  { path: '/NormalTransCompilerHome', element: <CompilerHomePage /> },
  { path: '/NormalTransCompiler', element: <NormalTransCompiler /> },
];

const Routing = () => {
  return (
    <>
      <DarkModeStore>
        <BrowserRouter>
          <Routes>
            {routes.map((route, index) => (
              <Route key={index} path={route.path} element={route.element} />
            ))}
          </Routes>
        </BrowserRouter>
      </DarkModeStore>
    </>
  );
};

export default Routing;
