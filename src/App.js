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
    if(mailTest){
      setEmailIsValid(true)
    }
  }

  return (
    <div className="App">
      <h1>Login</h1>
      <form>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={handleEmailChange}/>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1"/>
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    </div>
  );
}

export default App;
