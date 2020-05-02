import React, { Component } from 'react'
import axios from 'axios';
import { FormValidation } from "calidation";
import Card from '../card';

//https://alligator.io/react/axios-react/
class Pais extends Component {

    constructor(props) {
        super(props);

        this.state = {
            nome: ''
        };
    }

    onSubmit = ({ fields, errors, isValid }) => {
        if (isValid) {
            const pais = {
                nome: this.state.nome
            };

            axios.post(`http://localhost:8080/paises`, pais)
                .then(res => {
                    console.log(res);
                    console.log(res.data);
                })
        }
    }

    render() {
        const formConfig = {
            nome: {
                isRequired: 'Name is required!',
            },
        };

        return (
            <Card title="Cadastro de Pais">
                <FormValidation onSubmit={this.onSubmit} config={formConfig}>
                    {({ errors, fields, submitted }) => (
                        <>
                            <div className="form-group">
                                <label htmlFor="nome">Nome</label>
                                <input type="text" name="nome" value={fields.nome} onChange={(e) => this.setState({ nome: e.target.value })}
                                    className={`form-control ${submitted && errors.nome && 'is-invalid'} `} id="nome" />

                                {submitted && errors.nome &&
                                    <div className="text-danger">{errors.nome}</div>
                                }
                            </div>

                            <button type="submit" className="btn btn-primary">Cadastrar Pais</button>
                        </>
                    )}
                </FormValidation>
            </Card>
        );
    }
}

export default Pais;