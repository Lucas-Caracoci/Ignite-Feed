import { format, formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale';

import styles from './Post.module.css';

import Comment from './Comment';
import Avatar from './Avatar';

import { useState } from 'react';


const Post = ({author,content,publishedAt}) => {

    const [comments, setComments] = useState([])

    const [newCommentText, setNewCommentText] = useState('')

      function handleCreateNewComment(){
        event.preventDefault()
        
        setComments([...comments, newCommentText])
        clearCommentArea()
        
      }
      function clearCommentArea(){
        setNewCommentText('')
      }

    const formattedData = format(publishedAt, "dd 'de' LLLL 'as' HH:mm'h'",{
        locale:ptBR,
    })

    const postDataToNow = formatDistanceToNow(publishedAt,{
        locale:ptBR,
        addSuffix:true,
    })

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl} />
                    <div className={styles.authorInfo}>
                        <strong> {author.name}</strong>
                        <span>{author.role}</span>
                    </div>

                </div>
                <time title={formattedData} dateTime={publishedAt.toISOString()}> {postDataToNow}</time>
                
            </header>
            <div className={styles.content}>
                {content.map(line => {
                        if (line.type === 'paragraph'){
                            return <p key={line.content}>{line.content}</p>
                        }else if (line.type === 'link'){
                            return <p key={line.content}><a href=''>{line.content}</a></p>
                        }
                                
                        })}
            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe seu Feedback</strong>
                <textarea
                    onChange={(e) => setNewCommentText(e.target.value)}
                    value={newCommentText}
                    placeholder='Deixe um comentário'
                />
                <footer>
                    <button type="submit">Publicar</button>

                </footer>
            </form>
            <div className={styles.commentList}>

            {comments.map(comment =>{
                return <Comment key={comment} content={comment}/>

            })}
            </div>
        </article>
    );
}

export default Post;
