import React from 'react'
import './Buttons.css'

const CommentButton = () => <i className="far fa-comment" />;
const RetweetButton = () => <i className="fa fa-retweet retweet-button" />;
const LikeButton = () => <i className="fa fa-heart like-button" />;
const ShareButton = () => <i className="fas fa-external-link-alt" />;


export {CommentButton, RetweetButton, LikeButton, ShareButton}