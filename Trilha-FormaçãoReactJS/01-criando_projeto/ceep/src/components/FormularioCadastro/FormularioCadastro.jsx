import React, { Component } from 'react'
import "./style.css"

export default class FormularioCadastro extends Component {
    render() {
        return (
            <form className="form-cadastro">
                <input type="text" placeholder="Título" className="form-cadastro_input" />
                <textarea rows={15} placeholder="Escreva sua nota..." className="form-cadastro_input" />
                <button className="form-cadastro_input form-cadastro_submit">Cria nota</button>
            </form>
        )
    }
}