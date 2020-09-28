import React from "react";
import {makeStyles} from "@material-ui/styles";
import commandsMap from './commands'
import uuid from 'react-uuid'

const useStyles = makeStyles(() => ({
    root: {},
    invalidCommandLine: {
        fontSize: "14px",
        padding: '6px'
    },
    invalidCmd: {
        color: '#ff3d00',
        display: 'inline',
        fontStyle: 'italic'
    }
}));

export class TerminalLogic {
    classes = useStyles();

    handleCommand(userInput) {
        const [command, ...args] = userInput.split(' ');

        if (commandsMap.has(command)) {
            const f = commandsMap.get(command);
            return f(command, ...args)
        }

        return (
            <span key={uuid()} className={this.classes.invalidCommandLine}>
                Error: Invalid Command: <p className={this.classes.invalidCmd}>{userInput}</p>
            </span>
        )
    }
}

