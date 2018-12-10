import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar'
import Header from './Header'
import Project from './Project'
import Experience from './Experience'
import Footer from './Footer'

const projectArray = [
  {
    name: "Terminal Project",
    description: "myMDb, a search, suggest and save movie app!",
    url: "https://github.com/linda-lai/terminal_app/",
    public: true
  },
  {
    name: "Rails Project",
    description: "Lendr, a two-sided marketplace.",
    url: "https://github.com/linda-lai/Lendr-marketplace",
    public: true
  },
  {
    name: "Holiday Project",
    description: "Welcome to the JavaScript 30!",
    url: "https://github.com/linda-lai/JavaScript30",
    public: false
  }
]

const workExperienceArray = [
  {
    title: "Digital Marketing Specialist",
    company: "Mercedes-Benz",
    url: "https://www.mercedes-benz.com.au/"
  },
  {
    title: "Digital Marketing Assistant",
    company: "Mercedes-Benz",
    url: "https://www.mercedes-benz.com.au/"
  },
]

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Header />
        {
          projectArray.map(project =>
           <Project
            name={project.name}
            description={project.description}
            url={project.url}
            public={project.public}/>)
        }
        {
          workExperienceArray.map(job =>
            <Experience title={job.title}
            company={job.company}
            url = {job.url}/> )
        }
        <Footer />
      </div>
    );
  }
}

export default App;