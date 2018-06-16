List of components

Directions
FreeRecipes
GroceryList
GroceryListDepartment
GroceryListSettings
Ingredients
Intro
Login
Menu
Recipe
RecipeCalendar
Router
Signup
Tabs
WeeklyMenu
menu.png

---------------

Recipe Card
 -- stuff inside

Weekly Menu
 -- List of short Recipe Cards

 Main components
  Recipe
  Grocery List
  WeeklyMenu

 Sub components
  Recipe Ingredients
  GLDepartments
  (Recipe titles + link)
  (Ingredients from Recipe)
  (Ingredients from Department)

  Navigation
 Screens

=========

Recipe Box (Adding Recipes into database)

Each recipe has
Main Recipe Image
Additional recipe images
Directions
Ingredients
Recipe Notes

Add Recipe
Image upload
Image Delete
Image Gallery

---

Groceristar

routes
- grocery lists -> Departments Group
- Departments select


#### Ingredients
- Simple version
- List with items from recipes

#### Free Recipe List
it's a simple version of Weekly Menu Page
Just list with recipe titles and links to recipe details

#### Grocery List Screen
it's a page with accordeon. Each section of accordeon related to Department of Ingredients
each section contain Department Title(+id) and ingredients from this department
+ link/Button to Recipes Calendar Screen

#### Directions Screens
is a separated screen that display only step-by-step information about how to prepare a meal

Simple list with data adn with order number of steps.

#### Dry Goods Screen
is an example of how shopping list looks like
where all ingredients grouped by only one department.

#### Login
Is a page with login form that user canuse to login inside the app

#### Side Menu
is a feature that will help users to navigate between screens
Menu items is negotiable, but let's keep links from screenshot that we have
At first time we'll populate that links from js array.

#### Weekly Menu
is a list with recipes with basic data

It have weekday
recipe title
recipe description
+ link to recipe details page


#### Recipe Detais Screen
it's a page where we'll display all information about recipes
Data will be requested from our API Server later
it have a few basic sections
also can contain buttons,
other form elements in next releases too.

#### Recipes Calendar
It's a just list (for now)
each item contain weekday name
and list of recipe/recipes(use loop), attached to this date.


#### Grocery List settings
It's a page that containting form where you can configurate grocery list GroceryListSettings
Usually it's not an important page.
But it good for unusual cases.

It's a list with recipes and form elements
which help you to configurate it.

main feature -> enable/disable recipe inside GL(usually all recipes from weekly menu is enabled)
And number of servings per recipe.
Like usually you're preparing meals for 3 persons, but at Holiday you'll have friends and want to understand how much ingredients you should purchase for that day.
