// // CreditContext.js
// import React, { createContext, useState } from 'react';

// export const CreditContext = createContext();

// export const CreditProvider = ({ children }) => {
//   const [credits, setCredits] = useState({
//     WN: 100,
//     WI: 100,
//     WB: 100,
//   });

//   const deductCredit = (section) => {
//     setCredits((prevCredits) => ({
//       ...prevCredits,
//       [section]: prevCredits[section] - 1,
//     }));
//   };

//   return (
//     <CreditContext.Provider value={{ credits, deductCredit }}>
//       {children}
//     </CreditContext.Provider>
//   );
// };


import React, { createContext, useState, useEffect } from 'react';

export const CreditContext = createContext();

const CreditProvider = ({ children }) => {
  const [credits, setCredits] = useState({ WN: 100, WI: 100, WB: 100 });

  useEffect(() => {
    const fetchCredits = async () => {
      try {
        const response = await fetch('http://localhost:3001/credits', {
          method: 'GET',
          credentials: 'include',
        });

        if (!response.ok) {
          throw new Error('Failed to fetch credits');
        }

        const data = await response.json();
        setCredits(data.credits);
      } catch (error) {
        console.error('Error fetching credits:', error);
      }
    };

    fetchCredits();
  }, []);

  const deductCredit = async (creditType, amount) => {
    try {
      const response = await fetch('http://localhost:3001/deductCredits', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ creditType, amount }),
        credentials: 'include',
      });

      if (!response.ok) {
        throw new Error('Failed to deduct credits');
      }

      const data = await response.json();
      setCredits(data.credits);
    } catch (error) {
      console.error('Error deducting credits:', error);
    }
  };

  return (
    <CreditContext.Provider value={{ credits, deductCredit }}>
      {children}
    </CreditContext.Provider>
  );
};

export default CreditProvider;
