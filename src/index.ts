import './style.scss';
import {Main} from "./components/Main";
import extending from './components/utils/extending';

function init() {      
   extending();
   new Main();
}

init();