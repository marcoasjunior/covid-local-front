import React, {useState, useEffect} from 'react';
import api from '../../utils/axios'
import axios from 'axios'
import {
    useHistory
} from 'react-router-dom'


export default function Register() {
    const history = useHistory()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [address, setAddress] = useState('')
    const [address2, setAddress2] = useState('')
    const [district, setDistrict] = useState('')
    const [city, setCity] = useState('')
    const [uf, setUf] = useState('')
    const [cep, setCep] = useState('')

    function goMapa() {
        history.push('/app/mapa')
    }

    async function getAddress(){

        axios.get(`http://viacep.com.br/ws/${cep}/json/`)
            .then(response => {

                setAddress(response.data.logradouro)
                setAddress2(response.data.complemento)
                setDistrict(response.data.bairro)
                setCity(response.data.localidade)
                setUf(response.data.uf)

            })
            .catch(function (error) {

            })

    }


    async function register(e) {

        e.preventDefault();

        if(password.length < 6) alert("Senha com pelo menos 6 caracteres")

        const data = {

            "email": email,
            "password": password,
            "address": address,
            "address2": address2,
            "district": district,
            "city": city,
            "uf": uf,
            "cep": cep

        }

        await api.post('/user', data)
            .then(function (response) {
                goMapa()
                console.log(response);
            })
            .catch(function (error) {
                alert(`Erro no cadastro`)
            });
    }

    return (
        <div className="card">       
        <div class="alert alert-primary" role="alert">
        Preencha seus dados abaixo:
        </div>
        
            <div className="card-body">
  
            <form onSubmit={register}>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="inputEmail4">E-mail</label>
                        <input type="email" required className="form-control" value={email} onChange={(e) =>setEmail(e.target.value)}/>
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="inputPassword4">Senha</label>
                        <input type="password" required className="form-control" value={password} min={6} onChange={(e) => setPassword(e.target.value)} placeholder='Mín 6 caracteres'/>
                    </div>
                </div>
                <div className="form-row align-items-center">
                    <div className="form-group col-auto">
                            <label htmlFor="inputZip">CEP</label>
                            <input type="number" required className="form-control mb-2" value={cep} onChange={(e) => setCep(e.target.value)} placeholder='Somente números'/>
                        </div>
                    <div className="col-auto col-auto">
                    <button onClick={getAddress} type="button" className="btn btn-primary">Procurar Endereço</button>
                        </div>
                    
                </div>
                <div className="form-group">
                    <label htmlFor="inputAddress">Logradouro</label>
                    <input type="text" readOnly className="form-control" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Número não é necessário"/>
                </div>
                <div className="form-group">
                    <label htmlFor="inputAddress2">Complemento</label>
                    <input type="text" className="form-control" value={address2} onChange={(e) => setAddress2(e.target.value)} placeholder="Apartmento, Bloco, Estudio"/>
                </div>
                <div className="form-group">
                    <label htmlFor="inputAddress2">Bairro</label>
                    <input type="text" readOnly className="form-control" value={district} onChange={(e) => setDistrict(e.target.value)}/>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="inputCity">Cidade</label>
                        <input type="text" readOnly className="form-control" value={city} onChange={(e) => setCity(e.target.value)}/>
                    </div>
                    <div className="form-group col-md-3">
                        <label htmlFor="inputState">UF</label>               
                        <select id="inputState" readOnly className="form-control" value={uf} onChange={(e) => setUf(e.target.value)}>
                            <option value="">Selecione</option>
                            <option value="AC">Acre</option>
                            <option value="AL">Alagoas</option>
                            <option value="AP">Amapá</option>
                            <option value="AM">Amazonas</option>
                            <option value="BA">Bahia</option>
                            <option value="CE">Ceará</option>
                            <option value="DF">Distrito Federal</option>
                            <option value="ES">Espirito Santo</option>
                            <option value="GO">Goiás</option>
                            <option value="MA">Maranhão</option>
                            <option value="MS">Mato Grosso do Sul</option>
                            <option value="MT">Mato Grosso</option>
                            <option value="MG">Minas Gerais</option>
                            <option value="PA">Pará</option>
                            <option value="PB">Paraíba</option>
                            <option value="PR">Paraná</option>
                            <option value="PE">Pernambuco</option>
                            <option value="PI">Piauí</option>
                            <option value="RJ">Rio de Janeiro</option>
                            <option value="RN">Rio Grande do Norte</option>
                            <option value="RS">Rio Grande do Sul</option>
                            <option value="RO">Rondônia</option>
                            <option value="RR">Roraima</option>
                            <option value="SC">Santa Catarina</option>
                            <option value="SP">São Paulo</option>
                            <option value="SE">Sergipe</option>
                            <option value="TO">Tocantins</option>
                        </select>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Registrar</button>
            </form>
        </div>
  
    </div>
    )
}