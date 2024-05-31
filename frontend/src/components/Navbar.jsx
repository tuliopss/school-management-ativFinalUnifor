import React, { useEffect, useState } from "react";
import styles from "./Navbar.module.css";

import { NavLink, Link, useNavigate } from "react-router-dom";
import {
  BsSearch,
  BsHouseDoorFill,
  BsFillPersonFill,
  BsFillCameraFill,
} from "react-icons/bs";
import { useAuth } from "../hooks/use-auth";
import { useDispatch, useSelector } from "react-redux";
import { logout, reset } from "../slices/auth-slice";
import Home from "../pages/Home";

const Navbar = () => {
  const { auth } = useAuth();
  const { user } = useSelector((state) => state.auth);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    dispatch(reset());

    navigate("/login");
  };

  return (
    <nav id={styles.nav}>
      <Link to='/'>School Management</Link>

      <ul id={styles.nav_links}>
        {auth ? (
          <>
            <li>
              <NavLink to='/teachers'>Professores</NavLink>
            </li>
            {user && (
              <li>
                <NavLink to={`/students`}>Alunos</NavLink>
              </li>
            )}
            <li>
              <NavLink to={`/profile`}>
                Meu perfil <BsFillPersonFill />
              </NavLink>
            </li>
            <li>
              <span onClick={handleLogout}>Sair</span>
            </li>
          </>
        ) : (
          <>
            <li>
              <NavLink to='/login'>Entrar</NavLink>
            </li>

            <li>
              <NavLink to='/register'>Registrar</NavLink>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
