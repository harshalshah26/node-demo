import {
    addNewContact,
    getContacts,
    updateContact,
    getContactById
} from '../controllers/crm';

const routes = (app) => {
    app.route('/contact')
        .post(addNewContact);

    app.route('/contacts')
        .get(getContacts);

    app.route('/contact/:contactId')
        .get(getContactById)
        .put(updateContact)
        .delete((req, res) => {
            res.json({ message: "DELETE Request Successful" });
        })
}

export default routes;