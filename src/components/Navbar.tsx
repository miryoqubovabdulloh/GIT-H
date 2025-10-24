import { NavLink } from "react-router-dom";

function Navbar() {
  const linkClass =
    "px-4 py-2 text-gray-300 hover:text-white transition duration-300";

  const activeClass =
    "text-white border-b-2 border-blue-500 font-semibold";

  return (
    <nav className="bg-gray-900 shadow-md">
      <ul className="flex justify-center gap-6 p-4">
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
      </ul>
    </nav>
  );
}

export default Navbar;
