import {useEffect, useState} from "react";

function Route({ path, children }) {
    const [currentPath, setCurrentPath] = useState(window.location.pathname);

    useEffect(() => {
        const onLocationChange = () => {
            // update path state to current window url
            setCurrentPath(window.location.pathname);
        }

        window.addEventListener("popstate", onLocationChange);

        // clean up event listener
        return () => {
            window.removeEventListener("popstate", onLocationChange);
        }
    }, []);

    return currentPath === path ? children : null;
}

export default Route;