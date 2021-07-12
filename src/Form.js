import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";

function Form(props) {

    const getFormCitizens = useSelector(state => state.citizens);
    const getFormCitizenss = useSelector(state => state);
    const dispatch = useDispatch();

    const [userName, setUserName] = useState('');
    const [userAge, setUserAge] = useState(null);
    const [userStage, setUserStage] = useState(null);
    const [userHistory, setUserHistory] = useState('');
    const [userAddress, setUserAddress] = useState('');
    const [userSideEffects, setUserSideEffects] = useState('');

    const addUsers = () => {
        const userData = {
            name: userName,
            age: userAge,
            stage: userStage,
            history: userHistory,
            address: userAddress,
            sideEffects: userSideEffects
        }
        dispatch({
            type: 'ADDUSERS',
            payload: userData
        })
        setUserName("")
        setUserAge(null)
        setUserStage(null)
        setUserHistory("")
        setUserAddress("")
        setUserSideEffects("")

        console.log(getFormCitizens)
    }
    const getNameInput = (e) => {
        setUserName(e.target.value)
    }
    return (
        <div>
            <div>
                <div>
                    <input type="text" placeholder="name" value={userName}
                           onChange={getNameInput}/>
                </div>
                <div>
                    <input type="number" placeholder="age" value={userAge}
                           onChange={(e) => setUserAge( Number(e.target.value))}/>
                </div>
                <div>
                    <input type="text" placeholder="stage" value={userStage}
                           onChange={(e) => setUserStage(Number(e.target.value))}/>
                </div>
                <div>
                    <input type="text" placeholder="history" value={userHistory}
                           onChange={(e) => setUserHistory(e.target.value)}/>
                </div>
                <div>
                    <input type="text" placeholder="address" value={userAddress}
                           onChange={(e) => setUserAddress(e.target.value)}/>
                </div>
                <div>
                    <input type="text" placeholder="sideEffects" value={userSideEffects}
                           onChange={(e) => setUserSideEffects(e.target.value)}/>
                </div>
                <button onClick={() => {
                    addUsers()
                }}>
                    Добавить
                </button>
            </div>
        </div>
    );
}

export default Form;