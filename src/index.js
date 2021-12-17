import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import {Provider} from "react-redux";
import {createStore} from "redux";

const initState = {
    darkTheme: true,
    openedCitizen: null,
    citizens: [
        {
            name: 'Иванов И. .И.',
            age: 45,
            stage: 1,
            history: "Lorem Ipsum - это текст-\"рыба\", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной \"рыбой\" для текстов на латинице с начала XVI века",
            address: "Грозный",
            sideEffects: "Нельзя пить воду"
        },
        {
            name: 'Петров И. .И.',
            age: 71,
            stage: 0,
            history: " Lorem - часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной \"рыбой\" для текстов на латинице с начала XVI века",
            address: "Волгоград",
            sideEffects: null
        },
        {
            name: 'Петров И. .И.',
            age: 78,
            stage: 0,
            history: " Lorem - часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной \"рыбой\" для текстов на латинице с начала XVI века",
            address: "Волгоград",
            sideEffects: "adsfasdf"
        }
    ]
}



const reduser = (state = initState, action) => {

    switch (action.type) {
        case 'open':
            return {
                ...state,
                openedCitizen: action.payload
            }
        case  'ADDUSERS':
            return {
                ...state,
                citizens: [...state.citizens, action.payload]
            }
        case 'remuve':
            return {
                ...state,
                citizens: action.payload
            }
        default:
            return state
    }
}

const store = createStore(reduser)
ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
