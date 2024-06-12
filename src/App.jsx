import AppContent from "./components/AppContent";
import AppHeader from "./components/AppHeader";
import PageTitle from "./components/PageTitle";
import TodoModal from "./components/TodoModal";
import "./styles.css";
import styles from './styles/modules/app.module.scss'

export default function App() {
  return (
    <div className="container">
      <PageTitle>TODO list</PageTitle>
      <div className={styles.app__wrapper}>
      <AppHeader />
      <AppContent />
      <TodoModal />
      </div>
    </div>
  );
}