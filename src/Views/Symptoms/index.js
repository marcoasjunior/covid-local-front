import React, {useState} from 'react';
import api from '../../utils/axios'

export default function Symptoms() {

        const [soreThroat, setSoreThroat] = useState(false)
        const [fever, setFever] = useState(false)
        const [cough, setCough] = useState(false)
        const [breathless, setBreathless] = useState(false)
        const [fatigue, setFatigue] = useState(false)
        const [myalgia, setMyalgia] = useState(false)

        const [diabetes, setDiabetes] = useState(false)
        const [cardiopathy, setCardiopathy] = useState(false)
        const [respDisease, setRespDisease] = useState(false)
        const [immunodepression, setImmunodepression] = useState(false)
        const [old, setOld] = useState(false)

        // const [check, setCheck] = useState([])

        // useEffect(() => {
        //         api.get('/symptoms', {
        //                 headers: {
        //                         id: localStorage.id
        //                 }
        //         })
        //         .then(response => {
        //                 setCheck(response.data)
        //         })
        // }, [localStorage.id]) refatorar para criar dinamicamente


        async function changeSymptoms(e) {
                e.preventDefault();

                const data = [soreThroat, fever, cough, breathless, fatigue, myalgia]

                const symptoms = data.filter((value) => {
                        return value
                })

                console.log(symptoms)

                await api.put('/symptoms', {
                                "symptoms": symptoms
                        }, {
                                headers: {
                                        id: localStorage.id
                                }
                        })
                        .then(function (response) {

                                alert(`Alterado com sucesso`);
                        })
                        .catch(function (error) {
                                alert(`Erro ao enviar dados`)
                        });

        }
        async function changeGroup(e) {

                e.preventDefault();

                const data = [diabetes, cardiopathy, respDisease, immunodepression, old]

                const groups = data.filter((value) => {
                        return value
                })

                console.log(groups)

                await api.put('/groups', {
                                "groups": groups
                        }, {
                                headers: {
                                        id: localStorage.id
                                }
                        })
                        .then(function (response) {

                                alert(`Alterado com sucesso`);
                        })
                        .catch(function (error) {
                                alert(`Erro ao enviar dados`)
                        });



        }




        return (
        <div>
            <div className='card'>
                <div className='card-body'>
                        
                        <ul className="list-group list-group-flush">
                         
                                <li className='list-group-item card-body'>
                                <form onSubmit={changeSymptoms}>

                                        <h4 className='h4 title'>Selecione os seus sintomas:</h4>

                                        <div className="custom-control custom-checkbox">
                                                <input type="checkbox" className="custom-control-input" id="customCheck1" 
                                                value={soreThroat} 
                                                onChange={(e) => e.target.checked ? setSoreThroat('Dor de Garganta'): setSoreThroat(e.target.checked) }/>
                                                <label className="custom-control-label" htmlFor="customCheck1">Dor de Garganta</label>
                                        </div>
                                        <div className="custom-control custom-checkbox">
                                                <input type="checkbox" className="custom-control-input" id="customCheck2" 
                                                value={fever} 
                                                onChange={(e) => e.target.checked ? setFever('Febre'): setFever(e.target.checked)}/>
                                                <label className="custom-control-label" htmlFor="customCheck2">Febre</label>
                                        </div>
                                        <div className="custom-control custom-checkbox">
                                                <input type="checkbox" className="custom-control-input" id="customCheck3" 
                                                value={cough} 
                                                onChange={(e) => e.target.checked ? setCough('Tosse'): setCough(e.target.checked)}/>
                                                <label className="custom-control-label" htmlFor="customCheck3">Tosse</label>
                                        </div>
                                        <div className="custom-control custom-checkbox">
                                                <input type="checkbox" className="custom-control-input" id="customCheck4" 
                                                value={breathless} 
                                                onChange={(e) => e.target.checked ? setBreathless('Falta de Ar'): setBreathless(e.target.checked)}/>
                                                <label className="custom-control-label" htmlFor="customCheck4">Falta de Ar</label>
                                        </div>
                                        <div className="custom-control custom-checkbox">
                                                <input type="checkbox" className="custom-control-input" id="customCheck5" 
                                                value={fatigue} 
                                                onChange={(e) => e.target.checked ? setFatigue('Fadiga'): setFatigue(e.target.checked)}/>
                                                <label className="custom-control-label" htmlFor="customCheck5">Fadiga</label>
                                        </div>
                                        <div className="custom-control custom-checkbox">
                                                <input type="checkbox" className="custom-control-input" id="customCheck6" 
                                                value={myalgia} 
                                                onChange={(e) => e.target.checked ? setMyalgia('Dor Muscular'): setMyalgia(e.target.checked)}/>
                                                <label className="custom-control-label" htmlFor="customCheck6">Dor Muscular</label>
                                        </div>
                                        <button type="submit" className="btn btn-primary buttonSymtoms">Alterar sintomas</button>
                                        </form>
                                </li>
                                
                                
                                <li className='list-group-item card-body'>
                                <form onSubmit={changeGroup}>
                                        <h4 className='h4 riskTitle'>Selecione seus grupos de risco:</h4>

                                        <div className="custom-control custom-checkbox">
                                                <input type="checkbox" className="custom-control-input" id="customCheck7" 
                                                value={diabetes} 
                                                onChange={(e) => e.target.checked ? setDiabetes("Diabetes") : setDiabetes(e.target.checked)} />
                                                <label className="custom-control-label" htmlFor="customCheck7">Diabetes</label>
                                        </div>
                                        <div className="custom-control custom-checkbox">
                                                <input type="checkbox" className="custom-control-input" id="customCheck8" 
                                                value={cardiopathy} 
                                                onChange={(e) => e.target.checked ? setCardiopathy("Cardiopatia") : setDiabetes(e.target.checked)} />
                                                <label className="custom-control-label" htmlFor="customCheck8">Cardiopatia</label>
                                        </div>
                                        <div className="custom-control custom-checkbox">
                                                <input type="checkbox" className="custom-control-input" id="customCheck9" 
                                                value={respDisease} 
                                                onChange={(e) => e.target.checked ? setRespDisease("Doença Respiratória") : setDiabetes(e.target.checked)} />
                                                <label className="custom-control-label" htmlFor="customCheck9">Doenças respiratórias crônicas</label>
                                        </div>
                                        <div className="custom-control custom-checkbox">
                                                <input type="checkbox" className="custom-control-input" id="customCheck10" 
                                                value={immunodepression} 
                                                onChange={(e) => e.target.checked ? setImmunodepression("Imunodeprimida") : setDiabetes(e.target.checked)} />
                                                <label className="custom-control-label" htmlFor="customCheck10">Imunodeprimida</label>
                                        </div>
                                        <div className="custom-control custom-checkbox">
                                                <input type="checkbox" className="custom-control-input" id="customCheck11" 
                                                value={old} 
                                                onChange={(e) => e.target.checked ? setOld("Idoso") : setDiabetes(e.target.checked)} />
                                                <label className="custom-control-label" htmlFor="customCheck11">Idoso</label>
                                        </div>
                                        <button type="submit" className="btn btn-primary buttonSymtoms">Alterar grupos</button>
                                        </form>
                                </li>
                               
                            </ul>
                            
                    </div>          
            </div>
       </div>
    )
}