const searchFood = () => {
    const yourFood = document.getElementById('input-field');
    const text = yourFood.value;
    yourFood.value = '';
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${text}`;
    fetch(url)
        .then(res => res.json())
        .then(data => searchResult(data.meals))
}
const searchResult = meals => {
    const search = document.getElementById('search-result');
    search.textContent = '';
    meals.forEach(meal => {
        console.log(meal);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
         <div onclick="loadMealDetail(${meal.idMeal})" class="card h-100">
                <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                    <h5 class="card-title">${meal.strMeal}</h5>
                    <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
            </div>
        </div> 
        `
        search.appendChild(div);
    })
}
const loadMealDetail = async (mealId) => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
    const res = await fetch(url);
    const data = await res.json();
    mealDetails(data.meals[0])

    // fetch(url)
    //     .then(res => res.json())
    //     .then(data => mealDetails(data.meals[0]))
}
const mealDetails = meal => {
    console.log(meal);
    const mealDetails = document.getElementById('meal-details');
    mealDetails.textContent = '';
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
     <img  src="${meal.strMealThumb}" class="img-thumbnail w-50 mx-auto card-img-top" alt="...">
            <div class="card-body w-50 mx-auto">
                <h5 class="card-title">${meal.strMeal}</h5>
                <p class="card-text">${meal.strInstructions.slice(0, 200)}.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
    
    `
    mealDetails.appendChild(div);
}