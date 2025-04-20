import React,{useState} from 'react'

export const ShortCirEval = () => {
const [demo , setDemo] = useState("check check")

  return (
    <>
    <section className="hero-container text-center">
    <h1 className='btn btn-success'>{ demo || 
    <>
    <h1>Test</h1>
    <p>Me kr reha hu</p>
    </>
    }</h1>
    <h1 className='btn btn-success'>{ demo && "Thakur" }</h1>
    </section>
    
    </>
  )
}

