import React, {useState, useRef} from "react";
import {makeStyles} from "@material-ui/styles";
import ContentEditable from 'react-contenteditable'

const useStyles = makeStyles(() => ({
    promptSymbol: {
        color: "#C616B8",
        marginRight: "6px",
        fontWeight: "bold"
    },
    root: {
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

const Prompt = ({className, addHistory, ...rest}) => {
    const classes = useStyles();
    const [command, setCommand] = useState("");
    const inputRef = useRef();

    const commandChanged = (event) => {
        const {value} = event.target;
        setCommand(value);
    };

    const onClick = () => {
        inputRef.current.focus();
    };

    return (
        <div onClick={onClick}>
            <span className={classes.tilde}>~</span>
            <span className={classes.promptLine}>
                <span className={classes.root}>root</span>
                <span className={classes.promptSymbol}>$</span>

                <ContentEditable
                    innerRef={inputRef}
                    html={command}
                    disabled={false}
                    onChange={commandChanged}
                    className={classes.input}
                />
            </span>
        </div>
    )
};

export default Prompt;
