import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelloWordsApp } from './HelloWordApp';
import { CountApp } from './CountApp';
import './styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelloWordsApp title="hola" subTitle="sub titulo"/>
    <CountApp value={ 0 } />
  </React.StrictMode>
);


