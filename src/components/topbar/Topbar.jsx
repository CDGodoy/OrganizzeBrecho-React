import React from 'react'
import "./topbar.css"

import { NotificationsNone, Language, Settings } from '@material-ui/icons'

export default function Topbar() {
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className="logo">OrganizzeBrechó</span>
                </div>
                <div className="topRight">
                    <div className="topbarIconContainer">
                        <NotificationsNone />
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Language />                        
                    </div>
                    <div className="topbarIconContainer">
                        <Settings />
                    </div>
                    <img src="https://cdn-icons.flaticon.com/png/512/1785/premium/1785896.png?token=exp=1641755774~hmac=966f6704bad02c071939dbdcc04c09a0" alt="" className="topAvatar" />
                </div>
            </div>
            
        </div>
    )
}
