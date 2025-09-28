import React from "react";
const navItems = [
  {
    id: 1,
    name: "Home",
    path: "/",
  },
  {
    id: 2,
    name: "About",
    path: "/about",
  },
  {
    id: 3,
    name: "Services",
    path: "/services",
  },
  {
    id: 4,
    name: "Contact",
    path: "/contact",
  },
  {
    id: 5,
    name: "Blog",
    path: "/blog",
  },
];
// no 2 way
const Navbar = () => {
  return (
    <ul className="flex">
      {navItems.map((navitem) => (
        <li>
          <a className="mr-10" href={navitem.path}>
            {navitem.name}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Navbar;
