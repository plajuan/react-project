import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import { Clock } from './Clock';
import { useWindowWidth } from './useWindowWidth';

//https://pucminas.instructure.com/courses/1823/pages/ciclo-de-vida-de-um-componente-componentdidupdate?module_item_id=191088
//vamos fazer uma pesquisa somente se o valor pesquisado for diferente do que já foi buscado
function App(){
  const width = useWindowWidth()
  return (
    <h1>Window width is {width}</h1>
  )  
      
}

export default App;
