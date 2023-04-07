// import './index.css'
// import React from 'react'
// import ReactDOM from 'react-dom/client'

// // Don't modify this component
// class Username extends React.Component {
//   state = { value: "" };

//   changeValue(value) {
//     this.setState({ value });
//   }

//   render() {
//     const { value } = this.state;
//     return <h1>{value}</h1>;
//   }
// }

// // Allow user to update their Username.
// // Username component displays when button clicked.
// // UseRef in App and Username component
// function App() {
//   const inputRef = React.useRef(null);
//   const usernameRef = React.useRef(null);

//   function clickHandler() {
//     // Call the function from above, changeValue
//     const inputVal = inputRef.current.value;
//     usernameRef.current.changeValue(inputVal);
//   }

//   return (
//     <div>
//       <button onClick={clickHandler}>Change Username</button>
//       <input type="text" ref={inputRef} />
//       <Username ref={usernameRef} />
//     </div>
//   );
// }

// document.body.innerHTML = "<div id='root'></div>";
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<App />);

// setTimeout(() => {
//   document.querySelector("input").value = "John Doe";
//   document.querySelector("button").click();
// }, 300);

