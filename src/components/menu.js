import React from "react";
import "./menu.css";

const Menu = () => {
  return (
    <React.Fragment>
      <header class="page-header">
        <input id="menu-toggle-input" type="checkbox" />
        <label class="menu-toggle" for="menu-toggle-input">
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
        </label>

        <nav className="menu">
          <ol>
            <li className="menu-item">
              <a href="/">Home</a>
            </li>
            <li className="menu-item">
              <a href="/">About</a>
            </li>
            <li className="menu-item">
              <a href="/">Widgets</a>
              <ol className="sub-menu">
                <li className="menu-item">
                  <a href="/">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Big Widgets
                  </a>
                </li>
                <li className="menu-item">
                  <a href="/">Bigger Widgets</a>
                </li>
                <li className="menu-item">
                  <a href="/">Huge Widgets</a>
                </li>
              </ol>
            </li>
            <li className="menu-item">
              <a href="/">Kabobs</a>
              <ol className="sub-menu">
                <li className="menu-item">
                  <a href="/">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Shishkabobs
                  </a>
                </li>
                <li className="menu-item">
                  <a href="/">BBQ kabobs</a>
                </li>
                <li className="menu-item">
                  <a href="/">Summer kabobs</a>
                </li>
              </ol>
            </li>
            <li className="menu-item">
              <a href="/">Contact</a>
            </li>
          </ol>
        </nav>
      </header>

      <section className="page-content">
        <h1 className="page-title">CSS3 BOX MENU DESIGN</h1>
        <p>Click the toggle in the top left corner to see it in action </p>
      </section>
    </React.Fragment>
  );
};

export default Menu;
