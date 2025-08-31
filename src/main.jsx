import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root, {loader as rootLoader, action as rootAction } from './routes/root'; 
import ErrorPage from './error-page';
import Contact, {loader as contactLoader, action as contactAction} from './contact.jsx';
import EditContact, {action as editAction} from './routes/Edit.jsx';
import {action as destroyAction} from './routes/destroy.jsx';
import Index from './routes/index.jsx';
import './index.css';

const router = createBrowserRouter([{  //createBrowserRouter updates the URL and maintain the history stack.
  path : '/',
  element : <Root />,
  errorElement: <ErrorPage />, //It redirect the page to the errorPage on error
  loader: rootLoader, // loader function from root.jsx, react router uses a loader func and useLoaderData api to get data into ur routes easily,
  action: rootAction, // create new contacts, on submiting data in the HTML form element
  children:[
    {errorElement: <ErrorPage />, //here, errorElement is the Pathless route for every children element
    children:[
    {index: true, element: <Index />},
    {
    path: 'contacts/:contactId',
    element: <Contact />,
    loader: contactLoader, // for loading contacts
    action: contactAction,
      },
      {
      path: '/contacts/:contactId/Edit',
      element: <EditContact />,
      loader: contactLoader, // for loading the editpage
      action: editAction, // for updating contacts
    },
    {
      path: '/contacts/:contactId/destroy',
      action: destroyAction,
      errorElement: <div>Oops! there war an error.</div>
    },
    ],
  }]},
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
