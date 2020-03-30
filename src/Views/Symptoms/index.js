import React from 'react';
import './styles.css'

export default function Symptoms() {
    return (
        <div>
            <div className='card'>
                <div className='card-body'>
                        <ul class="list-group list-group-flush">
                                <li className='list-group-item card-body'>
                                
                                <h4 className='h4'>Selecione os seus sintomas:</h4>

                                <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                        <label className="custom-control-label" for="customCheck1">Dor de garganta</label>
                                </div>
                                <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="customCheck2" />
                                        <label className="custom-control-label" for="customCheck2">Febre</label>
                                </div>
                                <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="customCheck3" />
                                        <label className="custom-control-label" for="customCheck3">Tosse</label>
                                </div>
                                <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="customCheck4" />
                                        <label className="custom-control-label" for="customCheck4">Falta de Ar</label>
                                </div>
                                </li>

                                <li className='list-group-item card-body'>

                                <h4 className='h4'>Selecione seu grupo de risco:</h4>

                                <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="customCheck5" />
                                        <label className="custom-control-label" for="customCheck5">Diabetes</label>
                                </div>
                                <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="customCheck6" />
                                        <label className="custom-control-label" for="customCheck6">Cardiopatia</label>
                                </div>
                                <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="customCheck7" />
                                        <label className="custom-control-label" for="customCheck7">Doenças respiratórias crônicas</label>
                                </div>
                                <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="customCheck8" />
                                        <label className="custom-control-label" for="customCheck8">Imunodeprimida</label>
                                </div>
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="customCheck8" />
                                        <label className="custom-control-label" for="customCheck8">Maior de 60 anos</label>
                                </div>
                                
                                </li>
                            </ul>
                    </div>          
            </div>
       </div>
    )
}