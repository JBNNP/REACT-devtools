import React from 'react';
import Avatar from './Avatar';
import Details from './details';

function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{props.name}</h2>
        <Avatar image={props.img} />
      </div>
      <Details tel={props.tel} email={props.email} />
    </div>
  );
}

export default Card;
