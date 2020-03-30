import React, { Component } from 'react'

class Pais extends Component {

    constructor(props) {
        super(props);

        this.state = {
            nome: ''
        };
    }

    save = (event) => {
        event.preventDefault();
        console.log(`The values are ${this.state.nome}`);
        this.setState({
            nome: ''
        })
    }

    setNome = (event) => {
        this.setState({ nome: event.target.value })
    }

    render() {
        return (
            <div className="card">
                <form onSubmit={this.save}>

                    <div className="card-header">Cadastro de Pais</div>
                    <div className="card-body">
                        <div className="form-group">
                            <label htmlFor="nome">Nome</label>
                            <input type="text" name="nome" value={this.state.nome} onChange={this.setNome} className="form-control" id="nome"></input>
                        </div>
                        <button type="submit" className="btn btn-primary">Cadastrar Pais</button>
                    </div>

                </form>
            </div>
        );
    }
}

export default Pais;