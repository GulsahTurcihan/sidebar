import { social, links } from "../data";
import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "./Context";
import logo from "../logo.svg";

const Sidebar = () => {
  const { isSideBarOpen, closeSideBar} = useGlobalContext();

  return (
    <aside className={isSideBarOpen ? 'sidebar show-sidebar' : 'sidebar'}>
      <div className="sidebar-header">
        <img src={logo} alt="" className="logo" />
        <button className="close-btn" onClick={closeSideBar}>
          <FaTimes />
        </button>
      </div>
      <ul className="links">
        {links.map((link) => {
          const { id, url, text, icon } = link;
          return (
            <li key={id}>
              <a href={url}>
                {icon} {text}
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="social-links">
        {social.map((link) => {
          const { url, id, icon } = link;
          return (
            <li key={id}>
              <a href={url}>
                {icon}
              </a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default Sidebar;
