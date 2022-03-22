import React from "react";
import { ContactList } from "./Contacts/ContactList";

import "./Home.css";

export const Home = () => {

    return (
        <div className="Home">
            <div className="Box Add-contact-panel">
                Add Contact
            </div>
            <div className="Box Contact-list-panel">
                <ContactList />
            </div>
        </div>
    )
};