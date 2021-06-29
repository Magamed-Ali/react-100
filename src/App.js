
import Main from "./Main";
import Profile from "./Profile";

function App() {
    return (
        <div className="container w-80">
            <div className="row">
                <div className="col">
                    <Main/>
                </div>
                <div className="col">
                    <Profile/>
                </div>
            </div>
        </div>
    );
}

export default App;