# React Frontend repository for ChickenKyiv project.

This is not completed document, will be updated soon

#### Intro
CK is a short name for ChickenKyiv Project.

Main Idea to replicate nomoretogo.com & planitdinner.net websites functionality by using newest technologies.
You can see how this similar project looks on this videos
- https://www.youtube.com/watch?v=mZOuQEhuT6Y&t=1s
- https://www.youtube.com/watch?v=nScWVGSTAaI


## List of Milestones

- Free menu recipes
- Weekly menu
- Grocery List
- Authentication
- Payments
- Search
- Import recipe
- Recipe Service Final Release


## Basic users flow(next stages only)
check BasicFlow.md


## Notes

We'll start from using [Create React App](https://github.com/facebook/create-react-app)

If you need more details our guidance about how to work with React - please let me know.

Static data, aka json arrays will provided later, so you don't need to create it by self.

Homepage basic layout will be provided later.

## Important Notes
- We'll use [Sentry Releases](https://docs.sentry.io/learn/releases/) to ship better code
- We'll use [git-flow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow) so we'll not intersect between developers
- We'll use PR for pushing your code into master and I'll be a reviewer
- We'll use [bin-flow](https://github.com/facebook/flow)
- For making react components ready for cross-projects we'll use [Bit](https://bitsrc.io/).
- We'll use [Jest + Enzyme for tests](https://facebook.github.io/jest/)
- We'll use [Netlify](https://www.netlify.com/) in order to have ability review our pages online
- We'll use [Travis CI](http://travis-ci.org) for setting up tests coverage
- Send API calls to server. @TODO share with team an API endpoints. for making calls use Axious.
- For subscription service we'll use [Paddle.js](https://paddle.com/docs/paddle-js-overlay-checkout/)

- Each component should looks simple and understandable
- We should use [ReactStrap](https://reactstrap.github.io/) components for faster development process
- You should create and maintain documentation [GitBook](https://www.gitbook.com/)


## Free Menu Release

free-menu functionality
You’ll display 5–6 recipes for a week, with additional data.
Later you’ll use Recipe API server for fetching data

For a first stage - we'll not use connection to API. we'll grab data from json arrays that i'll provide.

Pages:


- Login / sign-up
- Onboarding tour
- View Menu(recipes list)
- View Recipe data (Single recipe data)
   - Recipe information short/extended (limited for different purposes)
- View settings
- Profile
- Simple grocery list form with to-do checkboxes list.


#### Weekly Menu Part 1
- Meal plan types types(allergies free, gluten free, cooking for two, a family with kids(main option))
- Sample menus (Different types)
- Complex recipe
- Complex JSON parsing
- Grocery list from main JSON file
- Grocery list template 2 — long scroll-able list with all categories in one page (filter/search will be cool)
- Grocery list settings & Recipe calendar
- Weekly menu from main JSON file
- Intro with images
- Nutrition facts section for recipe details page
- Grocery list can automatically calculate same ingredients from one category from different recipes, from different days
- Servings can be changed in different recipes, different days and this changes might be applied to grocery list


#### Grocery List Milestone (a lot of work was done. So we don't need to start from scratch)

Inventory of all shopping lists.

Shopping/grocery
- Adding items (quantity, additional notes);
- Sorting items (alphabetically, from newest to oldest and vice versa);
- Marking items as "complete" or "incomplete”;
- Deleting items (delete one/all);
- Moving items (move items to another list, copy items).
- Suggestions
- Grocery List sharing

#### Authentication
- Facebook button
- Auth with tokens can be handled with help of our Recipe API.

#### Search Milestone
Partially done in another code repository (Advanced Search Form with API calls)
@TODO share information later

## Big functionality topics to cover later
- Calendar
- Weekly menu
- Auth
- Recipe
- Grocery list
- Expenses
- Nutrition information
- Food tracking or Food logging
- Search
- Recipe
- Cooking Tips


- Account system(basic user profile section)
- Email Notifications
- Send grocery list to email
- Share your grocery list
- CRUD Departments, Ingredients, Measurements, Recipes, Grocery Lists
- Import data from Excel File
- ACL, ACL for users(user cannot edit ingredients, that he don't own)





## Database visuals
This is a db schema between Free Menu Release and Weekly Menu Release with tables, related to Search Release
![db schema](https://github.com/ChickenKyiv/creative/blob/master/Recipe-ChickenKyiv-Release%231%20Schema%20%20%20SqlDBM.png)


## List of pages






#### Account + Subscription Payments
check account.md


## Sitemaps

Also some data you can check at Sitemap-export.pdf file in repository root

- Simple Subscription Flow
![Simple Subscription Flow](https://github.com/ChickenKyiv/creative/blob/master/schemes-sitemaps/099a7735f717498faaa8731f55654fa7.png)

- Simple Structure of Recipe component
![Simple Structure of Recipe component](https://github.com/ChickenKyiv/creative/blob/master/schemes-sitemaps/25c30222db7c453599438292bd469fc6.png)

- Simple sitemap for pages
![Simple sitemap for pages](https://github.com/ChickenKyiv/creative/blob/master/schemes-sitemaps/b9e3a0b6e8444c6f86a99342ae90030f.png)

- Free menu relese structure
![Free menu relese structure](https://github.com/ChickenKyiv/creative/blob/master/schemes-sitemaps/c0ae724e5d2a4635ab5994821ac88e95.png)

- Release 0 of our project(pages/components
![Release 0 of our project(pages/components)](https://github.com/ChickenKyiv/creative/blob/master/schemes-sitemaps/b33e2daee0cb4c1e9f27c4fc3399ff0d.png)

- Whole Structure of our project
![Whole Structure of our project](https://github.com/ChickenKyiv/creative/blob/master/schemes-sitemaps/25c30222db7c453599438292bd469fc6.png)
