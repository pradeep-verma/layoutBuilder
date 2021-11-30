import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value

      return (
        <div className="body-container">
          {showLeftNavbar && (
            <div className="body-left-navbar-container">
              <h1 className="body-title">Left Navbar Menu</h1>
              <ul className="body-left-navbar-list">
                <li className="body-left-navbar-list-item">
                  <p className="body-text">Item 1</p>
                </li>
                <li className="body-left-navbar-list-item">
                  <p className="body-text">Item 2</p>
                </li>
                <li className="body-left-navbar-list-item">
                  <p className="body-text">Item 3</p>
                </li>
                <li className="body-left-navbar-list-item">
                  <p className="body-text">Item 4</p>
                </li>
              </ul>
            </div>
          )}
          {showContent && (
            <div className="body-content-container">
              <h1 className="body-title">Content</h1>
              <p className="body-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliuaa. Ut
                enim ad minim veniam.
              </p>
            </div>
          )}
          {showRightNavbar && (
            <div className="body-right-navbar-container">
              <h1 className="body-title">Right Navbar</h1>
              <ul className="body-right-navbar-list">
                <li className="body-right-navbar-list-item">
                  <p className="body-right-text"> Ad 1</p>
                </li>
                <li className="body-right-navbar-list-item">
                  <p className="body-right-text"> Ad 2</p>
                </li>
              </ul>
            </div>
          )}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)
export default Body
