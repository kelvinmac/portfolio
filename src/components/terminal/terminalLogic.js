import React from "react";
import {makeStyles} from "@material-ui/styles";
import uuid from 'react-uuid'

const useStyles = makeStyles(() => ({
    root: {
    },
    invalidCommandLine: {
        fontSize: "14px",
    },
    invalidCmd: {
        color: '#ff3d00',
        display: 'inline',
        fontStyle: 'italic'
    }
}));

export class TerminalLogic {
    classes = useStyles();

    handleCommand(command) {
        return (
            <p key={uuid()} className={this.classes.invalidCommandLine}>
                Error: Invalid Command: <p className={this.classes.invalidCmd}>{command}</p>
            </p>
        )
    }
}

