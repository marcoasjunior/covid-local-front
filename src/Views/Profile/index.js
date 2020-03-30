import React from 'react';


export default function Profile() {
    return (
       <div>
            <div className="card">         
            <div class="card-body">
            <form>
                <div className="form-group">

                    <label for="exampleInputEmail1">Novo E-mail</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            
                </div>

                <div className="form-group">

                    <label for="exampleInputPassword1">Nova Senha</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" />

                </div>
             <div className='cardButtons'>
                <button type="submit" className="btn btn-primary">Alterar Dados</button>
                <button type="button" className="btn btn-info">Limpar</button>
            </div>
                </form>
  
            </div>

        </div>
       </div>
    )
}