import React from 'react';
import './index.css';

const Message = (props) => {
  const showGh = props.gitHubUrl ? 'visible' : 'hidden';
  const showLive = props.liveUrl ? 'visible' : 'hidden';

  return (
      <div id="message-box">
        <h2>{props.title}</h2>
        <a href={props.gitHubUrl} target="_blank" rel="noopener noreferrer" style={{visibility: showGh}}>GitHub</a>
        <a href={props.liveUrl} target="_blank" rel="noopener noreferrer" style={{visibility: showLive}}>Live</a>
        <div id="message-body">{props.text}</div>
      </div>
  );
};

export default Message;
