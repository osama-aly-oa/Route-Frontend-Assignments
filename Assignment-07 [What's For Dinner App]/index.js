const recipes = [
  {
    title: "French Onion Soup",
    img: "https://images.unsplash.com/photo-1549203438-a7696aed4dac?q=80&w=746&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    desc: "A rich and savory soup made with caramelized onions and beef broth, topped with toasted baguette and melted Gruyère cheese.",
    rating: 4.7,
    reviews: 267,
    prepTime: 15,
    cookTime: 60,
    servings: 4,
    level: "Intermediate",
    difficulty: "Medium",
    type: "Starter",
    cuisine: "Mediterranean",
    ingredients: [
      "4 large onions, thinly sliced",
      "1/2 cup white wine",
      "1 liter beef broth",
      "4 tablespoons butter",
      "2 sprigs fresh thyme",
      "1 bay leaf",
      "1/2 baguette, sliced",
      "200g Gruyère cheese, grated",
      "Salt and black pepper to taste",
    ],
    instruction: [
      "Melt butter in a large pot and caramelize onions for 40 minutes.",
      "Add white wine and deglaze the pot.",
      "Add beef broth, bay leaves, and thyme. Simmer 20 minutes.",
      "Toast baguette slices.",
      "Top soup with bread and cheese, then broil 3-5 minutes.",
    ],
    tips: [
      "Caramelize the onions slowly on low heat for maximum sweetness.",
      "Use Gruyère cheese for the most traditional flavor profile.",
      "If the soup is too thick, add a splash of water or more broth.",
    ],
    nutrition: {
      calories: 380,
      protein: "18g",
      carbs: "36g",
      fat: "18g",
      fiber: "4g",
      sodium: "980mg",
    },
  },

  {
    title: "Chicken Alfredo Pasta",
    rating: 4.8,
    reviews: 421,
    img: "https://images.unsplash.com/photo-1645112411341-6c4fd023714a?auto=format&fit=crop&w=800&q=80",
    desc: "Creamy and comforting fettuccine tossed in a rich parmesan and butter sauce with golden pan-seared chicken breast.",
    prepTime: 20,
    cookTime: 30,
    servings: 3,
    level: "Easy",
    difficulty: "Easy",
    type: "Main Dish",
    cuisine: "Italian",
    ingredients: [
      "250g fettuccine pasta",
      "2 chicken breasts, sliced",
      "1 cup heavy cream",
      "1 cup grated parmesan",
      "2 tablespoons butter",
      "2 cloves garlic, minced",
      "1 tablespoon olive oil",
      "Fresh parsley, chopped",
      "Salt and black pepper",
      "Pinch of nutmeg (optional)",
    ],
    instruction: [
      "Cook pasta until al dente.",
      "Sauté chicken until golden.",
      "Melt butter, add cream and parmesan to form sauce.",
      "Mix pasta with sauce and chicken.",
      "Serve hot with parsley.",
    ],
    tips: [
      "Reserve a cup of pasta water to thin the sauce if it gets too thick.",
      "Use freshly grated parmesan cheese for smoother melting.",
      "Do not let the sauce boil once the cheese is added, or it may separate.",
    ],
    nutrition: {
      calories: 520,
      protein: "32g",
      carbs: "45g",
      fat: "22g",
      fiber: "3g",
      sodium: "640mg",
    },
  },

  {
    title: "Beef Tacos",
    rating: 4.2,
    reviews: 310,
    img: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?auto=format&fit=crop&w=800&q=80",
    desc: "Classic crispy tacos filled with seasoned ground beef, fresh lettuce, and cheddar cheese, perfect for a quick family dinner.",
    prepTime: 10,
    cookTime: 15,
    servings: 4,
    level: "Easy",
    difficulty: "Beginner",
    type: "Lunch",
    cuisine: "Mexican",
    ingredients: [
      "500g ground beef",
      "1 packet taco seasoning",
      "8 small tortillas",
      "1 cup shredded lettuce",
      "1 cup cheddar cheese",
      "1 tomato, diced",
      "1/2 onion, finely chopped",
      "1/4 cup sour cream",
      "Fresh cilantro",
      "1 lime, cut into wedges",
    ],
    instruction: [
      "Brown beef in a skillet.",
      "Add taco seasoning and water; let simmer.",
      "Warm tortillas.",
      "Fill tortillas with beef, lettuce, and cheese.",
      "Serve immediately.",
    ],
    tips: [
      "Always warm your tortillas in a dry pan for better texture and flexibility.",
      "Add a squeeze of fresh lime juice over the meat for extra zest.",
      "Don't drain all the fat from the beef; it keeps the filling moist.",
    ],
    nutrition: {
      calories: 290,
      protein: "20g",
      carbs: "28g",
      fat: "12g",
      fiber: "2g",
      sodium: "760mg",
    },
  },

  {
    title: "Vegetable Stir Fry",
    rating: 4.6,
    reviews: 189,
    img: "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=800&q=80",
    desc: "A vibrant and healthy mix of crisp vegetables wok-tossed in a savory soy-sesame sauce, ready in under 20 minutes.",
    prepTime: 15,
    cookTime: 10,
    servings: 2,
    level: "Easy",
    difficulty: "Easy",
    type: "Vegan",
    cuisine: "Asian",
    ingredients: [
      "1 bell pepper, sliced",
      "1 carrot, sliced",
      "1 broccoli head, chopped",
      "2 tablespoons soy sauce",
      "1 tablespoon sesame oil",
      "2 cloves garlic, minced",
      "1 tsp fresh ginger, grated",
      "1 cup snap peas",
      "1/2 cup baby corn",
      "1 tbsp vegetable oil",
      "Sesame seeds for garnish",
    ],
    instruction: [
      "Heat oil in a wok.",
      "Add garlic then vegetables; stir fry 5 minutes.",
      "Add soy sauce and sesame oil.",
      "Cook another 2 minutes.",
      "Serve over rice or noodles.",
    ],
    tips: [
      "Chop all vegetables to a similar size so they cook evenly.",
      "Cook on high heat and keep the vegetables moving to retain crunch.",
      "Add harder vegetables (like carrots) first, and softer ones last.",
    ],
    nutrition: {
      calories: 210,
      protein: "8g",
      carbs: "32g",
      fat: "6g",
      fiber: "5g",
      sodium: "540mg",
    },
  },

  {
    title: "Margherita Pizza",
    rating: 4.9,
    reviews: 502,
    img: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=800&q=80",
    desc: "The classic Neapolitan pizza featuring a simple yet delicious combination of tomato sauce, fresh mozzarella, and aromatic basil.",
    prepTime: 25,
    cookTime: 15,
    servings: 2,
    level: "Intermediate",
    difficulty: "Intermediate",
    type: "Dinner",
    cuisine: "Italian",
    ingredients: [
      "1 pizza dough",
      "1/2 cup tomato sauce",
      "200g fresh mozzarella",
      "Fresh basil leaves",
      "1 tablespoon olive oil",
      "1 teaspoon dried oregano",
      "Salt to taste",
      "Flour for dusting",
      "Red pepper flakes (optional)",
    ],
    instruction: [
      "Spread pizza dough on a tray.",
      "Add tomato sauce evenly.",
      "Place mozzarella slices and basil.",
      "Bake at high heat for 12–15 minutes.",
      "Drizzle olive oil before serving.",
    ],
    tips: [
      "Let the dough rest at room temperature for 30 mins before stretching.",
      "Don't overload the pizza with sauce, or the center will be soggy.",
      "Add fresh basil leaves *after* baking for the best flavor and color.",
    ],
    nutrition: {
      calories: 430,
      protein: "19g",
      carbs: "50g",
      fat: "14g",
      fiber: "3g",
      sodium: "720mg",
    },
  },
];

