import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";
import Sidebar from "../components/Sidebar.js";

import routes from "../routes.js";
import styles from "../assets/jss/columbus-userdata-hub/layouts/dashboardStyle.js";

const switchRoutes = (
    <Switch>
        {routes.map((prop, key) => {
            if (prop.layout === "/dashboard") {
                return (
                    <Route
                        path={prop.layout + prop.path}
                        component={prop.component}
                        key={key}
                    />
                );
            }
            return null;
        })}
        <Redirect from="/dashboard" to="/dashboard/home" />
    </Switch>
);

const useStyles = makeStyles(styles);

export default function Dashboard({ ...props }) {
    // styles
    const classes = useStyles();
    const mainPanel = React.createRef();
    const [color, setColor] = React.useState("blue");

    return (
        <div className={classes.wrapper}>
            <Navbar
                routes={routes}
                {...props}
            />
            <div className={classes.mainPanel} ref={mainPanel}>
                {/*/!* On the /maps route we want the map to be on full screen - this is not possible if the content and conatiner classes are present because they have some paddings which would make the map smaller *!/*/}
                <Sidebar
                    routes={routes}
                    color={color}
                    {...props}
                />
                <div className={classes.content}>
                    <div className={classes.container}>{switchRoutes}</div>
                </div>
                {/*<Footer />*/}
            </div>
        </div>
    );
}
