import { NavLink } from "react-router-dom";
import styled from "styled-components";
import {
  HiOutlineCalendarDays,
  HiOutlineCog6Tooth,
  HiOutlineHome,
  HiOutlineHomeModern,
  HiOutlineUsers,
} from "react-icons/hi2";

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const StyeldNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    color: var(--color-grey-600);
    font-size: 1.6rem;
    font-weight: 500;
    padding: 1.2rem 2.4rem;
    transition: all 0.3s;
  }

  /* This works because react-router places the active class on the active NavLink */
  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-grey-800);
    /* background-color: var(--color-grey-50); */
    background-color: var(--color-brand-100);
    border-radius: var(--border-radius-sm);
    border-left: 4px solid var(--color-brand-700);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-400);
    transition: all 0.3s;
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: var(--color-brand-700);
  }
`;

function MainNav() {
  return (
    <nav>
      <NavList>
        <li>
          <StyeldNavLink to="/dashboard">
            <HiOutlineHome />
            <span> Home</span>
          </StyeldNavLink>
        </li>
        <li>
          <StyeldNavLink to="/bookings">
            <HiOutlineCalendarDays />
            <span>Bookings</span>
          </StyeldNavLink>
        </li>
        <li>
          <StyeldNavLink to="/cabins">
            <HiOutlineHomeModern />
            <span>Cabins</span>
          </StyeldNavLink>
        </li>
        <li>
          <StyeldNavLink to="/users">
            <HiOutlineUsers />
            <span>Users</span>
          </StyeldNavLink>
        </li>
        <li>
          <StyeldNavLink to="/settings">
            <HiOutlineCog6Tooth />
            <span>Settings</span>
          </StyeldNavLink>
        </li>
      </NavList>
    </nav>
  );
}

export default MainNav;
