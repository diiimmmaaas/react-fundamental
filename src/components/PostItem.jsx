import React from 'react';
import MyButton from "./UI/button/MyButton";
import {useNavigate} from "react-router-dom";
const PostItem = ({number, post, remove}) => {
  const navigate = useNavigate()

  const onRedirect = () => {
    navigate(`/posts/${post.id}`)
  }

  return (
    <div className="post">
      <div className="post__content">
        <strong>{post.id}. {post.title}</strong>
        <div>
          {post.body}
        </div>
      </div>
      <div className="post__btns">
        <MyButton onClick={onRedirect}>Открыть</MyButton>
        <MyButton onClick={() => remove(post)}>Удалить</MyButton>
      </div>
    </div>
  );
};

export default PostItem;
