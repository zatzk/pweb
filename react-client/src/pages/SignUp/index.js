import logo from '../../assets/login.png'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import {useAuth} from '../../contexts/AuthContext';
import {useNavigate} from 'react-router-dom'
import {toast} from 'react-toastify'

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('')
  const { signup } = useAuth();
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await signup(email, password);
      navigate('/')
      toast.success("Conta criada com sucesso!!")
    } catch (e) {
      setError(e.message);
      toast.error(e.message);
    }
  };

    return (
      <div className="conteiner-center">
        <div className="login">
          
          <div className="login-area">
            <img src={logo} alt="Logo do Sistema"/>
          </div>
         
          <form onSubmit={handleSubmit}>
            <h1>Nova Conta</h1>
            <input type="email"  placeholder="email@email.com"  onChange={(e)=>{setEmail(e.target.value)}} />
            <input type="password"  placeholder="*****" onChange={(e)=>{setPassword(e.target.value)}}/>
            <button type="submit">Cadastrar</button>
          </form>
         
          <Link to="/">Já possui uma conta? Entre aqui!</Link>
       
        </div>
      </div>
    );
  }
  

  
  export default SignUp;