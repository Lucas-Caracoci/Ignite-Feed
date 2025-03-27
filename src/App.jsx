import Header from "./components/Header"
import styles from './App.module.css'
import Sidebar from "./components/Sidebar"

function App() {


  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta expedita facere mollitia laboriosam corporis sapiente dolorum magnam iure aliquid molestias incidunt quasi eveniet, deserunt quod nemo quaerat suscipit inventore dolore.
        </main>
      </div>
    </>
  )
}

export default App
