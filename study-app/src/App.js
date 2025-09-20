import "./App.css";
import ChatG_Main from "./Components/ChatGptQst/ChatG_Main";
import Main from "./Components/HakerrankQst/Main";
import TimerBtn from "./Components/TimerBtn";
import UserCard from "./Components/UserCard";

let data = {
  name: "John Doe",
  age: 28,
  skills: ["React", "Node", "CSS"],
};
function App() {
  return (
    <div className="App">
      {/* <UserCard data={data} /> */}

      {/* <TimerBtn/> */}


      {/* <h1>hakerRank</h1> */}
      {/* <Main/> */}


      {/* <h1>Chat GPT Qst</h1> */}
      <ChatG_Main/>
    </div>
  );
}

export default App;
