import React from "react";
import { ContactItem } from "./ContactItem";


interface Props {
    contacts: Contact[];
};


export const ContactList = ({ contacts }: Props) => {
    return (
        <div>
            {
                contacts.map((contact: Contact) => (
                    <ContactItem contact={contact} key={contact.phoneNumber}/>
                ))
            }
        </div>
    );
};