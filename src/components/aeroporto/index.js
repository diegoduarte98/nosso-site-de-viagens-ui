import React, { Component } from 'react'
import axios from 'axios';

class Aeroporto extends Component {

    constructor() {
        super();
        this.state = {
            paises: [],
            nome: '',
            paisSelecionado: ""
        };
    }

    componentDidMount() {
        axios.get(`http://localhost:8080/paises`)
            .then(res => {
                const paises = res.data;
                console.log(paises);
                this.setState({ paises });
            })
    }

    save = event => {
        event.preventDefault();

        const aeroporto = {
            nome: this.state.nome,
            pais_id: this.state.paisSelecionado
        };

        axios.post(`http://localhost:8080/aeroportos`, aeroporto)
            .then(res => {
                console.log(res);
                console.log(res.data);
            });
    }

    render() {
        return (
            <div className="card">
                <form onSubmit={this.save}>
                    <div className="card-header">Cadastro de Aeroporto</div>

                    <div className="card-body">
                        <div className="form-group">
                            <label htmlFor="input-aeroporto">Nome</label>
                            <input type="text" onChange={(e) => this.setState({ nome: e.target.value })} className="form-control" id="input-aeroporto" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="select-pais-aeroporto">Pais</label>
                            <select onChange={(e) => this.setState({ paisSelecionado: e.target.value })} className="form-control" id="select-pais-aeroporto">
                                <option value="">Selecione</option>)
                                {this.state.paises.map((pais) => <option key={pais.id} value={pais.id}>{pais.nome}</option>)}
                            </select>
                        </div>

                        <button type="submit" className="btn btn-primary">Cadastrar Aeroporto</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default Aeroporto;