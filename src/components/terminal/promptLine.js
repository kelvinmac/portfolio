import React, {useState, useRef} from "react";
import clsx from "clsx";
import {makeStyles} from "@material-ui/styles";
import ContentEditable from 'react-contenteditable'
import uuid from 'react-uuid'

const useStyles = makeStyles(() => ({
    root: {
        marginTop: "1em"
    },
    promptSymbol: {
        color: "#C616B8",
        marginRight: "6px",
        fontWeight: "bold"
    },
    rootWord: {
        color: "#E7FE40",
        marginRight: "6px"
    },
    tilde: {
        display: "block",
        color: "#42C4D1"
    },
    promptLine: {
        fontSize: "15px",
    },
    input: {
        outline: "none",
        border: "none",
        display: "inline-block"
    }
}));

const PseudoPromptLine = ({command}) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <span className={classes.promptLine}>
                <span className={classes.rootWord}>root</span>
                <span className={classes.promptSymbol}>$</span>

                <span className={classes.input}>{command}</span>
            </span>
        </div>
    )
};

const PromptLine = ({className, addHistory, clearHistory}) => {
    const classes = useStyles();
    const [command, setCommand] = useState("");
    const inputRef = useRef();

    const commandChanged = (event) => {
        const {value} = event.target;
        setCommand(value);
    };

    const onKeyPressed = (event) => {
        const {key} = event;
        if (key !== 'Enter') return;

        var cmd = inputRef.current.innerHTML;

        addHistory(<PseudoPromptLine key={uuid()} command={cmd}/>);
        setCommand('');
        event.preventDefault();
    };

    const onClick = () => {
        inputRef.current.focus();
    };

    return (
        <div className={clsx(classes.root, className)} onClick={onClick}>
            <span className={classes.promptLine}>
                <span className={classes.rootWord}>root</span>
                <span className={classes.promptSymbol}>$</span>

                <ContentEditable
                    innerRef={inputRef}
                    html={command}
                    disabled={false}
                    onChange={commandChanged}
                    onKeyDown={onKeyPressed}
                    className={classes.input}
                />
            </span>
        </div>
    )
};

export default PromptLine;
