import React, { Component } from 'react';
import { FaPlus, FaEdit, FaWindowClose } from 'react-icons/fa';

import './styled.css';

export default class Main extends Component {
  state = {
    novaTarefa: '',
    tarefas: [],
    index: -1,
  }

  handleChanges = (e) => {
    this.setState({
      novaTarefa: e.target.value,
    });
  }

  addTarefa = (e) => {
    e.preventDefault();
    const { index } = this.state;
    const { tarefas } = this.state;
    const { novaTarefa } = this.state;

    if (index === -1) {
      if (tarefas.indexOf(novaTarefa) !== -1) return;

      const novasTarefas = [...tarefas];

      this.setState({
        tarefas: [...novasTarefas, novaTarefa],
      });
    } else {
      tarefas[index] = novaTarefa;
      this.setState({
        tarefas: [...tarefas],
        novaTarefa: '',
        index: -1,
      });
    }
  }

  handleDelete = (e, index) => {
    const { tarefas } = this.state;
    const novasTarefas = [...tarefas];

    novasTarefas.splice(index, 1);

    this.setState({
      tarefas: novasTarefas,
    });
  }

  handleEdit = (e, index) => {
    const { tarefas } = this.state;

    this.setState({
      index,
      novaTarefa: tarefas[index],
    });
  }

  render() {
    const { novaTarefa, tarefas } = this.state;

    return (
      <div className="mainDiv">
        <div className="container">
          <h1>Lista de Tarefas</h1>
          <div>
            <input onChange={this.handleChanges} value={novaTarefa} />
            <button onClick={this.addTarefa} type="submit">
              <FaPlus />
            </button>
          </div>
        </div>
        <div className="container-box">
          <ul className="box01">
            {tarefas.map((tarefa, index) => (
              <li className="border" key={tarefas[index]}>
                {tarefa}
                <span>
                  <FaEdit className="icons" onClick={(e) => this.handleEdit(e, index)} />
                  <FaWindowClose className="icons" onClick={(e) => this.handleDelete(e, index)} />
                </span>
              </li>
            ))}
          </ul>
        </div>
        <footer className="rodape" />
      </div>
    );
  }
}
