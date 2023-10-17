import React from 'react'
import "./Sidebar.css";
import { ReactComponent as DashBoard } from "../imagefile/Dashboard.svg";
import { ReactComponent as ProjectList } from "../imagefile/Projectlist.svg";
import { ReactComponent as CreateProject } from "../imagefile/createproject.svg";
import { ReactComponent as Logout } from "../imagefile/Logout (1).svg";
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <aside id="sidebar">
      <ul className="sidebar-list">
        <li className="sidebar-list-item">
          <Link to="/dashboard" replace={true}> <DashBoard /></Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="/projectlist" replace={true}> <ProjectList /></Link>
        </li>
        <hr className="line" />
        <li className="sidebar-list-item">
          <Link to="/creatproject" replace={true}>
            <CreateProject />
          </Link>
        </li>
        <div className="logout">
        <li className="sidebar-list-item">
          <Link to="/" replace={true}>
            <Logout />
          </Link>
        </li>
        </div>
      </ul>
    </aside>
  );
}
export default Sidebar;