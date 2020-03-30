import React, { Component } from 'react'
import axios from 'axios';

class Rota extends Component {

    constructor() {
        super();
        this.state = {
            nome: '',
            origem: '',
            destino: '',
            duracao: '',
            origemSelecionado: '',
            destinoSelecionado: '',
            aeroportos: []
        };
    }

    componentDidMount() {
        axios.get(`http://localhost:8080/aeroportos`)
            .then(res => {
                const aeroportos = res.data;
                console.log(aeroportos);
                this.setState({ aeroportos });
            })
    }

    save = event => {
        event.preventDefault();

        const rota = {
            nome: this.state.nome,
            origem_id: this.state.origemSelecionado,
            destino_id: this.state.destinoSelecionado,
            duracao: this.state.duracao
        };

        axios.post(`http://localhost:8080/rotas`, rota)
            .then(res => {
                console.log(res);
                console.log(res.data);
            });
    }

    render() {
        return (
            <div className="card">
                <form onSubmit={this.save}>
                    <div className="card-header">Cadastro de Rota</div>
                    <div className="card-body">
                        <div className="form-row">

                            <div className="form-group col-md-3">
                                <label htmlFor="nome">Nome</label>
                                <input type="text" onChange={(e) => this.setState({ nome: e.target.value })} className="form-control" id="nome" />
                            </div>

                            <div className="form-group col-md-3">
                                <label htmlFor="select-origem">Origem</label>
                                <select onChange={(e) => this.setState({ origemSelecionado: e.target.value })} className="form-control" id="select-origem">
                                    <option value="">Selecione</option>
                                    {this.state.aeroportos.map((aeroporto) => <option key={aeroporto.id} value={aeroporto.id}>{aeroporto.nome}</option>)}
                                </select>
                            </div>

                            <div className="form-group col-md-3">
                                <label htmlFor="select-destino">Destino</label>
                                <select onChange={(e) => this.setState({ destinoSelecionado: e.target.value })} className="form-control" id="select-destino">
                                    <option value="">Selecione</option>
                                    {this.state.aeroportos.map((aeroporto) => <option key={aeroporto.id} value={aeroporto.id}>{aeroporto.nome}</option>)}
                                </select>
                            </div>

                            <div className="form-group col-md-3">
                                <label htmlFor="duracao">Duração</label>
                                <input type="number" onChange={(e) => this.setState({ duracao: e.target.value })} className="form-control" id="duracao" />
                            </div>
                        </div>

                        <button type="submit" className="btn btn-primary">Cadastrar Rota</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default Rota;