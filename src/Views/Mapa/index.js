import React, { useState, useEffect } from 'react';
import api from '../../utils/axios'
import './styles.css'

export default function Mapa() {
    const [cases, setCases] = useState({})
    const [casesN, setCasesN] = useState({})
    const [casesBrazil, setCasesBrazil] = useState({})
    const [loading, setLoading] = useState(true)
   
    useEffect(() => { getCases() }, [])

    async function getCases() {
        
        await api.get(`/cases/${localStorage.id}`)
            .then(response => {

                setCases(response.data[0])
                setCasesN(response.data[1])
                console.log(response.data[1])

            })
            .catch(function (error) {

                alert(`Erro ao enviar dados`)
            })
        
        await api.get(`https://corona.lmao.ninja/countries/brazil`)
            .then(response => {

                setCasesBrazil(response.data)
                console.log(response.data)
                setLoading(false)
 
            })
            .catch(function (error) {

                alert(`Erro ao enviar dados`)
            })
        }
  
    if(loading) {
        return (
        <div className='card'>
            <div className="splash-screen">
                <div className="loading-dot">.</div>

            </div>
        </div>
        )
    } 

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

                </div>
                <div className="card-body">
                    <h5 className="card-title">Estado: {cases.uf}</h5>
                    <p className="card-text">Pessoas com sintomas: {casesN.Nuf}</p>

                </div>

                </div>
            <div className="card">               
                <div className="card-body">

                <h5 className='h5 title'> Casos no Brasil:</h5>

                    <h5 className="h6">Confirmados: {casesBrazil.cases}</h5>

                </div>
                <div className="card-body">
                    <h5 className="h6">Casos confirmados hoje: {casesBrazil.todayCases}</h5>

                </div>
                <div className="card-body">
                    <h5 className="h6">Total de mortes: {casesBrazil.deaths}</h5>

                </div>
                <div className="card-body">
                    <h5 className="h6">Mortes hoje: {casesBrazil.todayDeaths}</h5>

                </div>
                <div className="card-body">
                    <h5 className="h6">Pacientes recuperados: {casesBrazil.recovered}</h5>

                </div>
                <div className="card-body">
                    <h5 className="h6">Pacientes críticos: {casesBrazil.critical}</h5>

                </div>

                </div>

        </div>
    )
}