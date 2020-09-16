import React from 'react';
import {Terminal} from "src/components/terminal";
import clsx from "clsx";
import './App.css';
import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles(() => ({
    root: {
        padding: "10px",
        position: "absolute",
        width: "100%",
        top: "30px",
        bottom: "0",
        overflow: "auto",
    }
}));

function App() {
    const classes = useStyles();

    const toggleFullScreen = () => {
        alert("Clicked full screen")
    };

    const toggleMinimized = () => {
        alert("Clicked minimize")
    };

    return (
        <div className={clsx(classes.root, "App")}>
            <Terminal onToggleFullScreen={toggleFullScreen}
                      onToggleMinimized={toggleMinimized}/>
        </div>
    );
}

export default App;
