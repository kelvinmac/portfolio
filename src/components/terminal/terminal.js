import React, {useState} from "react";
import clsx from "clsx";
import {makeStyles} from "@material-ui/styles";
import TerminalBody from "src/components/terminal/terminalBody";

const userStyles = makeStyles(() => ({
        root: {
            textAlign: "left",
            width: "600px",
            height: "360px",
            borderRadius: "15px",
            margin: "auto",
            position: "relative",
            display: "block",
            top: "25vh",
            transition: "all 0.5s ease",

        },
        terminalHead: {
            background: "black",
            height: "30px",
            borderRadius: "6px 6px 0 0",
            paddingLeft: "10px",
            border: "1px solid #373737",
            borderBottom: "none"
        },
        terminalBody: {
            color: "white",
            fontFamily: "Menlo, Monaco, \"Consolas\", \"Courier New\", \"Courier\"",
            fontSize: "11pt",
            background: "black",
            padding: "10px",
            boxSizing: "border-box",
            position: "absolute",
            width: "100%",
            top: "30px",
            bottom: "0",
            borderRadius: "0 0 6px 6px",
            overflow: "auto",
            border: "1px solid #373737",
            borderTop: "none"
        },
        fullScreen: {
            zIndex: "9999",
            width: "99vw",
            height: "98vh",
            top: "0",
            left: "0",
        },
        button: {
            width: "12px",
            height: "12px",
            margin: "10px 4px 4px",
            display: "inline-block",
            borderRadius: "8px"
        },
        btnRed: {
            background: "#FF5F59",
            cursor: "not-allowed"
        },
        btnYellow: {
            background: "#FFBE2D",
            cursor: "pointer"
        },
        btnGreen: {
            background: "#28CA42",
            cursor: "pointer"
        }
    }))
;
const Terminal = () => {
    const classes = userStyles();
    const [fullScreen, toggleFullScreen] = useState(false);

    const onToggleFullScreen = () => {
        toggleFullScreen((prevState => !prevState))
    };

    const onToggleMinimized = () => {

    };

    return (
        <div className={clsx(classes.root, fullScreen && classes.fullScreen)}>
            <header className={classes.terminalHead}>
                <div className={clsx(classes.btnRed, classes.button)}/>
                <div className={clsx(classes.btnYellow, classes.button)} onClick={onToggleMinimized}/>
                <div className={clsx(classes.btnGreen, classes.button)} onClick={onToggleFullScreen}/>
            </header>

            <TerminalBody className={classes.terminalBody}/>
        </div>
    )
};

export default Terminal;