import './index.css'
import ConfigurationContext from '../../context/ConfigurationContext'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value

      return (
        <div className="config-container">
          <div className="config-content-container">
            <h1 className="config-layout-title">Layout</h1>
            <ul className="config-list-container">
              <li className="config-list-item">
                <input
                  type="checkbox"
                  id="content"
                  checked={showContent}
                  onChange={onToggleShowContent}
                />
                <label htmlFor="content" className="config-label">
                  Content
                </label>
              </li>
              <li className="config-list-item">
                <input
                  type="checkbox"
                  id="leftNavbar"
                  checked={showLeftNavbar}
                  onChange={onToggleShowLeftNavbar}
                />
                <label htmlFor="leftNavbar" className="config-label">
                  Left Navbar
                </label>
              </li>
              <li className="config-list-item">
                <input
                  type="checkbox"
                  id="rightNavbar"
                  checked={showRightNavbar}
                  onChange={onToggleShowRightNavbar}
                />
                <label htmlFor="rightNavbar" className="config-label">
                  Right Navbar
                </label>
              </li>
            </ul>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)
export default ConfigurationController
