import React, { useState } from "react";


interface Props {
    onSearch(searchString: string): void;
    placeholder: string;
};


export const SearchBar = ({ onSearch, placeholder }: Props) => {
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
                placeholder={placeholder}
                value={searchString}
                onChange={(e) =>  onInput(e.target.value)}
            />
        </div>
    );
};