import React, { useState } from 'react'
import './App.css';
import projects from './projectInfo'
import { FaAngleDoubleRight } from 'react-icons/fa'

function App() {
  const [value, setValue] = useState(0);
  const {tool, date, process, name, github, picture} = projects[value]
  return (
    <section className="section">
      <div className="title">
        <h2>My favorite projects</h2>
        <div className="underline"></div>
      </div>
      <div className="projects-center">

        <div className='btn-container'>
          {projects.map((project,index) => {
              return <button key={project.id} onClick={() => setValue(index)} className={`project-btn ${index === value && 'active-btn'} `}>{project.tool}</button>
          })}
        </div>

        <article className="project-info">
          <h3>{name}</h3>
          <h4>{tool}</h4>
          <br></br>
          <h4><a target='_blank' rel='noopener noreferrer' href={github}>Github Repo Link</a></h4>
            
          <p className="project-date">{date}</p>
          {process.map((p, index) => {
            return (
              <div key={index} className="project-desc">
                <FaAngleDoubleRight className="project-icon"></FaAngleDoubleRight>
                <p>{p}</p>
              </div>
            )
                       
          })}        

         {name !=='Jesus\'s Portfolio' ? <img src={picture} alt='oops' width={1000} height={800} /> : '' }  
        </article>

      </div>
      
    </section>
  )

}

export default App
