import React from 'react';
import {useDispatch, useSelector} from "react-redux";


function List() {
    const dispatch = useDispatch();

    const citizens = useSelector(state => state.citizens);
    console.log(citizens.openedCitizen)

    const getFrindlyValueOfStage = (stage) => {
        switch (stage) {
            case 0:
                return 'не вакцинирован'
            case 1:
                return 'вакцинирован на половину'
            case 2:
                return 'вакцинирован'
            default:
                return 'ошибка'
        }
    }


    const hendleOpen = (index) => {
        dispatch({
            type: 'open',
            payload: index
        })
    }

    return (
        <div>
            <div>
                {citizens.map((citizen, index) => {
                    return (
                        <div key={index} className="row  p-1 border" onClick={() => hendleOpen(index)}>
                            <div className="col-1">
                                {index + 1}
                            </div>
                            <div className="col-1">
                                {citizen.stage === 0 && citizen.age >= 60 ? "⚠" : ""}
                            </div>
                            <div className="col-3">
                                {citizen.name}
                            </div>
                            <div className="col-1">
                                {citizen.age}
                            </div>
                            <div className="col">
                                {getFrindlyValueOfStage(citizen.stage)}
                            </div>
                            <div className="col-1">
                                <button className="delite">✗</button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default List;