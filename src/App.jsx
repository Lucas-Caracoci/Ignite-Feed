import Header from "./components/Header"
import styles from './App.module.css'
import Sidebar from "./components/Sidebar"
import Post from "./components/Post"



function App() {

  const posts =[{
    id:1,
    author:{
      avatarUrl:'https://i.pinimg.com/736x/d2/b0/24/d2b024ccc1e01523f0b1d197e305b2ae.jpg',
      name: 'Lucas Caracoci',
      role:'Front End Developer',

    },
    publishedAt:new Date('2025-04-02 20:00:00'),
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: 'jane.design/doctorcare'},
    ]
  },
  {
    id:2,
    author:{
      avatarUrl:'https://preview.redd.it/ok-i-gotta-know-who-wins-v0-l9v3olrxmbcc1.jpg?width=640&crop=smart&auto=webp&s=d66183057b27c21e3d0110688fc4d2b7eb7a568a',
      name: 'Ramom Crazy',
      role:'Developer',

    },
    publishedAt:new Date('2025-04-02 20:00:00'),
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: 'jane.design/doctorcare'},
    ]
  }
]


 
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          {posts.map(post => {
            return(
              <Post
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })} 
        </main>
      </div>
    </>
  )
}

export default App
