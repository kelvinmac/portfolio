import React from "react";
import uuid from 'react-uuid'

export const handleDirectoryCommand = (command, ...args) => {
    return(
        <p key={uuid()}>
            change directory
        </p>
    )
};

export const handleListDirectory = (command, ...args) => {
    return(
        <p key={uuid()}>
            list directory
        </p>
    )
};
