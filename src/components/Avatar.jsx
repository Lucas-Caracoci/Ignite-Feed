import styles from './Avatar.module.css'
const Avatar = ({src, commentAvatar}) => {
    return (
        <div>
             <img className={commentAvatar ? styles.commAvatar : styles.avatar} src={src} alt="" />
        </div>
    );
}

export default Avatar;
