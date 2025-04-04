import { format, formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale';

import styles from './Post.module.css';

import Comment from './Comment';
import Avatar from './Avatar';


const Post = ({author,content,publishedAt}) => {

    const comments = [
        {content: textoasidasfd}
      ]

      var nome = 'lucas'

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
                            return <p>{line.content}</p>
                        }else if (line.type === 'link'){
                            return <p><a href=''>{line.content}</a></p>
                        }
                                
                        })}
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu Feedback</strong>
                <textarea
                    placeholder='Deixe um comentário'
                />
                <footer>
                    <button type="submit">Publicar</button>

                </footer>
            </form>
            <div className={styles.commentList}>

            {comments.map(comment =>{
                return <Comment/>

            })}
            </div>
        </article>
    );
}

export default Post;
