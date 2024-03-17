import React from "react";
import { Link } from "react-router-dom";

const Playlists = () => {
  return (
    <nav className="mx-6 mt-2 py-2 flex-auto border-t border-white border-opacity-20 overflow-auto">
      <ul>
        <li>
            {new Array(40).fill(
                <Link to={""} className="text-s text-link hover:text-white flex h-8 items-center">
                    Çalma Listem
                </Link>
            )}

        </li>
      </ul>
    </nav>
  );
};

export default Playlists;
