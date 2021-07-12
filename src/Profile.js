import React from 'react';
import {useSelector} from "react-redux";


function Profile() {
    const  openedCitizen = useSelector(state => state.openedCitizen);

    const profile = useSelector(state => {
        return state.citizens.find((item, idx) => {
            if(idx === openedCitizen){
                return true;
            }
        })
    })
    if(openedCitizen === null ){
        return null
    }
    return (
        <div>
            <h2>
                Имя: {profile.name}
            </h2>
            <h3>
                Описание:
            </h3>
            <div>
                {profile.history}
            </div>
        </div>
    );
}

export default Profile;