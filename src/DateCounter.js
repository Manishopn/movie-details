// import { useReducer, useState } from "react";

// const initialState = {count : 0, step: 1};
// function reducer (state, action){
//   console.log(state, action)
//   return state + action;
//   switch(action.type){
//     case "dec":
//       return {...state, count: state.count - state.step} ;
//     case "inc": 
//       return {...state, count: state.count + state.step};
//     case "setcount":
//       return {...state, count: action.payload}
//     case "setStep":
//       return {...state, step: action.payload}
//     case "reset":
//       return 
//     default:
//       throw new Error("Unknown");

//   }
// }

// function DateCounter() {

  

//   const [count , dispach] = useReducer(reducer, initialState)
//    // const [count, setCount] = useState(0);
//   const [step, setStep] = useState(1);

//   // This mutates the date object.
//   const date = new Date("june 21 2027");
//   date.setDate(date.getDate() + count);

//   const dec = function () {
//     dispach({type: "dec"})
   
   
//   };

//   const inc = function () {
//     dispach({type : "inc"})
    
//   };

//   const defineCount = function (e) {
//     dispach({type : "setcount", payload: Number(e.target.value)})
    
//   };

//   const defineStep = function (e) {
//    dispach({type : "setStep", payload : Number(e.target.value)})
//   };

//   const reset = function () {
//     dispach({type: "reset"})
//   };

//   return (
//     <div className="counter">
//       <div>
//         <input
//           type="range"
//           min="0"
//           max="10"
//           value={step}
//           onChange={defineStep}
//         />
//         <span>{step}</span>
//       </div>

//       <div>
//         <button onClick={dec}>-</button>
//         <input value={count} onChange={defineCount} />
//         <button onClick={inc}>+</button>
//       </div>

//       <p>{date.toDateString()}</p>

//       <div>
//         <button onClick={reset}>Reset</button>
//       </div>
//     </div>
//   );
// }
// export default DateCounter;
