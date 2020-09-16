import React, {useState} from "react";
import Prompt from "src/components/terminal/prompt";
import {makeStyles} from "@material-ui/styles";
import uuid from 'react-uuid'

const useStyles = makeStyles(() => ({
    prompt: {}
}));

const TerminalBody = ({className, ...rest}) => {
    const classes = useStyles();

    const [history, setHistory] = useState([
        <small key={uuid()}> Last login: Wed May 15 10:58:49</small>,
        <p key={uuid()}> Type 'help' to get started. </p>
    ]);

    return (
        <div className={className}>
            {history}
            <Prompt addHistory={setHistory} className={classes.prompt} />
        </div>
    )
};

export default TerminalBody;