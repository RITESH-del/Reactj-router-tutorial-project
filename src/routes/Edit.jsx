import { Form, useLoaderData, redirect, useNavigate } from "react-router-dom";
import { updateContact } from "../contact";

export async function action({request, params}) { //formData, formEnteries and
    const formData = await request.formData(); //access the form data from form element
    const updates = Object.fromEntries(formData); // Collects all the formData as objects
    await updateContact(params.contactId, updates); // send this to the updateContact() func in contact.js
    return redirect(`/contacts/${params.contactId}`); // So, when the function execute it redirects the action to '/contacts/:contactId' routes, 
}

export default function EditContact() {
  const { contact } = useLoaderData();
  const navigate = useNavigate();


  return (
    <Form method="post" id="contact-form">
      <p>
        <span>Name</span>
        <input
          placeholder="First"
          aria-label="First name"
          type="text"
          name="first"
          defaultValue={contact?.first}
        />
        <input
          placeholder="Last"
          aria-label="Last name"
          type="text"
          name="last"
          defaultValue={contact?.last}
        />
      </p>
      <label>
        <span>Twitter</span>
        <input
          type="text"
          name="twitter"
          placeholder="@jack"
          defaultValue={contact?.twitter}
        />
      </label>
      <label>
        <span>Avatar URL</span>
        <input
          placeholder="https://example.com/avatar.jpg"
          aria-label="Avatar URL"
          type="text"
          name="avatar"
          defaultValue={contact?.avatar}
        />
      </label>
      <label>
        <span>Notes</span>
        <textarea
          name="notes"
          defaultValue={contact?.notes}
          rows={6}
        />
      </label>
      <p>
        <button type="submit">Save</button>
        <button type="button"
        onClick={() =>{
          navigate(-1)
        }}>Cancel</button>
      </p>
    </Form>
  );
}
