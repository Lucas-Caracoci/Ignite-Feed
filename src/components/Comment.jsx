import React, { useState } from 'react';
import styles from './Comment.module.css'
import { ThumbsUp, Trash } from 'phosphor-react';
import Avatar from './Avatar';

const Comment = ({ content, onDeleteComment }) => {

    const [likes , setLikes] = useState(0)

   
    function handleDeleteComment() {

        onDeleteComment(content)
    }

    return (
        <div className={styles.comment}>
            <Avatar commentAvatar={true} src="https://imagedelivery.net/LBWXYQ-XnKSYxbZ-NuYGqQ/2cb9dc9b-dad0-4be8-3800-d787439e8500/avatarhd" alt="" />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Lucas Caracoci</strong>
                            <time title='27 de março as 11:53' dateTime="2025-03-27 11:53:34">há 1h atrás</time>
                        </div>
                        <button title='deletar comentário' onClick={handleDeleteComment}>
                            <Trash size={24} />
                        </button>
                    </header>
                    <p>{content}</p>
                </div>
                <footer>
                    <button onClick={(e) => setLikes(likes + 1)}>
                        <ThumbsUp size={24} />
                        Aplaudir <span>{likes}</span>
                    </button>
                </footer>
            </div>
        </div>
    );
}

export default Comment;
