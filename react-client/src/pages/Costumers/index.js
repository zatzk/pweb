import { useState, useEffect } from 'react';
import { FiUser, FiDelete,FiEdit2 } from 'react-icons/fi';
import { toast } from 'react-toastify';
import Header from '../../components/Header';
import Title from '../../components/Title';
import './costumers.css'
import axios from 'axios'


export default function Costumers() {

    const API_URL = `http://localhost/8081/clients/`;

    const [name, setName] = useState('');
    const [cnpj, setCnpj] = useState('');
    const [address, setAddress] = useState('');
    const [APIData, setAPIData] = useState([]);


    useEffect(() => {
      axios.get(API_URL)
          .then((response) => {
              console.log(response.data);
              setAPIData(response.data);
          })
  
  });
 

    const getData = async (e) => {
      e.preventDefault()
      axios.get(API_URL)
          .then((getData) => {
              setAPIData(getData.data);
          })
    }

    const onDelete = (id) => {
        axios.delete(API_URL+`${id}`)
        .then(() => {
            getData();
        })
    }


    const postData = async (e) => {
      e.preventDefault()
      axios.post(API_URL, {
          name,
          cnpj,
          address
      }).then(() => {
        toast.success("dados inseridos!")
      })
    }

  //   const setData = (data) => {
  //     let { id, name, cnpj, address } = data;
  //     localStorage.setItem('ID', id);
  //     localStorage.setItem('Name', name);
  //     localStorage.setItem('Cnpj', cnpj);
  //     localStorage.setItem('Address Value', address)
  // }
   

    return (
        <div>
            <Header />

            <div className="content">
                <Title nome="Clientes">
                    <FiUser size={25} />
                </Title>


                <div className="container">
                    <form onSubmit={postData} className="form-profile costumers">
                        <label>Nome</label>
                        <input placeholder="Digite o Nome Fantasia" type="text" onChange={(e) => setName(e.target.value)} />

                        <label>CNPJ</label>
                        <input placeholder="Digite o CNPJ" type="text" onChange={(e) => { setCnpj(e.target.value) }} />

                        <label>Endereço</label>
                        <input placeholder="Digite o seu Endereço" type="text" onChange={(e) => { setAddress(e.target.value) }} />

                        <button className="button-costumers" type="submit">Salvar</button>
                    </form>
                </div>
                <table>
              <thead>
                <tr>
                  <th scope="col">Cliente</th>
                  <th scope="col">CNPJ</th>
                  <th scope="col">Endereço</th>
                  <th scope="col">Cadastrado em</th>
                  <th scope="col">#</th>
                </tr>
              </thead>
              <tbody>
                  {APIData.map((data)=>{
                      return(
                        <tr>
                        <td data-label="Cliente">{data.name}</td>
                        <td data-label="CNPJ">{data.cnpj}</td>
                        <td data-label="Endereço">{data.address}</td>
                        <td data-label="Cadastrado">29/06/2021</td>
                        <td data-label="#">
                          <button onClick={onDelete} className="action" style={{backgroundColor: '#3583f6' }}>
                            <FiDelete color="#FFF" size={17} />
                          </button>
                          <button  className="action" style={{backgroundColor: '#F6a935' }}>
                            <FiEdit2 color="#FFF" size={17} />
                          </button>
                        </td>
                      </tr>
                      );
                  })}
                
              </tbody>
            </table>
            </div>
        </div>
    );
}