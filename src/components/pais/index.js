import React, { Component } from 'react'
import axios from 'axios';

//https://alligator.io/react/axios-react/
class Pais extends Component {

    constructor(props) {
        super(props);

        this.state = {
            nome: ''
        };
    }

    save = event => {
        event.preventDefault();

        const pais = {
            nome: this.state.nome
        };

        axios.post(`http://localhost:8080/paises`, pais)
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
    }

    render() {
        return (
            <div className="card">
                <form onSubmit={this.save}>
                    <div className="card-header">Cadastro de Pais</div>
                    <div className="card-body">
                        <div className="form-group">
                            <label htmlFor="nome">Nome</label>
                            <input type="text" name="nome" onChange={(e) => this.setState({ nome: e.target.value })} className="form-control" id="nome"></input>
                        </div>
                        <button type="submit" className="btn btn-primary">Cadastrar Pais</button>
                    </div>

                </form>
            </div>
        );
    }
}

export default Pais;