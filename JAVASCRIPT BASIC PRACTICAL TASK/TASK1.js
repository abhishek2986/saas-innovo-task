const recipeName = document.getElementById("inputtext");
const ingredients = document.getElementById("ingredients");
const category = document.getElementById("category");
const submitBtn = document.getElementById("submitbtn");
const recipeList = document.getElementById("recipelist");

const searchInput = document.getElementById("searchIngredient");
const filterCategory = document.getElementById("filterCategory");

let recipes = JSON.parse(localStorage.getItem("recipes")) || [];
let editIndex = null;

// Display Recipes
function displayRecipes(recipeArray = recipes) {

    recipeList.innerHTML = "";

    recipeArray.forEach((recipe, index) => {

        const li = document.createElement("li");

        li.innerHTML = `
            <div class="recipe-name">${recipe.name}</div>
            <div class="recipe-details">
                <strong>Ingredients:</strong> ${recipe.ingredients}
            </div>
            <div class="recipe-details">
                <strong>Category:</strong> ${recipe.category}
            </div>
        `;

        const buttonDiv = document.createElement("div");
        buttonDiv.classList.add("recipe-buttons");

        const editBtn = document.createElement("button");
        editBtn.textContent = "Edit";
        editBtn.classList.add("edit-btn");

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.classList.add("delete-btn");

        buttonDiv.append(editBtn);
        buttonDiv.append(deleteBtn);

        li.append(buttonDiv);

        recipeList.append(li);

        // Delete
        deleteBtn.onclick = function () {

            recipes.splice(index, 1);

            localStorage.setItem("recipes", JSON.stringify(recipes));

            displayRecipes();
        };

        // Edit
        editBtn.onclick = function () {

            recipeName.value = recipe.name;
            ingredients.value = recipe.ingredients;
            category.value = recipe.category;

            editIndex = index;

            submitBtn.textContent = "Update Recipe";
        };

    });

}

// Add / Update
submitBtn.onclick = function () {

    if (
        recipeName.value.trim() === "" ||
        ingredients.value.trim() === "" ||
        category.value === ""
    ) {

        alert("Please fill all fields");
        return;
    }

    const recipe = {

        name: recipeName.value,
        ingredients: ingredients.value,
        category: category.value
    };

    if (editIndex === null) {

        recipes.push(recipe);

    } else {

        recipes[editIndex] = recipe;
        editIndex = null;
        submitBtn.textContent = "Add Recipe";

    }

    localStorage.setItem("recipes", JSON.stringify(recipes));

    recipeName.value = "";
    ingredients.value = "";
    category.value = "";

    displayRecipes();

};

// Search by Ingredient
searchInput.addEventListener("keyup", function () {

    const searchValue = searchInput.value.toLowerCase();

    const filteredRecipes = recipes.filter(recipe =>
        recipe.ingredients.toLowerCase().includes(searchValue)
    );

    displayRecipes(filteredRecipes);

});

// Filter by Category
filterCategory.addEventListener("change", function () {

    if (filterCategory.value === "") {

        displayRecipes();

    } else {

        const filteredRecipes = recipes.filter(recipe =>
            recipe.category === filterCategory.value
        );

        displayRecipes(filteredRecipes);

    }

});

// Show saved recipes
displayRecipes();





















