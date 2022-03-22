import React from "react";
import { ContactItem } from "./ContactItem";
import { SearchBar } from "./SearchBar";

export const ContactList = () => {
    let times: number[] = [1,2,3];

    return (
        <div>
            <h1>Contacts</h1>
            <SearchBar />
            {
                times.map((_) => (
                    <ContactItem />
                ))
            }
        </div>
    );
}