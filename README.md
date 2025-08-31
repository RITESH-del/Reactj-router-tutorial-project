# Tutorial Summary

* #### Write a summary of the project of what u did in this tutorial with screenshots and examples in it.
  >First, I added a routes directory with root.jsx to create the root route `/` and added it to the main.jsx createBrowserRoutes() which updates the url and maintains the history stack. Then, i added contact.js file in the src directory. This file has functions(getContacts, createContact, editContacts) that handles client side requests from the Form API in react-router-dom. 

  >Inside the `src/route/Edit.jsx` component `<Form>` element generate `FormData` object on submition. And send it to `action` route that calls the `createContact` function to create a new contact. Added use navigation hook inside root.jsx to show pending UI during routes changes.

  ___Remember:___ Without JavaScript, when a form is submitted, the browser will create `FormData` and set it as the body of the request when it sends it to the server. As mentioned before, React Router prevents that and sends the request to your `action` instead, including the FormData.

  > used `useNavigate` hook for cancel button on `edit.jsx`,So, that when the user clicks "Cancel", they'll be sent back one entry in the browser's history. as shown below:

  ```{javascript}
  const navigate = useNavigate(); // useNavigate hook as navigate

  <button onClick={() =>{
          navigate(-1) //send the user one entry back on clicking the button
        }}>Cancel</button>
  ```

  > u can create a simple search bar using the code below
  *  to change GET Submissions from SSR to client side rendering, just change `<form>` element with `<Form />`.
  
  ```{html}
  <form id="search-form" role="search"> // to change GET Submissions from SSR to client side rendering, just change <form> element with <Form />
  <input
    id="q"
    aria-label="Search contacts"
    placeholder="Search"
    type="search"
    name="q"
  />
  <div id="search-spinner" aria-hidden hidden={true} />
  <div className="sr-only" aria-live="polite"></div>
  </form>
  ```
  > when we enter a name into the search field and hit the enter key. Note the browser's URL now contains your query in the URL as URLSearchParams: `http://127.0.0.1:5173/?q=ryan`.

  > then, i added a loader to `routes/root.jsx` file to Filter the list if there are URLSearchParams

 * ___Adding the search spinner:___
  ```{javascript} 
  const searching =
    navigation.location && //ensures that location object exist inside navigation
    new URLSearchParams(navigation.location.search).has(
      "q"
    ); 
    // Checks if the query string has a parameter named "q".Returns true if present, otherwise false.

  ```



---
### For further clarification:
When the user clicks the submit button:

1. `<Form>` prevents the default browser behavior of sending a new POST request to the server, but instead emulates the browser by creating a POST request with client side routing.
2. The `<Form action="destroy">` matches the new route at "contacts/:contactId/destroy" and sends it the request
3. After the action redirects, React Router calls all of the loaders for the data on the page to get the latest values (this is "revalidation"). useLoaderData returns new values and causes the components to update!

Add a form, add an action, React Router does the rest.

---
### Concise Summary

* ___with react routes we first create a component and then wire it up to the route config___

* ___u can create a defaultChild route in the routes directory namely, `index.jsx` and add it to children inside the `createBrowserRouter`. These defaultChild routes are called index routes. and they have no path. Syntrax: `{index: true, element: <Index />},`.___

* ___useNavigate() hook is used to send user backward or forward the browser history stack.___
* ___U can use `defaultValue={}` attribute in input form to set a defaultValue.___
  
*   ___For filtering (Or passing URLSearchparams) on every key stroke, instead of when the form is explicitly submitted. u can use useSubmit() hook with onChange eventhandler.___
  ```{javascript} 
  const submit = useSubmit(); //submit object
<input onChange={(event) => {
          submit(event.currentTarget.form);}} />
  ```
> Note the argument to submit. We're passing in event.currentTarget.form. The currentTarget is the DOM node the event is attached to, and the currentTarget.form is the input's parent form node. The submit function will serialize and submit any form you pass to it.

* the replace option in a form submission (or when using navigate) controls how the new URL is stored in the browser’s history stack
```{javascript}
<input role='search' 
onChange={(event) => {
    submit(event.currentTarget.form,  { // So, the URL will only be made when the user presses the Enter key
    replace: !isFirstSearch, // it controls how the new URL is stored in the browser history stack.
                }); />

```
* ___We only want to replace search results, not the page before we started searching, so we do a quick check if this is the first search or not and then decide to replace.___

