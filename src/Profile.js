import React from 'react';
import {useSelector} from "react-redux";


function Profile() {
    const  openedCitizen = useSelector(state => state.openedCitizen);

    if(openedCitizen === null ){
        return null
    }
    return (
        <div>
            2
        </div>
    );
}

export default Profile;