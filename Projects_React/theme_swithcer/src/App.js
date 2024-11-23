import "./App.css";
import { useTheme } from "./ThemeContext";
import Header from "./components/Header";
import Page from "./components/Page";

function App() {
  const { theme } = useTheme();
  return (
    <div
      className="App"
      style={{
        backgroundColor: theme === "light" ? "white" : "black",
      }}
    >
      <Header />
      <Page />
    </div>
  );
}

export default App;