import React from 'react';

const Project = (props) => {
    console.log(props.description);
    if (props.public) {
        return (
         <div>
          <h1>{props.name}</h1>
          <p>{props.description}</p>
          <a href={props.url}>View {props.name} in GitHub</a>
         </div>
        ) 
    } else {
        return null;
    }
}

export default Project;