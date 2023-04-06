import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

// Do not change
class Username extends React.Component {
  state = { value: "" };

  changeValue(value) {
    this.setState({ value });
  }

  render() {
    const { value } = this.state;
    return <h1>{value}</h1>;
  }
}

// TODO: Fix App Component.. have Username component display the input text once button is clicked.

// Utilize useRef hook
function App() {
  function clickHandler() {
    // Get the value of user input and set to the state.
    // Call changeValue method from Username
  }

  return (
    <div>
      <input type="text" />
      <button onClick={clickHandler}>Change Username</button>
      <Username />
    </div>
  );
}

document.body.innerHTML = "<div id='root'></div>";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

setTimeout(() => {
  document.querySelector("input").value = "John Doe";
  document.querySelector("button").click();

  setTimeout(() => {
    console.log(document.getElementById("root").innerHTML);
  }, 300);
}, 300);