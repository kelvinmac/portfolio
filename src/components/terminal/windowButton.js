import {makeStyles} from "@material-ui/styles";
import clsx from "clsx";
import React from "react";

const useStyles = makeStyles(() => ({
    root: {
        width: "12px",
        height: "12px",
        margin: "10px 4px 4px",
        display: "inline-block",
        borderRadius: "8px",
        textAlign: "center"
    },
    icon: {}
}));

const WindowButton = ({className, onClick}) => {
    const classes = useStyles();

    return (
        <div className={clsx(className, classes.root)} onClick={onClick}>
            <span className={classes.icon}/>
        </div>
    )
};

export default WindowButton