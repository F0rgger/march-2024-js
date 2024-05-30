//взяти https://dummyjson.com/docs/recipes та вивести інформацію про всі рецепти. Інгредієнти повинні бути список під час відображення.

function fetchAndDisplayRecipes() {
    fetch('https://dummyjson.com/recipes')
        .then(response => response.json())
        .then(data => {
            let recipeContainer = document.getElementById('recipe-container');
            recipeContainer.innerHTML = '';

            data.recipes.forEach(recipe => {
                let recipeDiv = document.createElement('div');
                recipeDiv.classList.add('recipe');

                recipeDiv.innerHTML = `
                            <h2>${recipe.name}</h2>
                            <img src="${recipe.image}" alt="${recipe.name}">
                            <p><strong>Cuisine:</strong> ${recipe.cuisine}</p>
                            <p><strong>Difficulty:</strong> ${recipe.difficulty}</p>
                            <p><strong>Prep Time:</strong> ${recipe.prepTimeMinutes} minutes</p>
                            <p><strong>Cook Time:</strong> ${recipe.cookTimeMinutes} minutes</p>
                            <p><strong>Servings:</strong> ${recipe.servings}</p>
                            <p><strong>Calories per Serving:</strong> ${recipe.caloriesPerServing}</p>
                            <p><strong>Rating:</strong> ${recipe.rating} (${recipe.reviewCount} reviews)</p>
                            <h3>Ingredients:</h3>
                            <ul class="ingredients">
                                ${recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
                            </ul>
                            <h3>Instructions:</h3>
                            <ol class="instructions">
                                ${recipe.instructions.map(instruction => `<li>${instruction}</li>`).join('')}
                            </ol>
                            <h3>Tags:</h3>
                            <ul class="tags">
                                ${recipe.tags.map(tag => `<li>${tag}</li>`).join('')}
                            </ul>
                            <h3>Meal Type:</h3>
                            <ul class="mealType">
                                ${recipe.mealType.map(type => `<li>${type}</li>`).join('')}
                            </ul>
                        `;

                recipeContainer.appendChild(recipeDiv);
            });
        })
        .catch(error => {
            console.error('Error', error);
        });
}


fetchAndDisplayRecipes();