var currentRecipeIndex = -1;

function loadRandomRecipe() {
  var randomIndex;

  do {
    randomIndex = Math.floor(Math.random() * recipes.length);
  } while (randomIndex === currentRecipeIndex);

  currentRecipeIndex = randomIndex;

  var r = recipes[randomIndex];

  // Image
  document.getElementById("recipe-img").src = r.img;

  // difficulty + Type
  document.getElementById("recipe-difficulty").textContent = r.difficulty;
  document.getElementById("recipe-type").textContent = r.type;

  // Title + Rating
  document.getElementById("recipe-title").textContent = r.title;
  document.getElementById("recipe-desc").textContent = r.desc;
  document.getElementById("recipe-rating").textContent = r.rating;
  document.getElementById("recipe-reviews").textContent = "(" + r.reviews;

  // Stats
  document.getElementById("prep-time").textContent = r.prepTime + " min";
  document.getElementById("cook-time").textContent = r.cookTime + " min";
  document.getElementById("servings").textContent = r.servings + " people";

  // Ingredients
  document.getElementById("ingredient-list").innerHTML = r.ingredients
    .map(
      (item, i) =>
        `<li class="ingredient-item"><span class="step-num">${
          i + 1
        }</span> ${item}</li>`
    )
    .join("");

  // Instructions
  document.getElementById("instructions").innerHTML = r.instruction
    .map(
      (step, i) => `
        <div class="instruction-item">
            <div class="instruction-num-box">${i + 1}</div>
            <p class="m-0 text-secondary">${step}</p>
        </div>
    `
    )
    .join("");

  // Nutrition
  document.getElementById("nutrition").innerHTML = `
        <div class="row">
            <div class="col-md-6">
                <div class="nutrition-card">
                    <div class="nutrition-icon bg-icon-orange"><i class="fas fa-fire"></i></div>
                    <div class="nutrition-info">
                        <h6>Calories</h6><strong>${r.nutrition.calories} kcal</strong>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="nutrition-card">
                    <div class="nutrition-icon bg-icon-blue"><i class="fas fa-dumbbell"></i></div>
                    <div class="nutrition-info">
                        <h6>Protein</h6><strong>${r.nutrition.protein}</strong>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="nutrition-card">
                    <div class="nutrition-icon bg-icon-yellow"><i
                            class="fa-solid fa-wheat-awn-circle-exclamation"></i></div>
                    <div class="nutrition-info">
                        <h6>Carbohydrates</h6><strong>${r.nutrition.carbs}</strong>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="nutrition-card">
                    <div class="nutrition-icon bg-icon-red"><i class="fas fa-tint"></i></div>
                    <div class="nutrition-info">
                        <h6>Fat</h6><strong>${r.nutrition.fat}</strong>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="nutrition-card">
                    <div class="nutrition-icon bg-icon-green"><i class="fas fa-leaf"></i></div>
                    <div class="nutrition-info">
                        <h6>Fiber</h6><strong>${r.nutrition.fiber}</strong>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="nutrition-card">
                    <div class="nutrition-icon bg-icon-pink"><i class="fas fa-cube"></i></div>
                    <div class="nutrition-info">
                        <h6>Sodium</h6><strong>${r.nutrition.sodium}</strong>
                    </div>
                </div>
            </div>
  `;

  // Tips
  document.getElementById("tips").innerHTML = r.tips
    .map(
      (tip, i) => `
    <div class="tip-box">
        <i class="fas fa-check-circle tip-icon"></i>
        <span class="text-secondary">${tip}</span>
    </div>
    `
    )
    .join("");

  // Smooth scroll to recipe section
  document.getElementById("recipe-section").scrollIntoView({
    behavior: "smooth",
    block: "center",
  });

  var warningBox = document.getElementById("time-warning");

  if (r.cookTime + r.prepTime >= 45) {
    warningBox.classList.remove("d-none");
  } else {
    warningBox.classList.add("d-none");
  }
}

// Button listener
document
  .querySelector(".btn-refresh")
  .addEventListener("click", loadRandomRecipe);

// Load first recipe on page start
loadRandomRecipe();
