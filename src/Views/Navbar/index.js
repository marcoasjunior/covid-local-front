import React from 'react';
import {Map, User, AlertCircle} from 'react-feather'

export default function Navbar() {
    return (
        <div className="btn-group" role="group" aria-label="Basic example">
            <button type="button" className="btn btn-secondary"><Map /> Mapa</button>
            <button type="button" className="btn btn-secondary"><AlertCircle /> Recomendações</button>
            <button type="button" className="btn btn-secondary"><User /> Perfil</button>
        </div>
    )
}