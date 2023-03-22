
# react-fetchUsers

This project was built using core react fundamentals.


## Folder Structure 

This project consists of mainly three source files and one assets folder.
1. App.js - The brain for this project, handles all the required logic and renders the data.
2. index.css - It has all the styling for the components.
3. index.js - Takes care of mounting and unmounting of components.
4. ./assets/loader.gif - loader gif.
## Steps Involved

1. Create react app using npx create-react-app.
2. Remove all the unnecessary files and subdirs.
3. Go to App.js and import the required hooks (useEffect and useState).
4. Set API to a constant named URL.
5. Set states for loader and user's data.
6. Initial state fot loader is set to be false and the user's data is set to be an empty array(before fetching).
7. Create an async function and make a get request to the URL by using fetch, convert all the data into json format so that it can be readable by the browser on the client side.
8. Make sure to show the loading gif(free to use .gif file)/loader by using useState hook while the fecth request is pending.
9. Once the request is completed, set the loader state back to false and set the user's data to the required API data(email, first name and last name).
10. Create a grid navbar and a hero section to display the user's data.
11. Add the async function for the onClick event to cta button Get Users.
12. Check for loading state, show the loader if the loading state is true, and show the data when it is false.
13. To render the user data map over the API data(array) and use key property to keep a track of it.
14. Use npm run start to lauch the react web application.
## API Reference

#### Get all users

```http
  GET https://reqres.in/api/users?page=1
```
*NO API KEY IS REQUIRED FOR THIS CALL*


## Time Taken

The tought process was not that much tricky, it took me about 30 minutes to map out the whole project.
