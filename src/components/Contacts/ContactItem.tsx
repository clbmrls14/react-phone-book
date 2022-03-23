import React from "react";


interface Props {
    contact: Contact;
};


export const ContactItem = ({ contact }: Props) => {
    return (
        <div className="Contact-item">
            <div><strong>{contact.firstName} {contact.lastName}</strong></div>
            <div>{contact.phoneNumber}</div>
        </div>
    );
};