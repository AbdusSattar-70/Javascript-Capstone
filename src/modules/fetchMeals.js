const fetchMeals = async (ApiUrlSearch) => fetch(ApiUrlSearch).then((response) => response.json());

export default fetchMeals;
