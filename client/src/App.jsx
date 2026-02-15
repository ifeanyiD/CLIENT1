import React from 'react';
import {router} from './config/router';
import { RouterProvider } from 'react-router-dom';

export default function App() {

  return (
    <RouterProvider router={router}/>
  );
}
