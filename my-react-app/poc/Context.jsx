// import React, { createContext, useState, useContext } from "react";

// // Create a context
// const StoreApnaBazaar = createContext("Hello");
// console.log(StoreApnaBazaar);

// // data to be putinside store

// const data = {
//   dal: "10kg",
//   rice: "100kg",
//   rajma: "5kg",
// };
// function Context() {
//   //Wrapping the topmost component of react with the  store and provideing data of our store
//   return (
//     <StoreApnaBazaar.Provider value={data}>
//       <Grandparant />
//     </StoreApnaBazaar.Provider>
//   );
// }

// export default Context;

// function Grandparant() {
//   let [name, setName] = useState("Interviewbit");
//   console.log("Grandparent is rendering");

//   return (
//     <>
//       <h3>Grandparent</h3>
//       <div>|</div>
//       <Parent1 name={name} setName={setName} />
//     </>
//   );
// }

// function Parent1({ name, setName }) {
//   console.log("Parent1 is rendering");
//   return (
//     <>
//       <h3>Parent1</h3>
//       <div>|</div>
//       <Parent2 name={name} setName={setName} />
//     </>
//   );
// }

// function Parent2({ name, setName }) {
//   console.log("Parent2 is rendering");
//   return (
//     <>
//       <h3>Parent2</h3>
//       <div>|</div>
//       <Child name={name} setName={setName} />
//     </>
//   );
// }

// function Child({ name, setName }) {
//   console.log("Child is rendering");

//   // Consume the context
//   //   let { name, setName } = useContext(StoreApnaBazaar);
//   const items = useContext(StoreApnaBazaar);
//   return (
//     <>
//       <h3>Child</h3>
//       <div>|</div>
//       <p>{name}</p>
//       <p>{items.rice}</p>
//       <button onClick={() => setName("Scaler")}>Change Name</button>
//     </>
//   );
// }
