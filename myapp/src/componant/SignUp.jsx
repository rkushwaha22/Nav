import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "./signin-signup.css"


export default function SignUp() {
    const navigate = useNavigate()
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        phone: ""
    })
    // handle input changes
    const changeHandler = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    // Handle form submission 
    const submitHandler = (e) => {
        e.preventDefault()
        console.log("user Registred", user);

        // optionally send data to backend (NodeJs /json Api)
        fetch("http://localhost:3005/signup", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(user)
        })

            .then(res => res.json())
            .then(data => {
                console.log("Signup Successfully", data)
                alert(data.msg)
            })
            .catch(err => console.log("Signup error", err))
            navigate("/signin")

        // Clear from after submision
        setUser({ name: "", email: "", password: "", phone: "" })

    }

    return (
        <>
            <div className='form-conatiner'>
                <h1>REGISTER</h1>

                <form onSubmit={submitHandler} >
                    <input type="text"
                        name='name'
                        value={user.name}
                        placeholder='Full Name'
                        onChange={changeHandler}
                        required

                    />
                    <br />

                    <input type="email"
                        name='email'
                        value={user.email}
                        placeholder='Email Address'
                        onChange={changeHandler}
                        required

                    />
                    <br />

                    <input type="password"
                        name='password'
                        value={user.password}
                        placeholder='Password'
                        onChange={changeHandler}
                        required

                    />
                    <br />

                    <input type="text"
                        name='phone'
                        value={user.phone}
                        placeholder='Phone Number'
                        onChange={changeHandler}
                        required

                    />
                    <br />

                    <button type='submit' className='signupbtn'>SignUp</button>

                    <p>Alredy have an account? <Link to={"/signin"}>Login</Link> here</p>
                </form>

            </div>
        </>
    )
}
