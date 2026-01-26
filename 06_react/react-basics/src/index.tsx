import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
import Props from './components/02Props';
import Props2 from './components/03Props2';
import Context1 from './components/04Context';
import Context11 from './components/05Context2';
import UserListFrame from './components/P01PropsList';
import PracticeFrame1 from './components/P02Context'
import Hook2 from './components/07hook2useState';
import Counter01 from './components/P03useRedicet';
import Hook3 from './components/08Hook3useReducer';
import Counter02 from './components/P04userStateHook';
import Hook4 from './components/09Hook4useEffect'
import Record from './components/10Hook5useEffect2'
import Hook5 from './components/11Hook6CustomHook'
import  Counter03  from './components/P05useCounterHook';
import ParentCounter from './components/button/ParentCounter';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ParentCounter/>
    <Props text='あいうえお' />
    <Props2 text='かきくけこ'/>
    <Context1 />
    <Context11 />
    <UserListFrame />
    <PracticeFrame1 />
    <Hook2 />
    <Counter01 />
    <Hook3 />
    <Counter02/>
    <Hook4 />
    <Record personal= {{name:"tatsuki",age:60,mail:"tatsuki@gmail.com"}}/>
    <Hook5/>
    <Counter03/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
