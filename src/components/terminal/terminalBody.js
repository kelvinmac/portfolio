import React, {useState} from "react";
import PromptLine from "src/components/terminal/promptLine";
import {makeStyles} from "@material-ui/styles";
import uuid from 'react-uuid'

const useStyles = makeStyles(() => ({
    prompt: {},
    introText: {
        fontSize: "10px"
    },
    bodyText: {
        margin: 0
    },
    terminalLine: {}
}));

const TerminalBody = ({className, ...rest}) => {
    const classes = useStyles();

    const [history, setHistory] = useState([
        <small className={classes.introText} key={uuid()}> Last login: Wed May 15 10:58:49</small>,
        <p className={classes.bodyText} key={uuid()}> Type 'help' to get started. </p>
    ]);

    const addHistory = (historyItem) => {
        setHistory((prevState) => ([
            ...prevState,
            historyItem
        ]));
    };

    const clearHistory = () => {
        setHistory(() => []);
    };

    return (
        <div className={className}>
            {history}
            <PromptLine addHistory={addHistory} clearHistory={clearHistory} className={classes.prompt}/>
        </div>
    )
};

export default TerminalBody;