import SunnyIcon from '@mui/icons-material/Sunny';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useState } from 'react';

export default function NavBar() {
  const infos = [
    { name: 'About', href: '#About' },
    { name: 'Skills', href: '#Skills' },
    { name: 'Projects', href: '#Projects' },
    { name: 'Contact', href: '#Contact' },
  ];

  let [Theme, setTheme] = useState(false);

  let [Menu, setMenu] = useState(false);

  const handleThemes = () => {
    setTheme(!Theme);

    if (!Theme) {
      document.documentElement.classList.add('fateh');
    } else {
      document.documentElement.classList.remove('fateh');
    }
  };

  const handleMenu = () => {
    setMenu(!Menu);
  };

  return (
    <div className="shadow-xl/10 relative z-10">
      <nav className=" fade-in flex justify-between items-center px-16 py-4  rounded-full transition-all duration-300">
        <div className="">
          <h1 className="text-4xl  cursor-pointer text-main font-bold  transition-all duration-300">
            YS
          </h1>
        </div>

        <div className="hidden md:flex justify-center px-10 py-2 gap-6 glass-bg rounded-full ">
          {infos.map((e, index) => {
            return (
              <a
                key={index}
                href={e.href}
                className={`navs inline-block  hover:-translate-y-1/12 transition-all duration-300 font-medium`}
              >
                {e.name}
              </a>
            );
          })}
        </div>

        <div
          className={`order-first cursor-pointer glass-bg hover:-translate-y-1/12  p-1 flex items-center justify-center transition-all duration-300  md:hidden`}
          onClick={handleMenu}
        >
          <MenuIcon color="info" />
        </div>

        <div>
          <button
            className="cursor-pointer hover:-translate-y-1/12 rounded-full p-2 glass-bg  flex items-center justify-center transition-all duration-300 "
            onClick={handleThemes}
          >
            {Theme ? <DarkModeIcon color="info" /> : <SunnyIcon color="info" />}
          </button>
        </div>
      </nav>

      {Menu ? (
        <div className="p-20 shadow-xl/30 absolute w-full  min-h-screen  inset-0 glass-bg fade-in transition-all duration-300 md:hidden">
          <div
            className={` cursor-pointer flex justify-end m-auto w-fit mb-4 items-center hover:-translate-y-1/12  p-1  transition-all duration-300`}
            onClick={handleMenu}
          >
            <CloseIcon color="error" sx={{ fontSize: 40 }} />
          </div>
          <div className="flex-col ">
            {infos.map((e, index) => {
              return (
                <div className="not-last:border-b-1 border-gray-300">
                  <a
                    key={index}
                    href={e.href}
                    className={`navs block text-lg  p-3  hover:text-blue-400 hover:translate-x-1 transition-all duration-300 font-medium`}
                    onClick={handleMenu}
                  >
                    {e.name}
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        ''
      )}
    </div>
  );
}
