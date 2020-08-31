import React from 'react';
import Avatar from './Components/Avatar/Avatar';
import Message from './Components/Message/Message';
import NameWithHandle from './Components/NameWithHandle/NameWithHandle';
import Time from './Components/Time/Time';
import { CommentButton, ShareButton, LikeButton, RetweetButton } from './Components/Buttons/Buttons'

import './Tweet.css';

function Tweet() {
  return (
    <div className="tweet">
      <Avatar />
      <div className="content">
        <NameWithHandle /> <Time />
        <Message />
        <div className="button">
          <CommentButton />
          <RetweetButton />
          <LikeButton />
          <ShareButton />
        </div>
      </div>
    </div>
  )
}


export default Tweet;
