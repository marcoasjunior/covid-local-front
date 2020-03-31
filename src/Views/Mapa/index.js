import React from 'react';
import './styles.css'

export default function Mapa() {
    return (
        <div>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Possíveis Ocorrências:</h5>
                    <small>Pessoas que apresentam conjunto de sintomas conhecidos do COVID-19</small>

                </div>
                <div className="card-body">
                    <h5 className="card-title">Rua</h5>
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
                <div className="card-body">
                    <h5 className="card-title">País</h5>
                    <p className="card-text">Pessoas com sintomas:</p>

                </div>
                </div>

        </div>
    )
}