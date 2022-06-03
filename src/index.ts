import './style.scss';
import {Main} from "./components/Main";
import extending from './components/utils/extending';

function init() {   
   // const container:HTMLDivElement = document.getElementById('root');
   // console.log("elo");   
   extending();
   new Main();
}

init();