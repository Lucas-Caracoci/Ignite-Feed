import styles from './Sidebar.module.css'
import {PencilLine} from 'phosphor-react'
const Sidebar = () => {
    return (
        <aside className={styles.sidebar}>
           <img className={styles.cover} src="https://images.unsplash.com/photo-1522383225653-ed111181a951?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />

          <div className={styles.profile}>
            <img className={styles.avatar} src="https://i.pinimg.com/736x/d2/b0/24/d2b024ccc1e01523f0b1d197e305b2ae.jpg" alt="" />
            <strong> Lucas Caracoci</strong>
            <span>Front End Developer</span>
          </div>

          <footer>
            <a href="#">
               <PencilLine
                size={20}
               /> Editar Seu Perfil
            </a>
          </footer>
        </aside>
    );
}

export default Sidebar;
