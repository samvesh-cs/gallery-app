import logo from "../assets/Logo.png";
import profile from "../assets/profile.png";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="relative flex justify-between items-center px-6 py-4 h-[10vh] bg-black text-white">
      <div className="flex gap-7 items-center">
        <div className="h-10 w-10 rounded-full overflow-hidden">
          <img
            src={logo}
            alt="logo"
            className="h-full w-full rounded-full scale-200 object-cover"
          />
        </div>
        <Link className="font-light text-xl" to="/">
          Home
        </Link>
        <Link className="font-light text-xl" to="/gallery">
          Gallery
        </Link>
        <Link className="font-light text-xl" to="/about">
          About
        </Link>
      </div>
      <div className="absolute left-1/2 -translate-x-1/2">
        <form>
          <div className="py-2 px-3 rounded-full w-90 flex align-center bg-zinc-800">
            <i className="ri-search-line text-gray-600 text-xl"></i>
            <input
              type="text"
              placeholder="Search"
              className="outline-none pl-2 tracking-tighter"
            />
          </div>
        </form>
      </div>
      <div className="flex gap-4 items-center">
        <h1 className="bg-white text-black font-bold py-1 text-xm px-3 rounded-full tracking-tighter">Saved</h1>

        <div className="h-10 w-10 rounded-full ">
          <img
            src={profile}
            alt="profile"
            className="h-full w-full rounded-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
