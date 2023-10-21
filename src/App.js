import "./App.css";
import Input from "./components/Input";
import Header from "./components/Header";
import Button from "./components/Button";
import FlipCard from "./components/FlipCard";
import { useState } from "react";

function App() {
  const [isSubmitted, setSubmitted] = useState(false);
  //const [inputs, setInputs] = useState(null);
  const initial = [
    {
      question: "Are you happy",
      answer: "YAY!",
    },
    {
      question: "Are you sad",
      answer: "nah",
    },
    {
      question: "Are you damn",
      answer: "nah",
    },
  ];

  function handleSubmitted() {
    setSubmitted(!isSubmitted);
  }
  return !isSubmitted ? (
    <>
      <Header />
      <div className="inputs">
        <Input title={"Questions"} />
        <Input title={"Answers"} />
        <Button onSubmitted={handleSubmitted} />
      </div>
    </>
  ) : (
    <FlipCard />
  );
}

export default App;
