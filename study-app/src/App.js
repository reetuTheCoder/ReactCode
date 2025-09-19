import "./App.css";
import UserCard from "./Components/UserCard";

let data = {
  name: "John Doe",
  age: 28,
  skills: ["React", "Node", "CSS"],
};
function App() {
  return (
    <div className="App">
      <UserCard data={data} />
    </div>
  );
}

export default App;
