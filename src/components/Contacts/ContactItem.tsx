import React from "react";


interface Props {
    contact: Contact;
}

export const ContactItem = ({ contact }: Props) => {
    return (
        <div className="Contact-item">
            <div><b>{contact.firstName} {contact.lastName}</b></div>
            <div>{contact.phoneNumber}</div>
        </div>
    )
};