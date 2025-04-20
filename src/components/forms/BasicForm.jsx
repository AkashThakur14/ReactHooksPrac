import React, { useState } from 'react'

export const BasicForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [allEntry, setAllEntry] = useState([]);

    const submitForm = (e) => {
        e.preventDefault();
        const newEntry = { email: email, password: password };
        setAllEntry([...allEntry, newEntry]);
        console.log(allEntry)
    }


    return (
        <>
            <section className="hero-container text-center">
                <form action="" onSubmit={submitForm}>
                    <input type="email" name="email" id="email" placeholder='Enter Email' autoComplete='off' value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input type="password" name="password" id="password" placeholder='Enter your password' autoComplete='off' value={password} onChange={(e) => setPassword(e.target.value)} />
                    <button type='submit'>Submit</button>
                </form>
                <div>
                    {
                        allEntry.map((curEle) => {
                            return (
                                <div className='showData' >
                                    <p>{curEle.email}</p>
                                    <p>{curEle.password}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </section>

        </>
    )
}

