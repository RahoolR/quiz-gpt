import './App.css';
import { useState } from 'react';

const key = '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'
const API_KEY = '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'
function App() {
  const [question, setQuestion] = useState("Question")
  const [optionA, optionB, optionC, optionD] =['a','b','c','d'] 
  //question = ' Hi, Whats your name ?' 
  
  const API_prompt = {
    "model": "text-davinci-003",
    "prompt": "Give me a trivia question with 4 choices and answer in json format\n\nQ: What is the capital city of Italy?\nA:\n{\n    \"question\": \"What is the capital city of Italy?\", \n    \"choices\": [\"Rome\", \"Milan\", \"Naples\", \"Turin\"],\n    \"correctAnswer\": \"Rome\"\n}\nGive me a trivia question with 4 choices and answer in json format\n\nQ: What is the world's largest ocean?\nA: \n{\n    \"question\": \"What is the world's largest ocean?\", \n    \"choices\": [\"Atlantic\", \"Pacific\", \"Indian\", \"Arctic\"],\n    \"correctAnswer\": \"Pacific\"\n}",
    "temperature": 1,
    "max_tokens": 1372,
    "top_p": 1,
    "frequency_penalty": 0,
    "presence_penalty": 0
  }
  
  
  async function openai_api(event){
    console.log("call openapi")
    event.preventDefault()
    await fetch("https://api.openai.com/v1/completions", {
      method : 'POST', 
      headers : {
        "Content-Type" : "application/json",
        "Authorization" : "Bearer " + API_KEY 
      }, 
      body : JSON.stringify(API_prompt)
    }).then((data) => {data.json()
    console.log(data)}).then((data)=> {console.log(data)
    })//.catch((error) => {console.log("error :  " +error)})
  }
  return (
    <div className="App">
      <header className="App-header">
        <form>
          <label >{question}</label>
          
          <br></br>
          <input type = 'radio' id = 'A' name = 'user_answer' value = {optionA}></input>
          <label>{optionA}</label>
          <br></br>
          <input type = 'radio' name = 'user_answer' value = {optionB}></input>
          <label>{optionB}</label>
          <br></br>
          
          <input type = 'radio' name = 'user_answer' value = {optionC}></input> 
          <br></br>
          
          <input type = 'radio' name = 'user_asnwer' value = {optionD}></input>
          <br></br>
          
          <input type = 'submit' onClick={openai_api}></input>
        </form>
      </header>
    </div>
  );
}

export default App;
