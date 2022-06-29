
import { useState, useContext } from 'react';
import './profile.css';
import Header from '../../components/Header';
import Title from '../../components/Title';
import avatar from '../../assets/avatar.png';
import { FiSettings, FiUpload } from 'react-icons/fi';
import { toast } from 'react-toastify';
import { useAuth } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { updateProfile } from 'firebase/auth';
import { updateUserRecords, deleteFile, uploadFile } from './profileConfig';


export default function Profile(){
  const navigate = useNavigate();
  const { user, logout, setLoading} = useAuth();
  const [name, setName] = useState(user?.displayName);
  const [file, setFile] = useState(null);
  const [photoURL, setPhotoURL] = useState(user?.photoURL);

  const handleChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFile(file);
      setPhotoURL(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    let userObj = { displayName: name };
    let imagesObj = { uName: name };
    try {
      if (file) {
        const imageName = uuidv4() + '.' + file?.name?.split('.')?.pop();
        const url = await uploadFile(
          file,
          `profile/${user?.uid}/${imageName}`
        );

        if (user?.photoURL) {
          const prevImage = user?.photoURL
            ?.split(`${user?.uid}%2F`)[1]
            .split('?')[0];
          if (prevImage) {
            try {
              await deleteFile(`profile/${user?.uid}/${prevImage}`);
            } catch (error) {
              console.log(error);
            }
          }
        }

        userObj = { ...userObj, photoURL: url };
        imagesObj = { ...imagesObj, uPhoto: url };
      }

      await updateProfile(user, userObj);
      await updateUserRecords('gallery', user?.uid, imagesObj);

      toast.success("seu perfil foi atualizado!");
    } catch (error) {
      toast.error(error)
    }

    setLoading(false);
  };



  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
      toast.success('Você foi deslogado')
    } catch (e) {
      toast.error(e.message);
    }
  };

  return(
    <div>
      <Header/>

      <div className="content">
        <Title nome="Meu perfil">
          <FiSettings size={25} />
        </Title>


        <div className="container">
          <form onSubmit={handleSubmit} className="form-profile">
            <label className="label-avatar">
              <span>
                { photoURL === null ?
                  <FiUpload color="#000" size={25} />
                  :
                  <FiUpload display="none" color="#000" size={25} />
                }
                
              </span>

              <input type="file" accept="image/*" onChange={handleChange}/><br/>
              { photoURL === null ? 
                <img src={avatar} width="250" height="250" alt="Foto de perfil do usuario" />
                :
                <img src={photoURL} width="250" height="250" alt="Foto de perfil do usuario" />
              }
            </label>

            <label>Nome</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />

            <label>Email</label>
            <input type="text" value={user.email} disabled={true} />     

            <button type="submit">Salvar</button>       

          </form>
        </div>

        <div className="container">
            <button className="logout-btn" onClick={handleLogout} >
               Sair
            </button>
        </div>

      </div>
    </div>
  )
}