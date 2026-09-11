import { NavLink } from "react-router";
import "./Header.css";

export default function Header() {
  return (
    <header>
      <NavLink to="/">Player</NavLink>
      <NavLink to="/game">Game</NavLink>
      <NavLink to="/rules">Rules</NavLink>
    </header>
  );
}
