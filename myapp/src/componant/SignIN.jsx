import React from 'react'
import { useState } from 'react'
import "./signin-signup.css"
import { Link, Navigate, useNavigate } from 'react-router-dom'
import  { useContext } from 'react'
import { userContext } from '../App'


export default function SignIN() {
   const navigate = useNavigate()
  let [userdata, setUserdata] = useContext(userContext);

  const [user, setUser] = useState({
    email: "",
    password: ""

  })

  // handle input changes
  const changeHandler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  // Handle form submission 
  const submitHandler = (e) => {
    e.preventDefault()
    console.log("user Registred", user);


    fetch("https://nav-rpzi.onrender.com/signin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user)
    })

      .then(res => res.json())
      .then(data => {
        console.log("Signup Successfully", data);
        if (data.msg != "register first!") {

          setUserdata(data.data)
          console.log(userdata);
          navigate("/")
        }
        else {
          alert(data.msg)
           navigate("/signup")
        }
      })
      .catch(err => console.log("Signup error", err))

    // Clear from after submision
    setUser({ email: "", password: "" })

  }



  return (
    <>
      <div className='form-conatiner'>
        <h1>LOGIN</h1>

        <form onSubmit={submitHandler} >

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
          <button type='submit' className='signupbtn'>LOGIN</button>
        </form>

        <p>if you forgot password then <Link to={"/signup"}>signUp</Link> here</p>

      </div>

    </>
  )
}

