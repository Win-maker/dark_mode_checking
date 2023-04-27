import React from 'react'
import '../App.css'
const Main = (props) => {
  return (
      <main className={props.darkMode ? "dark" : ""}>
          <h1 className='main--title'>Fun Facts About Reacts</h1>
          <ul className='main--facts'>
              <li>Was Released In 2013</li>
              <li>Was Originally Created By Jordan Walker</li>
              <li>Has Well Over 100k stars On GitHub</li>
              <li>Is Maintained By Facebook</li>
              <li>Powered Thousands Of Enterprise Apps, Including Mobile Apps</li>
          </ul>
          
    </main>
  )
}

export default Main