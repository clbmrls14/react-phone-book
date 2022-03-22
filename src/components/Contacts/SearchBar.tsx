import React, { useState } from "react";


interface Props {
    onSearch(searchString: string): void;
}


export const SearchBar = ({ onSearch }: Props) => {
    const [searchString, setSearchString] = useState('');

    const onInput = (input: string) => {
        setSearchString(input);
        onSearch(input);
    };

    return (
        <div>
            <input 
                type="text" 
                className="Text-input"
                placeholder="Search a contact"
                value={searchString}
                onChange={(e) =>  onInput(e.target.value)}
            />
        </div>
    );
}