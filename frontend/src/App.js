// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


// src/App.js
// import React from 'react';
// import SearchComponent from './component/SearchFoodItems';

// const App = () => {
//     return (
//         <div>
//             <SearchComponent />
//         </div>
//     );
// };

// export default App;


// frontend/src/App.js
import React from 'react';
// import SearchFoodItems from './component/SearchFoodItems';
import FoodItemsTable from './component/FoodItemsTable';

function App() {
  return (
    <div className="App">

      <FoodItemsTable/>
    </div>
  );
}

export default App;
