import React from "react";
import "./AdminSidebar.css"
import fontawesome from '@fortawesome/fontawesome'
import {faCalendarPlus, faChartBar, faUserPlus, faCog} from '@fortawesome/fontawesome-free-solid'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useCookies} from "react-cookie";

const AdminSidebar = (props) => {
    const [cookie, setCookie] = useCookies(["user"])
    fontawesome.library.add(faCalendarPlus, faChartBar, faUserPlus, faCog);


    const logOut = () => {
        setCookie("user", null, {path: "/"});
        window.location = "/"

    }


    return <div className="admin__sidebar">
        <div className="admin__sidebarImage">
            <img className="admin__image" src={"https://www.semmelweiskiado.hu/images/termekek/2/1691/semmelweis_kiado_logo_1608213956.jpg"}  alt={"sote logo"}/>
            <p className={"admin__title"}>ADMIN SOTE</p>
        </div>
        <div className="admin__sidebarMenu">
            <a href="/admin/new-lesson"><p id={"new-lesson"} className="admin__newLesson"><span> <FontAwesomeIcon icon="calendar-plus"  className={"admin__calendar"}/></span> Órák hozzáadása</p></a>
            <a href="/admin/statistics"><p className="admin__statisztika"><span> <FontAwesomeIcon icon="chart-bar"  className={"admin__chart"}/></span> Statisztika</p></a>
            <a href="/admin/new-teacher"><p className="admin__newTeacher"><span> <FontAwesomeIcon icon="user-plus"  className={"admin__addTeacher"}/></span> Oktatók hozzáadása</p></a>
            <a href="/admin/edit-class"><p className="admin__newTeacher"><span> <FontAwesomeIcon icon="user-plus"  className={"admin__addTeacher"}/></span>Hallgatók listája</p></a>
            <a href="/admin/new-turnus"><p className="admin__newTeacher"><span> <FontAwesomeIcon icon="calendar-plus"  className={"admin__calendar"}/></span> Turnus hozzáadása</p></a>
            <a href="/admin/import-turnus"><p className="admin__newTeacher"><span> <FontAwesomeIcon icon="calendar-plus"  className={"admin__calendar"}/></span> Turnus másolása</p></a>
        </div>
        <div className="admin__settingsMenu">
           <p className="admin__settingsTitle">Beállitások</p>

        <a href="/admin/settings">   <p className="admin__settings"><span> <FontAwesomeIcon icon="cog"  className={"admin__cog"}/></span> Beállítások</p></a>
          <p onClick={e => {logOut()}} className="admin__settings"><span> <FontAwesomeIcon icon="cog"  className={"admin__cog"}/></span> Kijelentkezés</p>
        </div>
    </div>
}


export default AdminSidebar;
