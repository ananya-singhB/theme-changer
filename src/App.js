import MainPage from "./main-page";
import { ThemeProvider } from "./react-contxt";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <MainPage />
      </ThemeProvider>
    </div>
  );
}
