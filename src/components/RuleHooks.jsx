// 1. Always write it inside the component or function
// 2. Component name must be PascalCase (first letter should be uppercase )
// 3. We can directly import or we can directly write it using React.hookName.
// 4. Dont't call Hooks inside loops, conditions or nested function.

import React, { useState } from "react";

export const RuleHooks = () => {

const [myName,setMyName] = useState("Thakur") ;   

  return (
    <>
      <section className="hero-container text-center bg-info">
        <h1>{myName}</h1>
      </section>
    </>
  );
};
