import React, {
    useState
} from 'react';
import logo from '../../assets/facebook_cover_photo_1.png'
import {
    Link,
    useHistory
} from 'react-router-dom'
import {
    Repeat
} from 'react-feather'
import api from '../../utils/axios'
import './styles.css'

export default function Login() {

    const history = useHistory()
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')

    function goRegister() {
        history.push('/register')
    }

    async function goApp(e) {

        e.preventDefault();

        let data = {

            "login": login,
            "password": password

        }

        await api.post('/login', data)
            .then(function (response) {
                localStorage.id = response.data
                console.log(response)
                history.push('/app/mapa')
            })
            .catch(function (error) {
                alert(`Erro no login`)
            });
     
    }

    return (
        <div className="card">         
            <img className="card-img-top" src={logo} alt='logo' />
            <div className="card-body">
            <form onSubmit={goApp} >
                <div className="form-group">

                    <label htmlFor="exampleInputEmail1">E-mail</label>
                    <input type="email" className="form-control" value={login} onChange={(e) => setLogin(e.target.value)} />
            
                </div>

                <div className="form-group">

                    <label htmlFor="exampleInputPassword1">Senha</label>
                    <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)}/>

                </div>
             <div className='cardButtons'>
                <button type="submit" className="btn btn-primary">Login</button>
                <button onClick={goRegister} type="button" className="btn btn-info">Registrar</button>
            </div>
                </form>

            <Link to='/'> <Repeat size='10' /> <small>Esqueci minha senha</small></Link>
  
            </div>

        </div>
    )
}