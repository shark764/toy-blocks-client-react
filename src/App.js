import configureStore from "./store/configureStore";
import Root from "./components/Root";
import "./styles/styles.css";

const store = configureStore();
function App() {
  return <Root store={store} />;
}

export default App;
