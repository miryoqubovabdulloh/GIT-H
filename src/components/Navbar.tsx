import { NavLink } from "react-router-dom";

function Navbar() {
  const linkClass =
    "relative px-4 py-2 text-gray-300 hover:text-white transition duration-300 text-lg font-medium";

  const activeClass =
    "text-white after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-pink-500 after:rounded-full";

  return (
    <nav className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 shadow-lg">
      <ul className="flex justify-center gap-8 p-4">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? `${linkClass} ${activeClass}` : linkClass
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="index"
            className={({ isActive }) =>
              isActive ? `${linkClass} ${activeClass}` : linkClass
            }
          >
            Xokozo
          </NavLink>
        </li>
        <li>
          <NavLink
            to="card"
            className={({ isActive }) =>
              isActive ? `${linkClass} ${activeClass}` : linkClass
            }
          >
            Abzor
          </NavLink>
        </li>
        <li>
          <NavLink
            to="registor"
            className={({ isActive }) =>
              isActive ? `${linkClass} ${activeClass}` : linkClass
            }
          >
            Registor
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
