import React from 'react';

const Project = (props) => {
    console.log(props.description);
    return (
     <div>
      <h1>{props.name}</h1>
      <p>{props.description}</p>
      <a href={props.url}>View {props.name} in GitHub</a>
     </div>
    )
}

export default Project;