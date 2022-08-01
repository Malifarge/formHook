import {useState} from 'react'

function App() {

  // State
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [remember,setRemember] = useState(false)
  const [emailIsValid,setEmailIsValid] = useState(false)
  const [passwordIsValid,setPasswordIsValid] = useState(false)
  const [isSubmited,setIsSubmited] = useState(false)

  const handleEmailChange = (e) =>{
    setEmail(e.target.value)
    const regex = /^[\w\.]+@([\w-]+\.)+[\w-]{2,4}$/
    const mailTest = regex.test(e.target.value)
    const mymail = document.getElementById("exampleInputEmail1")    
    setEmailIsValid(mailTest)
    if(emailIsValid){
      mymail.classList.remove("is-invalid")
      mymail.classList.add("is-valid")
    }else {
      mymail.classList.remove("is-valid")
      mymail.classList.add("is-invalid")
    }
  }

  const handlePasswordChange = (e) =>{
    setPassword(e.target.value)
    const passwordTest = e.target.value.length>5
    const mypassword = document.getElementById("exampleInputPassword1")    
    setPasswordIsValid(passwordTest)
    if(passwordIsValid){
      mypassword.classList.remove("is-invalid")
      mypassword.classList.add("is-valid")
    }else {
      mypassword.classList.remove("is-valid")
      mypassword.classList.add("is-invalid")
    }
  }

  const handleRememberme = (e) =>{
    setRemember(e.target.checked)
  }

  const handleSubmit = e =>{
    e.preventDefault()
    if (emailIsValid && passwordIsValid){
      setIsSubmited(true)
    }
  }

  return (
    <>
    {isSubmited ? <div><p>Welcom <span>{email}</span> </p> </div> : <div className="App">
    <h1>Login</h1>
    <form onSubmit={handleSubmit}>
<div className="mb-3">
  <label for="exampleInputEmail1" className="form-label">Email address</label>
  <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={handleEmailChange}/>
</div>
<div className="mb-3">
  <label for="exampleInputPassword1" className="form-label">Password</label>
  <input type="password" className="form-control" id="exampleInputPassword1" onChange={handlePasswordChange}/>
</div>
<div className="mb-3 form-check">
  <input type="checkbox" className="form-check-input" id="exampleCheck1" onChange={handleRememberme}/>
  <label className="form-check-label" for="exampleCheck1">Remember me</label>
</div>
<button type="submit" className="btn btn-primary">Submit</button>
</form>
  </div> }
  </>
  );
}

export default App;
