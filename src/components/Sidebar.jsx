import React from "react";
import Logo from "../assets/logo.svg";
import Menu from "./sidebar/Menu";
import { Link } from "react-router-dom";
import { Icon } from "helpers/Icons";
import Playlists from "./sidebar/Playlists";
import DownloadApp from "./sidebar/DownloadApp";

const Sidebar = () => {
  return (
    <aside className="w-60 pt-6 flex flex-shrink-0 flex-col bg-black">
      <Link to={"/"} className="mb-7 px-6">
        <img src={Logo} alt="" />
      </Link>
      <Menu />

      <nav className="mt-6">
        <ul>
          <li>
            <Link
              to={""}
              className="py-2 px-6 flex items-center group text-sm text-link font-semibold hover:text-white"
            >
              <span className="w-6 h-6 flex items-center justify-center mr-4 bg-white group-hover:bg-opacity-100 bg-opacity-60 rounded-sm text-black">
                <Icon name={"plus"} size={12} />
              </span>
              Çalma Listesi Oluştur
            </Link>
          </li>
          <li>
            <Link
              to={""}
              className="py-2 px-6 flex items-center group text-sm text-link font-semibold hover:text-white"
            >
              <span className="w-6 h-6 flex items-center justify-center mr-4 bg-gradient-to-br from-indigo-700 to-blue-300 text-white rounded-sm opacity-70 group-hover:opacity-100">
                <Icon name={"heart"} size={12} />
              </span>
              Beğenilen Şarkılar
            </Link>
          </li>
        </ul>
      </nav>

      <Playlists />

      <DownloadApp />
    </aside>
  );
};

export default Sidebar;
