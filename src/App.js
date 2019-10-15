import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import { Clock } from './Clock';

//https://pucminas.instructure.com/courses/1823/pages/ciclo-de-vida-de-um-componente-componentdidupdate?module_item_id=191088
//vamos fazer uma pesquisa somente se o valor pesquisado for diferente do que já foi buscado
function App(){
  //variavel de estado e a função para 
  const [isClockHidden, setIsClockHidden] = useState(false)

  if(isClockHidden){
    return <h1>Clock is hidden</h1>
  }

  return (
<div>
  <button onClick={()=> setIsClockHidden(true)}>Hide</button>
  <Clock />
</div>

  )
      
  }


export default App;
