import { Outlet, Link } from "react-router-dom";

export default function NavBar() {
    return (
        <>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </nav>
            <main>
                <Outlet />
            </main>
            <footer>© 2026</footer>
        </>
    );
}