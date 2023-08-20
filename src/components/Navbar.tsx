
import './Navbar.css';

function Navbar() {
  return (
    <>
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <a href="/temp/" className="navbar-link">Home</a>
        </li>
        <li className="navbar-item">
          <a href="/temp/projects" className="navbar-link">Projects</a>
        </li>
        <li className="navbar-item">
          <a href="#" className="navbar-link">Resume</a>
        </li>
      </ul>
    </nav>
    </>
  );
}

export default Navbar;