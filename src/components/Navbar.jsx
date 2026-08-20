import { useState } from "react";
import logo from "../assets/Logo.png";
import profile from "../assets/profile.png";
import { Link } from "react-router-dom";

export default function Navbar({ darkMode, setDarkMode }) {
  const NavList = () => {
    return (
      <>
        <Link className="font-light text-2xl dark:text-zinc-800" to="/">
          Home
        </Link>
        <Link className="font-light text-2xl dark:text-zinc-800" to="/gallery">
          Gallery
        </Link>
        <Link className="font-light text-2xl dark:text-zinc-800" to="/about">
          About
        </Link>
      </>
    );
  };
  const SetThemeButton = () => {
    return (
      <button
        className="outline-none"
        onClick={() => {
          setDarkMode(!darkMode);
        }}
      >
        {darkMode ? (
          <i className="text-2xl ri-moon-fill"></i>
        ) : (
          <i className="text-2xl ri-sun-fill"></i>
        )}
      </button>
    );
  };
  const Profile = () => {
    return (
      <div className="h-10 w-10 rounded-full ">
        <img
          src={profile}
          alt="profile"
          className="h-full w-full rounded-full object-cover"
        />
      </div>
    );
  };

  const [isOpen, setIsOpen] = useState(false);

  function toggleNavbar() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <nav className="relative flex justify-between items-center px-6 py-4 h-[10vh] bg-black text-white dark:bg-white dark:text-zinc-900">
        <div className="flex gap-7 items-center">
          <h1 className="font-medium text-2xl">PhotoGallery</h1>
        </div>

        <div className="absolute left-1/2 -translate-x-1/2 md:flex gap-20 hidden">
          <NavList />
        </div>

        <div className=" gap-4 justify-center items-center hidden md:flex ">
          <SetThemeButton />

          <Profile />
        </div>
        <div className="flex gap-3 justify-center items-center md:hidden">
          
            <SetThemeButton />
       
          <button onClick={toggleNavbar}>
            {isOpen ? (
              <i className="ri-close-line text-white dark:bg-zinc-100 dark:text-zinc-900 text-2xl"></i>
            ) : (
              <i className="ri-menu-fill text-white dark:bg-zinc-100 dark:text-zinc-900 text-2xl"></i>
            )}
          </button>
        </div>

        <div
          className={`md:hidden py-4 bg-zinc-900 border border-zinc-800 dark:bg-zinc-100 dark:border-zinc-300 dark:text-zinc-600 absolute left-0 top-full w-full  flex flex-col items-center gap-5 z-50 transition-all duration-300 overflow-hidden ${isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0 "}`}
        >
          <Link className="font-light text-2xl dark:text-zinc-800" to="/">
            Profile
          </Link>
          <NavList />
        </div>
      </nav>
    </>
  );
}
