import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root, {loader as rootLoader, action as rootAction } from './routes/root'; 
import ErrorPage from './error-page';
import Contact, {loader as contactLoader} from './contact.jsx';
import EditContact, {action as editAction} from './routes/Edit.jsx';
import './index.css';

const router = createBrowserRouter([{  //createBrowserRouter updates the URL and maintain the history stack.
  path : '/',
  element : <Root />,
  errorElement: <ErrorPage />, //It redirect the page to the errorPage on error
  loader: rootLoader, // loader function from root.jsx, react router uses a loader func and useLoaderData api to get data into ur routes easily,
  action: rootAction, // create new contacts, on submiting data in the HTML form element
  children:[{
    path: 'contacts/:contactId',
    element: <Contact />,
    loader: contactLoader, // for loading contacts
      },
      {
      path: '/contacts/:contactId/Edit',
      element: <EditContact />,
      loader: contactLoader,
      action: editAction,
    },
    ],
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
