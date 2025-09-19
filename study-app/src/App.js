import "./App.css";
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

      <TimerBtn/>
    </div>
  );
}

export default App;
