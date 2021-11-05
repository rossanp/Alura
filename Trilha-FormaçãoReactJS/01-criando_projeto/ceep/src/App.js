import React from 'react';
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro.jsx';
import ListaDeNotas from './components/ListaDeNotas/ListaDeNotas';
import './assets/App.css';
import './assets/index.css';
import { Component } from 'react';

class App extends Component {
  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro />
        <ListaDeNotas />
      </section>
    );
  }
}

export default App;
