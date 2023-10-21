import "./App.css";
import Input from "./components/Input";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <div className="inputs">
        <Input title={"Questions"} />
        <Input title={"Answers"} />
      </div>
    </>
  );
}

export default App;
