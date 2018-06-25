import mongoose from 'mongoose';
import { ContactSchema } from '../models/crm';

const Contact = mongoose.model('Contact', ContactSchema);

export const addNewContact = (req, res, next) => {
    let newContact = new Contact(req.body);

    newContact.save((err, contact) => {
        if (err) {
            console.log("Error", err);
            res.status(500).json({ message: 'Internal Server Error from addNewContact' });
        }

        res.json(contact);
    });
};

export const getContacts = (req, res, next) => {
    Contact.find((err, contacts) => {
        if (err) {
            console.log("Error", err);
            res.status(500).json({ message: 'Internal Server Error from addNewContact' });
        }

        res.json(contacts);
    });
};

export const getContactById = (req, res, next) => {
    Contact.findById(req.params.contactId, (err, contact) => {
        if (err) {
            console.log("Error", err);
            res.status(500).json({ message: 'Internal Server Error from addNewContact' });
        }

        res.json(contact);
    });
};

export const updateContact = (req, res) => {
    Contact.findOneAndUpdate({ _id: req.params.contactId }, req.body, { new: true }, (err, contact) => {
        if (err) {
            console.log("Error", err);
            res.status(500).json({ message: 'Internal Server Error from addNewContact' });
        }

        res.json(contact);
    });
};

export const deleteContact = (req, res) => {
    Contact.findOneAndRemove({ _id: req.params.contactId }, { new: true }, (err, contact) => {
        if (err) {
            console.log("Error", err);
            res.status(500).json({ message: 'Internal Server Error from addNewContact' });
        }

        res.json(contact);
    });
};