* ___the `useFetcher` hook allows us to communicate with loaders and actions without causing a navigation. it make sense. When we aren't creating or deleting a new record, we don't want to change pages, we simply want to change the data on the page we're looking at.___
* One key difference b/w `<fetcher.Form method="post">` and `<Form>` is on submission. It's not a navigation--the URL doesn't change, the history stack is unaffected.
* u can use fetcher.formData immediately updates the star state, before, it is logged in the server. This strategy is called Optimistic UI.
* Whenever you have an expected error case in a loader or action–like the data not existing–you can `throw`. The call stack will break, React Router will catch it, and the error path is rendered instead. We won't even try to render a null contact. This keeps your happy paths, happy. Your route elements don't need to concern themselves with error and loading states.
* ___Instead of specifying errorElement in every children. we can use `Pathless routes`. u can call it as best practices.___
*  many folks prefer to configure their routes with JSX. You can do that with createRoutesFromElements. There is no functional difference between JSX or objects when configuring your routes, it's simply a stylistic preference.
---

### Questions
* ___What is a Dynamic Segment ?___
  
  >Anything written after `:` a semicolon is a dynamic segement.  Dynamic segments will match dynamic (changing) values in that position of the URL, like the contact ID. We call these values in the URL "URL Params", or just "params" for short. example `/contacts:contactId`. U can also add urlparams in loaders.

* ___Why use `<Link>` tag instead of `<a>` tag ?___

  > `<Link>` tag is used to load data when the page mounts, meanwhile, when `<a>` is used the entire page/ application gets reloaded, on fetching data

* __What's the difference b/w HTML form and Form API ?__
   
  > HTML form element uses POST method for sending request body and GET method to request for URLSearchParams directly to the server. But, the Form API in react-router-dom uses client side routing and send it to a route ___action___.

* ___When to use HTML form and Form API from react-router-dom ?___

  > Use HTML form to POST/Create data in the server Or Get/Retrieve URLSearchParams or data. And Use Form API to render client side changes. like adding form data in a list view. 

* ___What does a loader function and setLoaderData API from react-router-dom used for ?___

  > loaders and setLoaderData API's are data conventions, used to get data easily into routes.

* ___What is the function of loaders and `setLoaderData()` API?___
  > loaders are basically imported in the main.jsx from the root.jsx files as functions that contains JSON data. Or A loader is a function that fetches data before rendering a route.It runs when the route is matched and provides data to the component through useLoaderData(). And `setLoaderData()` API Updates loader data without reloading.

* ___What is the difference b/w a loader and action ?___
    >

* ___What is the function of `redirect` API from react router dom ?___
  > `redirect` API is used to redirects to another routes, in loaders and action. 

* ___What is `<NavLink>` API in react-router-dom? And When to use it ?___
  >A `<NavLink>` is a special kind of `<Link>` that knows whether or not it is "active", "pending", or "transitioning". This is useful in a few different scenarios:
  * When building a navigation menu, such as a breadcrumb or a set of tabs where you'd like to show which of them is currently selected
  * It provides useful context for assistive technology like screen readers
  * It provides a "transitioning" value to give you finer-grained control over view transition.

* ___When to use of useNavigation hook ?___
  >In React, useNavigation hook is used to handle page navigation. useNavigation gives you access to the navigation object without passing it down as a prop. 

  Use it when:

   * You’re inside a child component that doesn’t directly receive the navigation prop.

   * You want to navigate programmatically (navigate, goBack, push, etc.).

   * You want to customize header buttons or trigger navigation from non-screen components.

  >In react-router, useNavigation is different—it lets you track the navigation state (loading, submitting, idle) when using data APIs like loaders and actions.

  Use it when:

   * You want to show a loading spinner or pending UI during route changes.

* ___What is a query string ?___
  > the part of the url after ?, it is used for searching (GET submission and URLSearchParams).

* ___What is Optimistic UI strategy ?___
  > Optimistic UI is a technique where the app immediately updates the UI as if an action succeeded, before getting confirmation from the server.The user sees instant feedback. Later, when the server responds, the UI either stays the same (if success) or rolls back / shows an error (if failure). It’s called optimistic because the UI is optimistic that the server will succeed.
```{javascript} 
//For Example, contact.jsx

  const favorite = fetcher.formData  //here, fetcher.formData immediately updates the star state, before, it is logged in the server
    ? fetcher.formData.get("favorite") === "true"
    : contact.favorite;

```
* ___What technologies/API are used in this project, that i need to study ?___
  >Fetch API,  localforage, sortby, matchsorter