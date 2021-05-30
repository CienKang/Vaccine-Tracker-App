import React from "react";

const Navbar = () => {
    return (
        <>
            {/* Drop Down Content Not Shown */}
            <ul id="dropdown" className="dropdown-content">
                <li><a href="#!">Find By Pin Code</a></li>
                <li><a href="#!">FInd By district</a></li>
                <li><a href="#!">three</a></li>
            </ul>

            <nav className="nav-wrapper orange darken-3">
                <div className="container">
                    <a href="#!" className="brand-logo">Vaccine Tracker</a>
                    <a href="/" data-target="mobile-demo" class="sidenav-trigger"><i className="material-icons">menu</i></a>
                    {/* For Desktop */}
                    <ul className="right hide-on-med-and-down">
                        <li><a href="/">Home</a></li>
                        <li><a href="/">Info</a></li>
                        <li><a href="/">Check Slots</a></li>
                    </ul>
                </div>
            </nav>
            {/* fOR mobile */}
            <ul className="sidenav" id="mobile-demo">
                <li><a href="/">Home</a></li>
                <li>
                    <a className="dropdown-trigger" href="/" data-target="dropdown">Check Slots<i className="material-icons right">arrow_drop_down</i></a>
                </li>
            </ul>
        </>
    );
}

export default Navbar;