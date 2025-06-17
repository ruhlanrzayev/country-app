import Sidebar from "./Sidebar";
import { useState, useEffect } from "react";
import { GiWorld } from "react-icons/gi";
import { FiSun, FiMoon } from "react-icons/fi";
import { Link, useLocation, useNavigate } from "react-router-dom";

function Header({ cntData, setRegion }) {
    const regDataArr = [...new Set(cntData.map(item => item.region))];
    const [status, setStatus] = useState(false);
    const [isDark, setIsDark] = useState(true);

    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const path = decodeURIComponent(location.pathname.split("/")[2] || "");
        if (regDataArr.includes(path)) {
            setRegion(path);
        } else {
            setRegion(null);
        }
    }, [location.pathname, regDataArr.join(",")]);

    function handleTheme() {
        const newIsDark = !isDark;
        setIsDark(newIsDark);
        document.documentElement.classList.toggle('dark');
        localStorage.setItem('theme', newIsDark ? 'dark' : 'light');
    }

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            setIsDark(true);
            document.documentElement.classList.add('dark');
        } else {
            setIsDark(false);
            document.documentElement.classList.remove('dark');
        }
    }, []);

    return (
        <>
            <Sidebar status={status} setStatus={setStatus} setRegion={setRegion} regDataArr={regDataArr} />
            <header className="p-4 flex justify-center bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-100">
                <div className="container flex justify-between items-center h-16 mx-auto md:justify-center md:space-x-8">
                    <ul className="items-stretch hidden space-x-3 md:flex">
                        {regDataArr.slice(0, Math.ceil(regDataArr.length / 2)).map(item => (
                            <li className="flex" key={item}>
                                <Link
                                    to={`/countries/${item}`}
                                    className="flex items-center px-4 -mb-1 transition-all duration-200 hover:text-gray-500 hover:dark:text-gray-400"
                                >
                                    {item}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <Link to="/countries" className="flex items-center p-2 cursor-pointer" onClick={() => setRegion(null)}>
                        <GiWorld className="w-10 h-10 text-violet-600" />
                    </Link>
                    <ul className="items-stretch hidden space-x-3 md:flex">
                        {regDataArr.slice(Math.ceil(regDataArr.length / 2)).map(item => (
                            <li className="flex" key={item}>
                                <Link
                                    to={`/countries/${item}`}
                                    className="flex items-center px-4 -mb-1 transition-all duration-200 hover:text-gray-500 hover:dark:text-gray-400"
                                >
                                    {item}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <div className="icons flex justify-center items-center">
                        <div className="theme-changer cursor-pointer">
                            {
                                isDark ? <FiSun onClick={handleTheme} size={30} /> : <FiMoon onClick={handleTheme} size={30} />
                            }
                        </div>
                        <button onClick={() => setStatus(true)} title="Button" type="button" className="p-4 md:hidden cursor-pointer">
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