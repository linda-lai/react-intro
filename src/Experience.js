import React from 'react';

const Experience = (props) => {
    return (
     <div>
      <h2>{props.company}</h2>
      <h3>{props.title}</h3>
      <a href={props.url}>View {props.name}</a>
     </div>
    )
}

export default Experience;