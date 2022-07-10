import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';
import {GifApp} from './Gif-app';
import Greeting from './components/pure/Greeting';
import Greetingf from './components/pure/GreetingF';
import TaskList from './components/containers/task.list';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GifApp />
    {/*<Greeting name={ "Hugo" }/>
    <Greetingf name= { "Componentes funcional" } />*/ }
    <TaskList />
  </React.StrictMode>
);