import React, { useState } from 'react';

const DeveloperPage = () => {
   const [vouchCount, setVouchCount] = useState(0);

   return (
       <div className="app-container">
           <h1>Developer Page</h1>
           {/* Developer information */}
           <p>Name: Vian Paolo P. Palacio</p>

           {/* Vouch button */}
           <button onClick={() => setVouchCount(vouchCount + 1)}>
               Vouch for Developer ({vouchCount})
           </button>
       </div>
   );
};

export default DeveloperPage;
