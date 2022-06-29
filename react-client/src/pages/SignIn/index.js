import './signin.css'
import logo from '../../assets/login.png'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react';
import {useAuth} from '../../contexts/AuthContext';
import {toast} from 'react-toastify'

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { signin } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('')
    try {
      await signin(email, password)
      navigate('/Dashboard')
      toast.success("bem vindo!");
    } catch (error) {
      setError(error.message)
      toast.error(error.message)
    }
  };

    return (
      <div className="conteiner-center">
        <div className="login">
          
          <div className="login-area">
            <img src={logo} alt="Logo do Sistema"/>
          </div>
         
          <form onSubmit={handleSubmit}>
            <h1>Entrar</h1>
            <input type="text" placeholder="email@email.com"  onChange={(e)=>{setEmail(e.target.value)}} />

            <input type="password" placeholder="*****" onChange={(e)=>{setPassword(e.target.value)}}/>
            <button type="submit">Acessar</button>
          </form>
         
          <Link to="/register">Criar uma conta</Link>
       
        </div>
      </div>
    );
  }
  
  export default SignIn;