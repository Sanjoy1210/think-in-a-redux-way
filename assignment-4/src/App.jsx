import {Provider} from "react-redux";
import Navbar from "./components/Navbar";
import MainSection from "./components/MainSection";
import store from "./redux/store";

function App() {
    return (
        <Provider store={store}>
            <Navbar />
            <MainSection />
        </Provider>
    )
}

export default App;
