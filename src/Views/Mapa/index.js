import React, { useState, useEffect } from 'react';
import api from '../../utils/axios'
import './styles.css'

export default function Mapa() {
    const [cases, setCases] = useState({})

    useEffect(() => {
        api.get(`/cases/${localStorage.id}`)
            .then(response => {

                setCases(response.data)
                console.log(response.data.responseN)
            })
            .catch(function (error) {

                alert(`Erro ao enviar dados`)
            })
    }, [])

    return (
        <div>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Possíveis Ocorrências:</h5>
                    <small>Pessoas que apresentam conjunto de sintomas conhecidos do COVID-19</small>

                </div>
                <div className="card-body">
                    <h5 className="card-title">{}</h5>
                    <p className="card-text">Pessoas com sintomas:</p>

                </div>
                <div className="card-body">
                    <h5 className="card-title">Bairro</h5>
                    <p className="card-text">Pessoas com sintomas:</p>

                </div>
                <div className="card-body">
                    <h5 className="card-title">Cidade</h5>
                    <p className="card-text">Pessoas com sintomas:</p>
                    <p className="card-text">Número confirmado de casos:</p>

                </div>
                <div className="card-body">
                    <h5 className="card-title">Estado</h5>
                    <p className="card-text">Pessoas com sintomas:</p>

                </div>

                </div>

        </div>
    )
}