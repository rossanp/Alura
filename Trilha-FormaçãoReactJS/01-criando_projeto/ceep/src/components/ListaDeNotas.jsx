import React, { Component } from 'react'
import CardNotas from './CardNotas'

export default class ListaDeNotas extends Component {
    render() {
        return (
            <ul>
                {Array.of("Trabalho", "Trabalho", "Estudo").map((categorias) => {
                    return (
                        <li>
                            <div>{categorias}</div>
                            <CardNotas />
                        </li>
                    )
                })}
            </ul>
        )
    }
}