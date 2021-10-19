import React, { Component } from 'react'
import CardNotas from '../CardNota/CardNotas'
import "./style.css"

export default class ListaDeNotas extends Component {
    render() {
        return (
            <ul className="lista-notas">
                {Array.of("Trabalho", "Trabalho", "Estudo").map((categorias, index) => {
                    return (
                        <li className="lista-notas_item" key={index}>
                            <CardNotas />
                        </li>
                    )
                })}
            </ul>
        )
    }
}