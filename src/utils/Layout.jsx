import { Outlet } from "react-router-dom";
import Navber from "../components/Navber";
import Footer from "../components/Footer";
import About from "../components/About";
import MarqueeComponent from "../components/Marquee";

const Layout = () => {
    return (
        <>
            <Navber />
            <Outlet />
            <MarqueeComponent/>
            <About/>
            <Footer />
        </>
    )
}
export default Layout