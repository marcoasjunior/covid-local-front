import React from 'react';
import logo from '../../assets/logo.png'
import {Link, useHistory} from 'react-router-dom'
import {Repeat} from 'react-feather'
import './styles.css'

export default function Login() {
    const history = useHistory()

    function goRegister() {
        history.push('/register')
    }

    function goApp() {
        history.push('/mapa')
    }

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
                <button onClick={goApp} type="submit" className="btn btn-primary">Login</button>
                <button onClick={goRegister} type="button" className="btn btn-info">Registrar</button>
            </div>
                </form>

            <Link to='/'> <Repeat size='10' /> <small>Esqueci minha senha</small></Link>
  
            </div>

        </div>
    )
}