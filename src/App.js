import "./App.css";
import Input from "./components/Input";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <Input title={"Questions"} />
      <Input title={"Answers"} />
    </>
  );
}

export default App;
