import { SentimentWidget } from "./pages/SentimentWidget";
import { ThemeToggle } from "./components/ThemeToggle";
import "./App.css";

const App = () => {
  return (
    <>
      <ThemeToggle />
      <SentimentWidget />
    </>
  );
};

export default App;
