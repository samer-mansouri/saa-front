import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Show from './Containers/teamLeader/Show';
import Form from './Containers/teamLeader/Form';
import TlHome from './Containers/teamLeader/TlHome';
import Accounts from './Containers/admin/Accounts';
import CreateAcc from './Containers/admin/CreateAcc';
import Ahome from './Containers/admin/Ahome';
import Profiles from './Containers/headHunter/Profiles';
import PosMenu from './Containers/headHunter/PosMenu';
import Requests from './Containers/headHunter/Requests';
import ReqProceed from './Containers/headHunter/ReqProceed';
import Profile from './Containers/headHunter/Profile';
import AddProfile from './Containers/headHunter/AddProfile';
import PosKanban from './Containers/headHunter/PosKanban';
import Account from './Containers/Account';
import Hhome from './Containers/headHunter/Hhome';
import Interviews from './Containers/headHunter/Interviews';
import Login from './Containers/Login'
import Tehome from  './Containers/TechInterviewer/Tehome';
import Bookmark from  './Containers/TechInterviewer/Bookmark';
import TlCalendar from './Containers/TechInterviewer/TlCalendar';
import ProtectedHeadhunter from './Containers/ProtectedHeadhunter';
import {Context} from './Containers/UserContext';
import ProtectedTeamLeader from './Containers/ProtectedTeamLeader';
import ProtectedTechnical from './Containers/ProtectedTechnical';
import ProtectedAdmin from './Containers/ProtectedAdmin';
import Layout from './Containers/Layout';
import Unauthorized from './Containers/Unauthorized';
import Stat from './Containers/Stat';






const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   
  <BrowserRouter>
   <Context> 
    <Routes>
    
      <Route path="/*" element={<App />} >

      </Route>

       <Route element={<Layout/>}> 
         <Route path="account" element={<Account/>} />
         <Route path="profiles/profile/:id" element={<Profile />} />
         <Route path="positions" element={<PosMenu />} />
         <Route path="positions/view" element={<PosKanban />} />
         
       </Route>

      <Route element={<ProtectedAdmin/>}>
        <Route path="Ahome" element={<Ahome />} />
        <Route path="manageAccount" element={<Accounts />} />
        <Route path="createAccount" element={<CreateAcc />} />
        <Route path="account" element={<Account/>} />
      </Route>

      <Route element={<ProtectedTechnical/>}>
        <Route path="calendar" element={<TlCalendar/>} />
        <Route path="bookmark" element={<Bookmark/>} />
      </Route>

      <Route element={<ProtectedTeamLeader/>}>
        <Route path="home" element={<TlHome />} />
        <Route path="ticket" element={<Show />} />
        <Route path="form" element={<Form />} />
        <Route path="account" element={<Account/>} />
      </Route>
      <Route element={<ProtectedHeadhunter/>}>
        <Route path="profiles" element={<Profiles />} />  
        <Route path="profiles/addProfile" element={<AddProfile />} />     
        <Route path="requests" element={<Requests/>} />
        <Route path="requests/reqproceed/:id" element={<ReqProceed/>} />
        <Route path="Hhome" element={<Hhome/>} />
        <Route path="interviews" element={<Interviews/>} />
        
      </Route>
      
      <Route path='unauth' element={<Unauthorized/>}/>
      <Route path='statistics' element={<Stat/>}/>
      
    </Routes>
    </Context>  
  </BrowserRouter>
  
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
