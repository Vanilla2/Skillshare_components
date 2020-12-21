import React from 'react'
import {NotificationsNone as Bell, Search} from '@material-ui/icons';

export interface Props {
    [key: string]: any
}

export default (props: Props) => {

    return (
        <div className = "navbar">
            <div className = "nav_1">
                <h2>SkillShare</h2>
                <p>Browse</p>
                <p>Workshops</p>
                <div className = "input_box">
                    <Search className = "search_icon"/>
                    <input className = "navbar_input"/>
                </div>
            </div>
            <div className = "nav_2">
                <p>My Classes</p>
                <Bell className = "notifications"/>
            </div>
        </div>
    );
}