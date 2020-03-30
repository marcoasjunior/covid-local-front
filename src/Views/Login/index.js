import React from 'react';
import logo from '../../assets/logo.png'
import './styles.css'

export default function Login() {
    return (
        <div className="card">         
            <img className="card-img-top" src={logo} alt='logo' />
            <div class="card-body">
            <form>
                <div className="form-group">

                    <label for="exampleInputEmail1">E-mail</label>
                    <input type="email" class="form-control" />
            
                </div>

                <div className="form-group">

                    <label for="exampleInputPassword1">Senha</label>
                    <input type="password" class="form-control"/>

                </div>
             <div className='cardButtons'>
                <button type="submit" className="btn btn-primary">Login</button>
                <button type="button" className="btn btn-info">Registrar</button>
            </div>
                </form>

            <a href="#" className="card-link"><small>Esqueci minha senha</small></a>
  
            </div>

        </div>
    )
}