## React Interview Assignment

An React application that will be used as a starting guide for candidates to implement the assignment.

To confirm the application can run, after cloning it and installing the dependencies (via yarn), run npm start and go to http://localhost:3000 to confirm it can run. Feel free to delete the existing code when making the implementation

## The Application Scenario

We would like a simple application to order a pizza.

* The default page would allow the user to select between Pick Up or Delivery
* Once selected, the app should load the 5 types of pizza we offer (Picture not required)
  * Chonky Chicken 10$
  * Beef Barbeque 12$
  * Hawking Hawaiian 10$
  * Margeret's Margherita 8$
  * Vegan Villa Vista 8$
* Selecting a pizza should give the user a few options:
  * Select the size (Small, Medium, Large)
  * Select if they would like extra cheese (Yes or No)
  * Select the quantity
* The user is allowed to select multiple pizzas
* The user is also allowed to remove pizzas
* Once the order is complete they can proceed to checkout
* The checkout should display a summary of their order including the pizzas'
  * Sizes
  * Cheese
  * Quantity
  * Total price
  * And method of delivery
* Have a button to confirm the user order which will thank the user before redirecting them to the main page
* And another button that cancels the order and goes straight back to the main page
* If the user navigates to unknown pages (Such as writing on the URL), redirect them to a generic "Page not found"

## Points

Some things we would be looking out for in the app are:

* Familiarity with using React and it's functionality
* Project/code structure and uniformity
* Dynamically fetching and displaying content
* Clearly defined models and it's usage
* Usage of Service, React-Router, Redux and unit testing
* Styling would be a great plus but concentrate on getting a functioning app first

## Dependencies

The project was originally generated via ng generate so a majority of dependencies involve those generally shipped with react

* YARN
* React
* Bootstrap
* Jest and Enzyme (for testing)

You can find the dependency list in the package.json and free to add any dependency that you want.

## Requirements

* Implement the project scenario highlighted above
* Have the relevant test cases to ensure functionality
* Take advantage of React-Router, Redux  to display content

## Submission

We prefer to have your submission via [Pull Request][1] which will demonstrate your git practice. Alternatively you can also submit via email or cloud storage.

[1]: https://github.com/pos-my/react-interview/pulls
