import './style.css';
import Logo from './asset/logo.png';
import heart from './asset/heart.png'
import displayMeals from './modules/displayMeals';
import fetchMeals from './modules/fetchMeals';
import { ApiUrlSearch } from './modules/API';

const logo = document.querySelector('#logo');
logo.src = Logo;

window.onload = async()=>{
    fetchMeals(ApiUrlSearch)
   const data = await fetchMeals(ApiUrlSearch)
   console.log(data.meals)
   displayMeals(data,heart)
}