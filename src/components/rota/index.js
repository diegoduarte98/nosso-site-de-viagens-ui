import React from 'react';

class Rota extends React.Component {
    render() {
        return (
            <div className="card">
                <form>
                    <div className="card-header">Cadastro de Rota</div>
                    <div className="card-body">
                        <div className="form-row">
                            <div className="form-group col-md-4">
                                <label htmlFor="select-origem">Origem</label>
                                <select className="form-control" id="select-origem">
                                    <option>SSA</option>
                                    <option>SAO</option>
                                    <option>RIO</option>
                                </select>
                            </div>

                            <div className="form-group col-md-4">
                                <label htmlFor="select-destino">Destino</label>
                                <select className="form-control" id="select-destino">
                                    <option>SSA</option>
                                    <option>SAO</option>
                                    <option>RIO</option>
                                </select>
                            </div>

                            <div className="form-group col-md-4">
                                <label htmlFor="tempo">Tempo</label>
                                <input type="number" className="form-control" id="tempo" />
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