import { ApiUrlSearch } from './API.js';

const fetchMeals = async () => {
  const response = await fetch(ApiUrlSearch);
  const data = await response.json();
  return data;
};
export default fetchMeals;
