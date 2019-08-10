import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { TodoList } from './TodoList';

//#1 class: criar uma tag html com js puro
const rootElement = document.getElementById('root')
//#1 class
//const element = document.createElement('div')
//element.innerHTML = 'hello world'
//element.className = 'container'
//rootElement.appendChild(element)

//#1.1 cria um objeto react 
  //const element = React.createElement('div', {className: 'container'}, 'de novo hello')
//#1.2 cria um objeto react e adiciona o texto no 'children'
  //const element = React.createElement('div', {className: 'container', children: 'hello de novo'})
//#1.3
//const element = React.createElement('div', {className: 'container'}, 'de novo hello', 'hello de novo')
//#1.4 - escrevendo o conteúdo no children
//const element = React.createElement('div', {className: 'container', children: ['de novo ', 'fica']})

//ReactDOM.render(element, rootElement)

//#2.1 usando o JSX - pode passar uma variável ou uma função entre {}
//let txt = 'e aí doido?'
//const element = <div>{txt}</div>
//ReactDOM.render(element, rootElement)

//#2.2 Custom elements do HTML também podem ser usados
const hello = 'oi'
const props = {
  className: 'main-title',
  children: 'mais un',
  
}
//const Custom = () => <h1 {... props}>{(() => hello)()}</h1>
//#2.3
const Custom = () => <h1 {... props}></h1>
ReactDOM.render(<Custom />, rootElement)
ReactDOM.render(<TodoList />, document.getElementById('todo'))
//aula
//2 Desmistificando o JSX 2; https://pucminas.instructure.com/courses/1823/pages/desmistificando-o-jsx-parte-2?module_item_id=191084
//3 Components https://pucminas.instructure.com/courses/1823/pages/function-components?module_item_id=191083
//4 Comunicação entre componentes https://pucminas.instructure.com/courses/1823/pages/comunicacao-entre-componentes?module_item_id=191085
//5 Class Componentes (ou Stateful Components)  https://pucminas.instructure.com/courses/1823/pages/class-componentes-ou-stateful-components?module_item_id=191086
//6 Ciclo de vida de um componente (componentDidMount) https://pucminas.instructure.com/courses/1823/pages/ciclo-de-vida-de-um-componente-componentdidmount?module_item_id=191087

//#0 line below is from React - render App.js
//ReactDOM.render(<App />, document.getElementById('root'));
  
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
