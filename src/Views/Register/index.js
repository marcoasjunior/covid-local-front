import React, {useState} from 'react';
import api from '../../utils/axios'
import './styles.css'
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

    async function register(e) {

        e.preventDefault();

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
        
            <div className="card-body">
            <h5 class="card-title">Preencha seus dados abaixo:</h5>  
            <form onSubmit={register}>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label for="inputEmail4">E-mail</label>
                        <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div className="form-group col-md-6">
                        <label for="inputPassword4">Senha</label>
                        <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                </div>
                <div className="form-group">
                    <label for="inputAddress">Rua</label>
                    <input type="text" className="form-control" value={address} onChange={(e) => setAddress(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label for="inputAddress2">Complemento</label>
                    <input type="text" className="form-control" value={address2} onChange={(e) => setAddress2(e.target.value)} placeholder="Apartmento, Bloco..."/>
                </div>
                <div className="form-group">
                    <label for="inputAddress2">Bairro</label>
                    <input type="text" className="form-control" value={district} onChange={(e) => setDistrict(e.target.value)}/>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label for="inputCity">Cidade</label>
                        <input type="text" className="form-control" value={city} onChange={(e) => setCity(e.target.value)}/>
                    </div>
                    <div className="form-group col-md-3">
                        <label for="inputState">UF</label>               
                        <select id="inputState" className="form-control" value={uf} onChange={(e) => setUf(e.target.value)}>
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
                    <div className="form-group col-md-3">
                        <label for="inputZip">CEP</label>
                        <input type="text" className="form-control" value={cep} onChange={(e) => setCep(e.target.value)}/>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Registrar</button>
            </form>
        </div>
  
    </div>
    )
}