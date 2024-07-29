import { NavLink } from 'react-router-dom';

const MainMenu = () => {
  return (
    <>
      <nav>
        <NavLink
          style={({ isActive }) =>
            isActive ? { color: 'red', textDecoration: 'none' } : {}
          }
          to="."
          end
        >
          Home
        </NavLink>
      </nav>
    </>
  );
};

export default MainMenu;
