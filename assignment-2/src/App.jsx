import Layout from "./layout";
import BookingArea from "./components/BookingArea";
import {Provider} from "react-redux";
import store from "./redux/store";


function App() {
    return (
        <Provider store={store}>
            <Layout>
                <BookingArea />
            </Layout>
        </Provider>
)
}

export default App
