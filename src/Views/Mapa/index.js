import React, { useState, useEffect } from 'react';
import api from '../../utils/axios'
import './styles.css'

export default function Mapa() {
    const [cases, setCases] = useState({})
    const [casesN, setCasesN] = useState({})
   

    useEffect(() => {
        api.get(`/cases/${localStorage.id}`)
            .then(response => {

                setCases(response.data[0])
                setCasesN(response.data[1])
                console.log(response.data[1])

            })
            .catch(function (error) {

                alert(`Erro ao enviar dados`)
            })
    }, [])

    return (
        <div>
            <div className="card">

                <div className="card-body">
                    <h5 className="card-title">Logradouro: {cases.address}</h5>
                    <p className="card-text">Pessoas com sintomas: {casesN.Naddress}</p>

                </div>
                <div className="card-body">
                    <h5 className="card-title">Bairro: {cases.district}</h5>
                    <p className="card-text">Pessoas com sintomas: {casesN.Ndistrict}</p>

                </div>
                <div className="card-body">
                    <h5 className="card-title">Cidade: {cases.city}</h5>
                    <p className="card-text">Pessoas com sintomas: {casesN.Ncity}</p>
                    <p className="card-text">Número confirmado de casos: </p>

                </div>
                <div className="card-body">
                    <h5 className="card-title">Estado: {cases.uf}</h5>
                    <p className="card-text">Pessoas com sintomas: {casesN.Nuf}</p>

                </div>

                </div>

        </div>
    )
}