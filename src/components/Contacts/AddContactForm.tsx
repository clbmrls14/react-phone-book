import React, { useState } from "react";
import { ConfirmationDialog } from "../General/ConfirmationDialog";


interface Props {
    addContact(contact: Contact): void; 
};


export const AddContactForm = ({ addContact }: Props) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [dialogVisible, setDialogVisible] = useState(false);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        setDialogVisible(true);
    };

    const confirmAddContact = () => {
        let newContact: Contact = {firstName, lastName, phoneNumber};
        addContact(newContact);

        setFirstName('');
        setLastName('');
        setPhoneNumber('');
        setDialogVisible(false);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label className="Input-label">
                        First Name: 
                        <input 
                            type="text" 
                            className="Text-input"
                            value={firstName} 
                            onChange={(e) => setFirstName(e.target.value)} 
                        />
                    </label>
                </div>
                <div>
                    <label className="Input-label">
                        Last Name: 
                        <input 
                            type="text" 
                            className="Text-input"
                            value={lastName} 
                            onChange={(e) => setLastName(e.target.value)} 
                        />
                    </label>
                </div>
                <div>
                    <label className="Input-label">
                        Phone Number: 
                        <input 
                            type="text" 
                            className="Text-input"
                            value={phoneNumber} 
                            onChange={(e) => setPhoneNumber(e.target.value)} 
                        />
                    </label>
                </div>
                <div>
                    <button 
                        type="submit"
                        className="Button" 
                        title="Add Contact"
                    >
                        Add Contact
                    </button>
                    <ConfirmationDialog 
                        open={dialogVisible}
                        title="Add Contact?"
                        message={`Are you sure you want to add ${firstName} ${lastName}to your phone book?`}
                        confirm="Add contact"
                        cancel="Cancel"
                        onConfirm={confirmAddContact}
                        onCancel={() => setDialogVisible(false)}
                    />
                </div>
            </form>
        </div>
    );
};