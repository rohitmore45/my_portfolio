import styles from './App.module.css'
import MyDetails from './components/details/MyDetails';
import Content from './components/sectionArea/Content';
function App() {
  return (
    <>
    <main className={`${styles.main}`}>
      <section className={`${styles.section1}`}><MyDetails /></section>
      <section className={`${styles.section2}`}><Content /></section>
    </main>
    </>
  );
}

export default App;
