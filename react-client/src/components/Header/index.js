import './header.css'
import avatar from '../../assets/avatar.png'
import { Link } from 'react-router-dom'
import { FiHome, FiUser, FiSettings } from 'react-icons/fi'
import { useAuth } from '../../contexts/AuthContext'
import { useState } from 'react'

function Header() {
  const {user} = useAuth();
  const photoURL = useState(user?.photoURL);
    return (
        <div className="sidebar">
            <div>
              {photoURL === null ?
                <img alt="Foto Avatar" src={avatar} />
                :
                <img src={photoURL} alt="Foto Avatar" />
              }
                
            </div>
            <Link to="/dashboard">
                <FiHome color="#FFF" size={24} />
            Chamados
        </Link>
            <Link to="/costumers">
                <FiUser color="#FFF" size={24} />
            Clientes
        </Link>
            <Link to="/profile">
                <FiSettings color="#FFF" size={24} />
            Configurações
        </Link>

        </div>
    );
}
export default Header;