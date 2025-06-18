import { useEffect, useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";

function ThemeChanger() {

    const [isDark, setIsDark] = useState(true);

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
    <div className="bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-100 relative">
        <div className="theme-changer cursor-pointer absolute top-[-65px] right-[90px] z-[1] lg:top-[-75px] lg:right-[25px]">
            {
                isDark ? <FiSun onClick={handleTheme} size={33} /> : <FiMoon onClick={handleTheme} size={33} />
            }
        </div>
    </div>
  )
}

export default ThemeChanger