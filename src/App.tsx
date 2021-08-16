import './App.css';
import Button from "./components/Button/Button";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Login page
        </p>
        <Button
          borderColor="none"
          borderWidth="none"
          borderRadius = "5px"
          background="#003764"
          color="#fff"
          height = "50px"
          onClick={() => console.log("You clicked on the pink circle!")}
          width = "315px"
          children = "Login"
          fontSize = "24px"
          className = "storybook-button"
        />
        <Button
          borderColor="#003764"
          borderRadius="5px"
          borderWidth = "1px"
          background="#fff"
          color="#003764"
          height = "50px"
          onClick={() => console.log("You clicked on the pink circle!")}
          width = "315px"
          children = "Cancel"
          fontSize = "24px"
          className = "storybook-button--secondary"
        />
      </header>
    </div>
  );
}

export default App;
