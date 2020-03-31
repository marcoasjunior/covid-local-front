import React from 'react';
import './styles.css'
import {useHistory} from 'react-router-dom'

export default function Register() {
    const history = useHistory()

    function goMapa() {
        history.push('/mapa')
    }

    return (
        <div className="card">         
            <div class="card-body">
            <form onSubmit={goMapa}>
                <div class="form-row">
                    <div class="form-group col-md-6">
                    <label for="inputEmail4">E-mail</label>
                    <input type="email" class="form-control" id="inputEmail4"/>
                    </div>
                    <div class="form-group col-md-6">
                    <label for="inputPassword4">Senha</label>
                    <input type="password" class="form-control" id="inputPassword4"/>
                    </div>
                </div>
                <div class="form-group">
                    <label for="inputAddress">Rua</label>
                    <input type="text" class="form-control" id="inputAddress" placeholder="Rua e número"/>
                </div>
                <div class="form-group">
                    <label for="inputAddress2">Complemento</label>
                    <input type="text" class="form-control" id="inputAddress2" placeholder="Apartmento, Bloco..."/>
                </div>
                <div class="form-row">
                    <div class="form-group col-md-6">
                    <label for="inputCity">Cidade</label>
                    <input type="text" class="form-control" id="inputCity"/>
                    </div>
                    <div class="form-group col-md-1">
                    <label for="inputState">UF</label>
                    <input type="text" id="inputState" class="form-control" />

                    </div>
                    <div class="form-group col-md-2">
                    <label for="inputZip">CEP</label>
                    <input type="text" class="form-control" id="inputZip"/>
                    </div>
                </div>
                <button type="submit" class="btn btn-primary">Registrar</button>
                </form>
                </div>
  
            </div>
    )
}