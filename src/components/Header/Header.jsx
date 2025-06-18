import Sidebar from "./Sidebar";
import { useState, useEffect } from "react";
import { GiWorld } from "react-icons/gi";
import { NavLink, useLocation } from "react-router-dom";

function Header({ cntData, setRegion }) {
    const regDataArr = [...new Set(cntData.map(item => item.region))];
    const [status, setStatus] = useState(false);

    const location = useLocation();

    useEffect(() => {
        const path = decodeURIComponent(location.pathname.split("/")[2] || "");
        if (regDataArr.includes(path)) {
            setRegion(path);
        } else {
            setRegion(null);
        }
    }, [location.pathname, regDataArr.join(",")]);


    return (
        <>
            <Sidebar status={status} setStatus={setStatus} setRegion={setRegion} regDataArr={regDataArr} />
            <header className="p-4  flex justify-center bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-100">
                <div className="container flex justify-between items-center h-16 mx-auto lg:justify-center lg:space-x-8">
                    <ul className="items-stretch hidden mr-0 lg:flex">
                        {regDataArr.slice(0, Math.ceil(regDataArr.length / 2)).map(item => (
                            <li className="flex" key={item}>
                                <NavLink
                                    to={`/countries/${item}`}
                                    className="flex items-center px-4 -mb-1 transition-all duration-200 hover:text-gray-500 hover:dark:text-gray-400"
                                >
                                    {item}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                    <NavLink end to="/countries" className="flex items-center justify-center text-center p-2 cursor-pointer mr-0" onClick={() => setRegion(null)}>
                        <GiWorld className="w-10 h-10 text-center flex items-center justify-center" />
                    </NavLink>
                    <ul className="items-stretch hidden mr-0 lg:flex">
                        {regDataArr.slice(Math.ceil(regDataArr.length / 2)).map(item => (
                            <li className="flex" key={item}>
                                <NavLink
                                    to={`/countries/${item}`}
                                    className="flex items-center px-4 -mb-1 transition-all duration-200 hover:text-gray-500 hover:dark:text-gray-400"
                                >
                                    {
                                        item === "Antarctic Ocean" ? "A. Ocean" : item
                                    }
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                    <div className="icons flex justify-center items-center">
                        <button onClick={() => setStatus(true)} title="Button" type="button" className="p-4 lg:hidden cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-10 h-10 dark:text-gray-100">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;