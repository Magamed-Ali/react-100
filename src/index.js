import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import {Provider} from "react-redux";
import {createStore} from "redux";

const initialState = {
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
        }
    ]
}

const reduser = (state = initialState, action) =>{
    switch (action.type){
        case 'open':
            return {
                ...state,
                openedCitizen: action.payload
            }
        default:

    }

}

const store = createStore(reduser)
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
        <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
