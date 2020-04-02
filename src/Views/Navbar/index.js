import React from 'react';
import {Map, User, AlertCircle} from 'react-feather'
import {useHistory} from 'react-router-dom'

export default function Navbar() {
    const history = useHistory()

    function goMapa() {
        history.push('/app/mapa')
    }

    function goSymptoms() {
        history.push('/app/symptoms')
    }

    function goProfile() {
        history.push('/app/profile')
    }
    
    return (
        <div className='container'>
        <div className="row justify-content-center">
        <div className="btn-group" role="group">
            
            <button onClick={goMapa} type="button" className="btn btn-light "><Map /> Ocorrências</button>
            <button onClick={goSymptoms} type="button" className="btn btn-light"><AlertCircle /> Sintomas</button>
            <button onClick={goProfile} type="button" className="btn btn-light"><User /> Perfil</button>
            </div>
        </div>
        </div>
       
    )
}