import React from 'react';

class Aeroporto extends React.Component {
    render() {
        return (
            <div className="card">
                <form>
                    <div className="card-header">Cadastro de Aeroporto</div>

                    <div className="card-body">
                        <div className="form-group">
                            <label htmlFor="input-aeroporto">Nome</label>
                            <input type="text" className="form-control" id="input-aeroporto" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="select-pais-aeroporto">Pais</label>
                            <select className="form-control" id="select-pais-aeroporto">
                                <option>Brasil</option>
                                <option>Argentina</option>
                                <option>EUA</option>
                                <option>Angola</option>
                                <option>Mexico</option>
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