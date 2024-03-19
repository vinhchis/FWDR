import React from "react";
import ReactDOM from "react-dom";

/* Destructring Props  */
// function Welcome({ name }) {
//   return (
//     <section>
//       <h1>
//         Hello, <span>{name}</span> 🎉🎉
//       </h1>
//     </section>
//   );
// }

// ReactDOM.render(
//   <Welcome name="Haha"/>,
//   document.getElementById("myApp")
// )

/* Higher Order Componenet */
// const Text = ({ style = {} }) => (
//   <p style={{ ...style, fontFamily: "Inter" }}>Hello world!</p>
// ); // existing component

// function withStyles(Component) {
//   return (props) => {
//     const style = {
//       color: "red",
//       fontSize: "2em",
//       // Merge props
//       ...props.style,
//     };

//     return <Component {...props} style={style} />;
//   };
// }

// const StyledText = withStyles(Text); // new Component

// function App() {
//   return (
//     <div>
//       <Text />
//       <StyledText />
//     </div>
//   );
// }

// ReactDOM.render(<App />, document.getElementById("myApp"));

/* 1.Expression */
// import TestExp from "./ex01_expression.jsx"

// ReactDOM.render(
//   TestExp,
//   document.getElementById("myApp")
// )

/* 2.Function */
// import TestFunc from "./ex02_function"

// ReactDOM.render(
//   <TestFunc/>,
//   document.getElementById("myApp")
// )

/* 3.Class */
// import TestClass from "./ex03_class"

// ReactDOM.render(
//   <TestClass/>,
//   document.getElementById("myApp")
// )

/* 4.State */
// import TestState from "./ex04_state"

// ReactDOM.render(
//   <TestState/>,
//   document.getElementById("myApp")
// )

/* 5.Props in Function */
// import TestProps from "./ex05_props-func";

// ReactDOM.render(
//   TestProps,
//   document.getElementById("myApp")
// )

/* 6. Props in Function */
// import TestProps from "./ex06_props-class";

// ReactDOM.render(
//   TestProps,
//   document.getElementById("myApp")
// )

/* 7. internal CSS */
// import TestStyle from "./ex07_css_internal";

// ReactDOM.render(
//   TestStyle,
//   document.getElementById("myApp")
// )

/* 8. External CSS */
// import TestStyle from "./ex08_css_external";

// ReactDOM.render(
//   TestStyle,
//   document.getElementById("myApp")
// )

/* 9. Event  */
// import GetEvent from "./ex09_Event";

// ReactDOM.render(
//   <GetEvent/>,
//   document.getElementById("myApp")
// )

/* 10. Event with parmas */
// import GetEvent from "./ex10_event-params";

// ReactDOM.render(
//   <GetEvent/>,
//   document.getElementById("myApp")
// )

/* 11. UseState */
// import GetTask from "./ex11_useState";

// ReactDOM.render(
//   <GetTask/>,
//   document.getElementById("myApp")
// )

/* 12. UseState + Effect */
import GetTask from "./ex12_useEffect";

ReactDOM.render(<GetTask/>, document.getElementById("myApp"));

