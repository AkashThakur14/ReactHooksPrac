import React, { useState } from 'react'

export const UseStateArray = () => {

  const bioData = [
    {
      id: 0, myName: "Akash Singh", age: 24,
    },
    {
      id: 1, myName: "Test Singh", age: 26,
    },
    {
      id: 2, myName: "Rohit", age: 23,
    },

  ]

  console.log(bioData);

  const [myArray, setMyArray] = useState(bioData)

  const clearArray = () => {
    setMyArray([]);
  }

  const removeEle = (id) => {
   const myNewArray = myArray.filter((currentElement) => {
    return(
      currentElement.id != id
    )
   })
   setMyArray(myNewArray)
  }
  return (
    <>
      <section className="hero-container text-center">
        {
          myArray.map((curEle) => {
            return (
              <h2 className='btn btn-success' key={curEle.id}>Name: {curEle.myName} and Age: {curEle.age}
                <button className='btn btn-danger' onClick={() => removeEle(curEle.id)}>Remove</button>
              </h2>
            )
          })
        }
        <button className='btn btn-danger' onClick={clearArray}>Clear</button>
      </section>
    </>
  )
}

