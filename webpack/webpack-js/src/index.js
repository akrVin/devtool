import './index.html';
import './style/style.less';
import logo from './images/Logo.png';
import { mult, sum } from './modules/calc';

const imgWrap = document.querySelector('.img');
const img = new Image();
img.src = logo;
img.width = 60;
img.height = 60;
imgWrap.append(img);


console.log(mult(2, 4));
console.log(sum(3, 4));