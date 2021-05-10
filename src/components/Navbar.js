import React from 'react';
import classNames from "classnames";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from '@material-ui/icons/Menu';

import styles from "../assets/jss/columbus-userdata-hub/components/navBarStyle.js";

const useStyles = makeStyles(styles);

function Navbar(props) {
    const classes = useStyles();
    const [color, setColor] = React.useState("gray");
    const appBarClasses = classNames({
        [" " + classes[color]]: color
    });

    return (
        <AppBar position="fixed" className={classes.appBar + appBarClasses}>
            <Toolbar className={classes.container}>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    className={classes.menuButton}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" noWrap>
                    유저 정보 허브 콘솔
                </Typography>
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;
