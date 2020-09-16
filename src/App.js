import React from 'react';
import {Terminal} from "src/components/terminal";
import clsx from "clsx";
import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles(() => ({
    root: {
        position: "absolute",
        width: "100vw",
        bottom: "0px",
        top: "10px",
        overflow: "auto",
    }
}));

function App() {
    const classes = useStyles();

    return (
        <div className={clsx(classes.root)}>
            <Terminal/>
        </div>
    );
}

export default App;
