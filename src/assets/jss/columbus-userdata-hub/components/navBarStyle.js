import {
    container,
    defaultFont,
    primaryColor,
    defaultBoxShadow,
    infoColor,
    successColor,
    warningColor,
    dangerColor,
    whiteColor,
    grayColor
} from "../../../Parameters.js";
import {blackColor} from "../../../Parameters";

const headerStyle = () => ({
    appBar: {
        backgroundColor: grayColor[0],
        boxShadow: "0",
        borderBottom: "0",
        marginBottom: "0",
        position: "absolute",
        width: "100%",
        paddingTop: "0px",
        zIndex: "1035",
        color: blackColor,
        border: "0",
        borderRadius: "3px",
        padding: "0px 0",
        transition: "all 150ms ease 0s",
        minHeight: "50px",
        display: "block"
    },
    container: {
        ...container,
        minHeight: "50px",
        zIndex: "1036"
    },
    flex: {
        flex: 1
    },
    title: {
        ...defaultFont,
        letterSpacing: "unset",
        lineHeight: "30px",
        fontSize: "18px",
        borderRadius: "3px",
        textTransform: "none",
        color: "inherit",
        margin: "0",
        "&:hover,&:focus": {
            background: "transparent"
        }
    },
    appResponsive: {
        top: "0px"
    },
    primary: {
        backgroundColor: primaryColor[0],
        color: whiteColor,
        ...defaultBoxShadow
    },
    info: {
        backgroundColor: infoColor[0],
        color: whiteColor,
        ...defaultBoxShadow
    },
    success: {
        backgroundColor: successColor[0],
        color: whiteColor,
        ...defaultBoxShadow
    },
    warning: {
        backgroundColor: warningColor[0],
        color: whiteColor,
        ...defaultBoxShadow
    },
    danger: {
        backgroundColor: dangerColor[0],
        color: whiteColor,
        ...defaultBoxShadow
    }
});

export default headerStyle;
