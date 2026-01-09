import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
import Hello from './components/01Hello';
import Props from './components/02Props';
import Props2 from './components/03Props2';
import Props3 from './components/P01PropsList';
import Context1 from './components/04Context';
import Context11 from './components/05Context2';
import UserListFrame from './components/P01PropsList';
import PracticeFrame1 from './components/P02Context'
import Hook1 from './components/06hook1';
import Hook2 from './components/07hook2useState';
import Counter01 from './components/P03useRedicet';
import Hook3 from './components/08Hook3useReducer';
import Counter02 from './components/P04userStateHook';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Hello />
    <Props text='あいうえお' />
    <Props2 text='かきくけこ'/>
    <Props3 />
    <Context1 />
    <Context11 />
    <UserListFrame />
    <PracticeFrame1 />
    <Hook1 />
    <Hook2 />
    <Counter01 />
    <Hook3 />
    <Counter02/>
    

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
