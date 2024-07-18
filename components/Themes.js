import { useContext } from "react"
import { ThemeContext } from "./ThemeContext"

export default function Themes() {
  const {colorTheme, handleClick} = useContext(ThemeContext);

  return (
    <div>
      <div className={`app ${colorTheme}`}>
        <div className="theme-options">
          <div id="theme-black" 
            onClick={() => handleClick('theme-black')}
            className={`${colorTheme === 'theme-black' ? 'active' : ''}`}
          />
          <div id="theme-pink" 
            onClick={() => handleClick('theme-pink')}
            className={`${colorTheme === 'theme-pink' ? 'active' : ''}`}
          />
          <div id="theme-deep-purple" 
            onClick={() => handleClick('theme-deep-purple')}
            className={`${colorTheme === 'theme-deep-purple' ? 'active' : ''}`}
          />

          <div id="theme-blue" 
            onClick={() => handleClick('theme-blue')}
            className={`${colorTheme === 'theme-blue' ? 'active' : ''}`}
          />
          <div id="theme-green" 
            onClick={() => handleClick('theme-green')}
            className={`${colorTheme === 'theme-green' ? 'active' : ''}`}
          />
          <div id="theme-lime" 
            onClick={() => handleClick('theme-lime')}
            className={`${colorTheme === 'theme-lime' ? 'active' : ''}`}
          />

          <div id="theme-deep-orange" 
            onClick={() => handleClick('theme-deep-orange')}
            className={`${colorTheme === 'theme-deep-orange' ? 'active' : ''}`}
          />
          <div id="theme-brown" 
            onClick={() => handleClick('theme-brown')}
            className={`${colorTheme === 'theme-brown' ? 'active' : ''}`}
          />
          <div id="theme-grey" 
            onClick={() => handleClick('theme-grey')}
            className={`${colorTheme === 'theme-grey' ? 'active' : ''}`}
          />
           <div id="theme-blue-grey" 
            onClick={() => handleClick('theme-blue-grey')}
            className={`${colorTheme === 'theme-blue-grey' ? 'active' : ''}`}
          />
        </div>
      </div>
    </div>
  )
}
