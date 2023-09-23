import logo from "../assets/images/logo.png";
import {useSelector} from "react-redux";

function Navbar() {
    const cart = useSelector((state) => state.cart);
    const totalItem = cart?.reduce((total, item) => total + item?.quantity, 0);

    const onClick = (event, href) => {
        // if ctrl or meta key are held on click, allow default behavior of opening link in new tab
        if (event.metaKey || event.ctrlKey) {
            return;
        }

        // prevent full page reload
        event.preventDefault();

        // update url
        window.history.pushState({}, "", href);

        // communicate to Routes that url has changed
        const navEvent = new PopStateEvent("popstate");
        window.dispatchEvent(navEvent);
    };

    return (
        <nav className="bg-[#171C2A] py-4">
            <div className="navBar">
                <a href="/" onClick={(e) => onClick(e, "/")}>
                    <img src={logo} alt="LWS" className="max-w-[140px]" />
                </a>

                <div className="flex gap-4">
                    <a
                        href="/"
                        className="navHome"
                        id="lws-home"
                        onClick={(e) => onClick(e, "/")}
                    >
                        Home
                    </a>
                    <a
                        href="/cart"
                        className="navCart"
                        id="lws-cart"
                        onClick={(e) => onClick(e, "/cart")}
                    >
                        <i className="text-xl fa-sharp fa-solid fa-bag-shopping"></i>
                        <span id="lws-totalCart">
                            {totalItem}
                        </span>
                    </a>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;