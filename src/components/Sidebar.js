import React from 'react';
import classNames from "classnames";
import PropTypes from "prop-types";

import { NavLink } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Drawer from "@material-ui/core/Drawer";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import ListItemText from "@material-ui/core/ListItemText";
import Icon from "@material-ui/core/Icon";


import styles from "../assets/jss/columbus-userdata-hub/components/sidebarStyle.js";
const useStyles = makeStyles(styles);

export default function Sidebar(props) {
    const classes = useStyles();
    const { color, routes } = props;
    function activeRoute(routeName) {
        return window.location.href.indexOf(routeName) > -1 ? true : false;
    }

    var links = (
        <List className={classes.list}>
            {routes.map((prop, key) => {
                let listItemClasses = classNames({
                        [" " + classes[color]]: activeRoute(prop.layout + prop.path)
                });
                const whiteFontClasses = classNames({
                    [" " + classes.whiteFont]: activeRoute(prop.layout + prop.path)
                });
                return (
                    <NavLink
                        to={prop.layout + prop.path}
                        className={classes.item}
                        activeClassName="active"
                        key={key}
                    >
                        <ListItem button className={classes.itemLink + listItemClasses}>
                            {typeof prop.icon === "string" ? (
                                <Icon
                                    className={classes.itemIcon}
                                >
                                    {prop.icon}
                                </Icon>
                            ) : (
                                <prop.icon
                                    className={classes.itemIcon}
                                />
                            )}
                            <ListItemText
                                primary={prop.name}
                                className={classNames(classes.itemText, whiteFontClasses)}
                                disableTypography={true}
                            />
                        </ListItem>
                    </NavLink>
                );
            })}
        </List>
    );

    return (
        <div>
            <Drawer
                anchor="left"
                variant="permanent"
                open
                className={classes.drawerPaper}
            >
                <div className={classes.sidebarWrapper}>{links}</div>
                <div
                    className={classes.background}
                />
            </Drawer>
        </div>
    );
}

Sidebar.propTypes = {
    bgColor: PropTypes.oneOf(["purple", "blue", "green", "orange", "red"]),
    routes: PropTypes.arrayOf(PropTypes.object),
    open: PropTypes.bool
};
