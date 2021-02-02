import { hr } from 'date-fns/locale';
import todo from './todo';
import {todoProjectUl, logTodos, todoProjectListUl} from './todoProject';

const homePage = () => {
    let div = document.createElement('div');
    let h4 = document.createElement('h4');
    h4.innerText = 'Projects';
    div.appendChild(h4);
    div.appendChild(todoProjectListUl);
    return div;
}

export default homePage