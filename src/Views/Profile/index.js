import React, {useState} from 'react';
import api from '../../utils/axios'

export default function Profile() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    async function changeLogin(e) {
        e.preventDefault();

        const data = {
            "email": email,
            "password": password
        }

        if (data.email === '' || data.password === '') return alert('Coloque uma nova senha e um novo e-mail')


        await api.put('/user', data, {
                headers: {
                    id: localStorage.id
                }
            })
            .then(function (response) {

                alert(`Alterado com sucesso`);
            })
            .catch(function (error) {

                alert(`Erro ao enviar dados`)
            });

    }

    return (
       <div>
            <div className="card">         
                <div className="card-body">
                    <form onSubmit={changeLogin}>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label htmlFor="inputEmail4">Novo E-mail</label>
                                <input type="email" className="form-control" 
                                value={email} 
                                onChange={(e) => setEmail(e.target.value)}/>
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="inputPassword4">Nova Senha</label>
                                <input type="password" className="form-control" 
                                value={password} 
                                onChange={(e) => setPassword(e.target.value)}/>
                            </div>
                        </div>
                        <div className='cardButtons'>
                            <button type="submit" className="btn btn-primary">Alterar Dados</button>
                            <button type="reset" className="btn btn-info">Limpar</button>
                        </div>
                    </form> 
                </div>
            </div>
       </div>
    )
}