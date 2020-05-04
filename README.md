# What's New?

This application was built with `create-react-app`.

### Set Up

Clone down this repo.

Because you don't want to be pushing your updates to this boilerplate repository, we're going to have to do a few things to get set up with your own repository.

1. On GitHub, create a new, empty repository and name it something like 'whats-new'.
2. Update the current remote (called "origin") so that it points at the URL of the repository you just created on GitHub. Read how to do this [here](https://help.github.com/en/articles/changing-a-remotes-url).
3. Once you've updated the remote, you should run `npm install`, commit, and then push your initial commit to your personal repository. You will need to use the `-u` flag when you push (like this: `git push -u origin master`).
4. Run `npm start` to start up your React server. (You will see errors!)

### Expectations / Rules

Build a React App that displays different categories of current news.

![what's new screenshot](./screenshots/whats-new.png)

We want to see good commit habits - atomic commits that log small, focused changesets.

### Iteration 0

Get set up (per the instructions above)!

We've provided a boilerplate for you to work with. Look through the file structure to get a sense of the app.

Notice that we have multiple stylesheets - one for each component. You are welcome to style this application however you'd like as long as it keeps the core functionality. We got you started with a little styling, but feel free to get creative. (Remember, though - most of your energy should be spent on learning React, not styling.)

### Iteration 1

Create a NewsContainer component, which will act as a container that renders each of our news articles. For now, the news articles being displayed will be "Local News". Figure out how to pass information from `App.js` to `NewsContainer.js`!

Then create a NewsArticle component. Each NewsArticle card will display: the image, the headline, the description, and the url (see the screenshot above for an idea).

In your NewsContainer component, create NewsArticle cards that have the information each needs to display properly.

**Test that your components are rendering correctly.**

### Iteration 2

Take a look at the `data` directory and inspect the other news data that is included.  There is an `entertainment.js`, `health.js`, `science.js`, and `technology.js` file.  Import the data and put it in `App's` state.  Create a Menu component that has navigation to display the different news articles.  When selecting a navigation link, it should display the relevant news articles in the NewsContainer component.  How can you reuse components?

**Add/Update any tests necessary.  Also add tests for mocking appropriate methods** 

### Iteration 3 (extension - do not attempt until iterations 0 - 2 are completed)

Add in the functionality so that a user can search through the news articles.  After a user has typed a search query, a user should either be able to press `Enter` or `Search` to filter out the correct news articles.  The search functionality should only filter through the selected news articles.

**Add/Update any tests necessary.  Remember to include tests for any appropriate new methods you have created** 

### Iteration 4 (extension - do not attempt until iterations 0 - 3 are completed)

Instead of importing the news data from the data directory, use the [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) to get the data.  Read this [article](https://www.robinwieruch.de/react-fetching-data) on where you should fetch your data in React.

Here is what the endpoint looks like to get the news data.

| Purpose | URL | Verb | Request Body | Sample Success Response |
|----|----|----|----|----|
| Get all news data | `https://whats-new-api.herokuapp.com/api/v1/news` | GET | none | `{"entertainment": [{}, {}, ...], "health": [{}, {}, ...], ...}` |

**Note: This will likely break some of your previous tests.  No worries, we will discuss testing async functionality in a future lesson.**
