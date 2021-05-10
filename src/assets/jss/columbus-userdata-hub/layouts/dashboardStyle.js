import {
    drawerWidth,
    transition,
    container
} from "../../../Parameters.js";

const appStyle = theme => ({
    wrapper: {
        position: "relative",
        top: "0",
        overflow: "hidden",
        marginTop: "0px"
    },
    mainPanel: {
        width: "100%",
        height: "calc(100vh - 70px)",
        overflow: "auto",
        position: "relative",
        paddingTop: "50px",
        float: "right",
        ...transition,
        maxHeight: "100%",
        overflowScrolling: "touch"
    },
    content: {
        marginLeft: drawerWidth,
        padding: "25px 15px",
        minHeight: "calc(100vh - 123px)"
    },
    container,
    map: {
        marginTop: "70px"
    }
});

export default appStyle;
