// @material-ui/icons
import HomeIcon from '@material-ui/icons/Home';
import FindInPageIcon from '@material-ui/icons/FindInPage';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import BubbleChartIcon from '@material-ui/icons/BubbleChart';
import ScheduleIcon from '@material-ui/icons/Schedule';

// core components/views for Admin layout
import Home from "./views/Home.js";
import Label from "./views/LabelSearch.js";
import ProfileView from "./views/ProfileView.js";
import Segment from "./views/SegmentJobDefinition.js";
import Schedule from "./views/SegmentJobSchedule.js";

const dashboardRoutes = [
    {
        path: "/home",
        name: "홈",
        icon: HomeIcon,
        component: Home,
        layout: "/dashboard"
    },
    {
        path: "/label",
        name: "레이블 검색",
        icon: FindInPageIcon,
        component: Label,
        layout: "/dashboard"
    },
    {
        path: "/profile",
        name: "프로필 보기",
        icon: AccountCircleIcon,
        component: ProfileView,
        layout: "/dashboard"
    },
    {
        path: "/segment",
        name: "세그먼트",
        icon: BubbleChartIcon,
        component: Segment,
        layout: "/dashboard"
    },
    {
        path: "/schedule",
        name: "세그먼트 스케쥴",
        icon: ScheduleIcon,
        component: Schedule,
        layout: "/dashboard"
    }
];

export default dashboardRoutes;
