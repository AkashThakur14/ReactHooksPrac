import React , {useState} from 'react'

export const UseStateObject = () => {
    const [myObject , setMyObject] = useState({
        myName:"Akash", myAge:24, degree:"MCA",
    });

const changeObjData = () =>{
setMyObject({...myObject, myName:"Akash Thakur"});
}
    return (
        <>
            <section className="hero-container text-center bg-secondary bg-gradient">
                <h2 className='btn btn-success'>Name:{myObject.myName} & Age: {myObject.myAge} & Degree: {myObject.degree}</h2>
                <button className='btn btn-danger' onClick={changeObjData}>Update</button>
            </section>

        </>
    )
}