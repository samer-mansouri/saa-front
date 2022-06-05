
import DashboardIcon from '@mui/icons-material/Dashboard';
import StreamIcon from '@mui/icons-material/Stream';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import MapIcon from '@mui/icons-material/Map';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import CrisisAlertIcon from '@mui/icons-material/CrisisAlert';
import BugReportIcon from '@mui/icons-material/BugReport';
import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import { UserContext } from '../UserContext';
import { useContext } from 'react';


const tllist = [

    {
        id: 0,
        icons: <DashboardIcon />,
        label: "Home",
        route: "home",
    },
    {
        id: 1,
        icons: <DashboardIcon />,
        label: "Request ",
        route: "form",
    },
    {
        id: 2,
        icons: <DashboardIcon />,
        label: "Positions list",
        route: "Ticket",
    }
    

]

const hrlist = [

    {
        id: 0,
        icons: <DashboardIcon />,
        label: "Home",
        route: "Hhome",
    },
    {
        id: 1,
        icons: <DashboardIcon />,
        label: "Manage postiions",
        route: "positions",
    },
    {
        id: 2,
        icons: <DashboardIcon />,
        
        label: "Manage Requests",
        route: "requests",
    },
     {
        id: 3,
        icons: <DashboardIcon />,
        label: "Manage profiles",
        route: "profiles",
    } ,
    {
        id: 4,
        icons: <DashboardIcon />,
        label: "Manage Interviews",
        route: "interviews",
    }
    

]

const alist = [

    {
        id: 0,
        icons: <DashboardIcon />,
        label: "Home",
        route: "Ahome",
    },
    {
        id: 1,
        icons: <DashboardIcon />,
        label: "Create Account",
        route: "createAccount",
    },
    {
        id: 2,
        icons: <DashboardIcon />,
        label: "Manage Accounts",
        route: "manageAccount",
    },
     {
        id: 3,
        icons: <DashboardIcon />,
        label: "Statistics",
        route: "statistics",
    }
    
    

]

const tlist = [

    {
        id: 0,
        icons: <DashboardIcon />,
        label: "Home",
        route: "Tehome",
    },
    {
        id: 1,
        icons: <DashboardIcon />,
        label: "Calender ",
        route: "calender",
    },
    {
        id: 2,
        icons: <DashboardIcon />,
        label: "Candidates Bookmark ",
        route: "bookmark",
    }
    

]


// const role = localStorage.getItem("role");
const [role,setRole] = UseContext(UserContext)

export const navbaritems = lists();

function lists () {
    console.log(role)
    if (role === 'Team Leader') return tllist ;
    else if (role === 'HR') return hrlist ;
    else if (role === 'Technical') return tlist ;
    else if (role ==='Admin') return alist ;
    else console.log('akahaw',role) ;
    

}