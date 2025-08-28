# Tutorial Summary

* #### Write a summary of the project of what u did in this tutorial with screenshots and examples in it.
  >First, I added a routes directory with root.jsx to create the root route `/` and added it to the main.jsx createBrowserRoutes() which updates the url and maintains the history stack. Then, i added contact.js file in the src directory. This file has functions(getContacts, createContact, editContacts) that handles client side requests from the Form API in react-router-dom. 

  >Inside the `src/route/Edit.jsx` component `<Form>` element generate `FormData` object on submition. And send it to `action` route that calls the `createContact` function to create a new contact. Added use navigation hook inside root.jsx to show pending UI during root changes.


  ___Remember:___ Without JavaScript, when a form is submitted, the browser will create FormData and set it as the body of the request when it sends it to the server. As mentioned before, React Router prevents that and sends the request to your action instead, including the FormData.


* ___with react routes we first create a component and then wire it up to the route config___

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


* ___What technologies/API are used in this project, that i need to study ?___
  >Fetch API,  localforage, sortby, matchsorter