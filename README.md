# frontend repo for Chicken Kyiv project.

this is not completed document, will be updated soon

#### Intro
CK is a short name for ChickenKyiv Project.

Main Idea to replicate nomoretogo.com & planitdinner.net websites functionality by using newest technologies.
You can see how this similar project looks on this videos
https://www.youtube.com/watch?v=mZOuQEhuT6Y&t=1s
https://www.youtube.com/watch?v=nScWVGSTAaI

## Basic users flow(next stages only)
check BasicFlow.md



## Notes

We'll start from using Create React App()

If you need more details our guidance about how to work with React - please let me know.

Static data, aka json arrays will provided later, so you don't need to create it by self.

Homepage basic layout will be provided later.

## Important Notes
Use Sentry Releases to ship better code
Use git flow so we'll not intersect between developers
Use PR for pushing your code into master and I'll be a reviewer
Use bin-flow
For making react components ready for cross-projects we'll use Bit.
We'll use Jest + Enzyme for tests
We'll use Netlify in order to have ability review our pages online
We'll use Travis CI for setting up tests coverage
Send API calls to server. @TODO share with team API endpoints. for making calls use Axious.
For subscription service we'll use Paddle.js

Each component should looks simple and understandable
we should use ReactStrap.
You should create and maintain documentation

## Big functionality topics to cover
Calendar
Weekly menu
Auth
Recipe
Grocery list
Expenses
Nutrition
Food tracking or Food logging
Search
Recipe
Tips


Account system(basic user profile section)
Email Notifications
Send grocery list to email
Share your grocery list
CRUD Departments, Ingredients, Measurements, Recipes, Grocery Lists
Import data from Excel File
ACL, ACL for users(user cannot edit ingredients, that he don't own)

## List of Milestones

- Free menu recipes
- Weekly menu
- Grocery List
- Authentication
- Payments
- Search
- Import recipe
- Recipe Service Final Release



## Database visuals
This is a db schema between Free Menu Release and Weekly Menu Release with some
![db schema](https://github.com/ChickenKyiv/creative/blob/master/Recipe-ChickenKyiv-Release%231%20Schema%20%20%20SqlDBM.png)


## List of pages




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



#### Account + Subscription Payments
check account.md


## Sitemaps

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

Also some data you can check at Sitemap-export.pdf file in repository root
