import React, { useState } from 'react';
import './FacebookComments.css';
import Avatar1 from '../img/avatars/1.jpg';
import Avatar2 from '../img/avatars/2.jpg';
import Avatar3 from '../img/avatars/3.jpg';
import Avatar4 from '../img/avatars/4.png';
import Avatar5 from '../img/avatars/5.jpg';
import Avatar6 from '../img/avatars/6.jpg';
import Avatar7 from '../img/avatars/7.jpg';
import Avatar8 from '../img/avatars/8.png';
import Avatar9 from '../img/avatars/9.png';

function FacebookComments() {
  const initialCommentDetails = [
    {
      name: 'Nath Ryuzaki',
      content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.",
      time: '26m',
      avatar: Avatar1,
      count: '12',
    },
    {
      name: 'Gung Wah',
      content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.",
      time: '26m',
      avatar: Avatar2,
      count: '7',
    },
    {
      name: 'Max Wah',
      content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.",
      time: '26m',
      avatar: Avatar3,
      count: '2',
    },
    {
      name: 'Tony Wah',
      content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.",
      time: '26m',
      avatar: Avatar4,
      count: '27',
    },
    {
      name: 'Maureen Ryz',
      content: "I've tried Clearlift, it works.",
      time: '10:32',
      avatar: Avatar5,
      count: '4',
    },
    {
      name: 'Tina Madrame',
      content: "How does this work? Burns hair from the follicle? I've tried laser hair removal at a clinic & it was perfect for me.",
      time: '9:22',
      avatar: Avatar6,
      count: '9',
    },
    {
      name: 'Valerie DiPetrio',
      content: "Clinic laser hair removal is faster to stop hair growth, Silk'n & Clearlift are about the same.",
      time: '8:12',
      avatar: Avatar7,
      count: '1',
    },
    {
      name: 'Maria Marissa',
      content: "No skin irritation, i've tried 3 of these devices. Hair finally stopped growing back on the armpits & hasn't grown back for a month.",
      time: '4:59',
      avatar: Avatar8,
      count: '24',
    },
    {
      name: 'Eleanor Mouthy',
      content: 'Did anyone try Silk\'n?',
      time: '',
      avatar: Avatar9,
      count: '',
    },
  ];

  const commentsPerPage = 4;
  const [visibleComments, setVisibleComments] = useState(commentsPerPage);
  const [commentDetails, setCommentDetails] = useState(initialCommentDetails);

 

  const handleLoadMoreComments = () => {
    setVisibleComments((prevVisibleComments) => Math.min(prevVisibleComments + commentsPerPage, initialCommentDetails.length));
  };

  const visibleCommentDetails = commentDetails.slice(0, visibleComments);
  const remainingComments = initialCommentDetails.length - visibleComments;

  return (
    <div style={{ textAlign: 'left' }}>
      <div className="container">
        <div className="col-md-12" id="fbcomment">
          <div className="header_comment">
            <div className="row">
              <div className="col-md-6 text-left">
                <span className="count_comment">{/* {initialCommentDetails.length}  */}264,235 Comments</span>
              </div>
            </div>
          </div>

          <div className="body_comment">
            <div className="row">
              <ul id="list_comment" className="col-md-12">
                {visibleCommentDetails.map((comment, index) => (
                  <li key={index} className="box_result row" style={{listStyle: 'none'}}>
                    <div className="avatar_comment col-md-1">
                      <img src={comment.avatar} alt="avatar" />
                    </div>
                    <div className="result_comment col-md-11">
                      <h4>{comment.name}</h4>
                      <p>{comment.content}</p>
                      {comment.time && (
                        <div className="tools_comment">
                          <a className="like" href="/">Like</a>
                          <span aria-hidden="true"> · </span>
                          <a className="replay" href="/">Reply</a>
                          <span aria-hidden="true"> · </span>
                          <i className="fa fa-thumbs-o-up"></i> <span className="count">{comment.count}</span>
                          <span aria-hidden="true"> · </span>
                          <span>{comment.time}</span>
                        </div>
                      )}
                      <ul className="child_replay"></ul>
                    </div>
                  </li>
                ))}
              </ul>

              {remainingComments > 0 && (
                <button className="show_more" type="button" onClick={handleLoadMoreComments}>
                  Load more
                </button>
              )}

              {remainingComments <= 0 && (
                <button className="show_less" type="button" style={{ display: 'none' }}>
                  <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Loading...
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FacebookComments;
