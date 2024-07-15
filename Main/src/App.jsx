// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Dashboard from '../src/Component/dashbord';
// import Login from '../src/Component/login';
// import SignIn from '../src/Component/signin';
// import ManageResellerSection from '../src/Component/ManageResellerSection'; 
// import { CreditProvider } from '../src/Component/CreditContext'; // Import CreditProvider
// import './App.css';

// const App = () => {
//   return (
//     <CreditProvider> {/* Wrap the application with CreditProvider */}
//       <Router>
//         <div className="App">
//           <header className="App-header">
//             <Routes>
//               <Route path="/" element={<Login />} />
//               <Route path="/signin" element={<SignIn />} />
//               <Route path="/dashboard" element={<Dashboard />} />
//               <Route path="/manage-reseller" element={<ManageResellerSection />} />
//             </Routes>
//           </header>
//         </div>
//       </Router>
//     </CreditProvider>
//   );
// };

// export default App;


import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from '../src/Component/dashbord';
import Login from '../src/Component/login';
import SignIn from '../src/Component/signin';
import ManageResellerSection from '../src/Component/ManageResellerSection'; 
import CreditProvider from '../src/Component/CreditContext'; // Corrected import statement
import './App.css';

const App = () => {
  return (
    <CreditProvider> {/* Wrap the application with CreditProvider */}
      <Router>
        <div className="App">
          <header className="App-header">
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/manage-reseller" element={<ManageResellerSection />} />
            </Routes>
          </header>
        </div>
      </Router>
    </CreditProvider>
  );
};

export default App;
