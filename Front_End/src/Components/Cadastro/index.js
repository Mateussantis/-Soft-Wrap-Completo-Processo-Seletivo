import React , {Component} from 'react';

export default class Cadastro extends Component {
  constructor(props) {
    super(props);
  }

  render() {  
  return (
    <div>
      <h3 className="h3">Cadastrar um Usuario</h3>
      <div className="cadastrar">
        <form className="form" onSubmit={this.props.cadastrar} >
          <label>
          <p>Nome</p>
          <input type="text" placeholder="Nome" name="nome" value={this.props.cadastro.nome} onChange={this.props.atualizarDados.bind(this)} />
          </label>
          <label>
            <p>Idade</p>
            <input type="number" placeholder="Idade" name="idade" value={this.props.cadastro.idade} onChange={this.props.atualizarDados.bind(this)} />
          </label>
          <label>
            <p>Estado Civil</p>
            <input type="text" placeholder="Estado Civil" name="estado_civil" value={this.props.cadastro.estado_civil} onChange={this.props.atualizarDados.bind(this)} />
          </label>
          <label>
            <p>CPF</p>
            <input type="text" placeholder="Cpf" name="cpf" value={this.props.cadastro.cpf} onChange={this.props.atualizarDados.bind(this)} />
          </label>
          <label>
            <p>Cidade</p>
            <input type="text" placeholder="Cidade" name="cidade" value={this.props.cadastro.cidade} onChange={this.props.atualizarDados.bind(this)} />
          </label>
          <label>
            <p>Estado</p>
            <input type="text" placeholder="Estado" name="estado" value={this.props.cadastro.estado} onChange={this.props.atualizarDados.bind(this)} />
          </label>
          <button type="submite">Cadastrar</button>
          </form>
        </div>
        </div>
    )
}
}
