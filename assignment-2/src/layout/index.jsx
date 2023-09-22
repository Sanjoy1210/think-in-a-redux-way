import Header from "./Header.jsx";

function Layout({ children }) {
    return (
        <>
            <Header />
            { children }
        </>
    );
}

export default Layout;