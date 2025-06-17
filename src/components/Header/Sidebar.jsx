import { useEffect } from "react";
import { MdOutlineClose } from "react-icons/md";

function Sidebar({ status, setStatus, setRegion, regDataArr }) {
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 764) {
                setStatus(false);
            }
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [setStatus]);

    return (
        <div className={`h-screen w-[60%] bg-gray-200 dark:bg-gray-500 p-4 fixed top-0 ${status ? 'right-0' : 'right-[-1500px]'} transition-all duration-200`}>
            <MdOutlineClose size={40} onClick={() => setStatus(false)} className="cursor-pointer dark:text-gray-800" />
            <ul className="p-4">
                {regDataArr.slice(0).map(item => (
                    <li onClick={() => setRegion(item)} className="flex cursor-pointer my-4 text-lg" key={item}>
                        <p className="flex items-center px-4 -mb-1 border-b-0 hover:border-b-1 dark:border-">{item}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Sidebar;