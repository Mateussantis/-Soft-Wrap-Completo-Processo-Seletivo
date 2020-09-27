import React , {Component} from 'react';
import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';
import ReactPaginate from 'react-paginate'; 

export default class Tabela extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // lista: []
    }
  }

  render() {  
  return (
  <div>

    <h3>Tabela De Usuarios</h3>

    <table>
    <tr>
      <td className="nomes"><strong>Identificação</strong></td>
      <td className="nomes"><strong>Nome</strong></td>
      <td className="nomes"><strong>Idade</strong></td>
      <td className="nomes"><strong>Estado Civil</strong></td>
      <td className="nomes"><strong>Cpf</strong></td>
      <td className="nomes"><strong>Cidade</strong></td>
      <td className="nomes"><strong>Estado</strong></td>
      <td className="nomes"><strong>Função 1</strong></td>
      <td className="nomes"><strong>Função 2</strong></td>
    </tr>
    {
      this.props.lista.map(function(user, i){
        return(
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.nome}</td>
            <td>{user.idade}</td>
            <td>{user.estado_civil}</td>
            <td>{user.cpf}</td>
            <td>{user.cidade}</td>
            <td>{user.estado}</td>
            <td><button className="buttonAction" onClick={() => this.props.abrirModalAlterar(user)}>Alterar</button></td>
            <td><button className="buttonAction" onClick={e => this.props.deletar(user.id)} >Deletar</button></td>
          </tr>
        );
      }.bind(this))
    }
    </table>

    <ReactPaginate
      previousLabel={"<"}
      nextLabel={">"}
      breakLabel={"..."}
      breakClassName={"break-me"}
      pageCount={this.props.pageCount}
      marginPagesDisplayed={2}
      pageRangeDisplayed={5}
      onPageChange={this.props.handlePageClick.bind(this)}
      containerClassName={"pagination"}
      subContainerClassName={"pages pagination"}
      activeClassName={"active"}
    />
        
    <Modal show={this.props.modalAltera} onHide={this.props.toggleAltera}>
      <form onSubmit={this.props.alterar}>
        <div className="titulo">
          <h4 className="h4">Alterar</h4>
        </div>
        <Modal.Body className="corpo">
        <div className="corpo_form">
          <div className="label">Nome
          <input text="a" name="nome" value={this.props.altera.nome} onChange={this.props.atualizarDadosAlterar.bind(this)} />
          </div>
        <div className="label">Idade
          <input label="Idade" name="idade" type="number"value={this.props.altera.idade} onChange={this.props.atualizarDadosAlterar.bind(this)} />
        </div>
        <div className="label">Estado Civil
          <input name="estado_civil" value={this.props.altera.estado_civil} onChange={this.props.atualizarDadosAlterar.bind(this)} />
        </div>
        <div className="label">CPF
          <input name="cpf" value={this.props.altera.cpf} onChange={this.props.atualizarDadosAlterar.bind(this)} />
        </div>
        <div className="label">Cidade
          <input name="cidade" value={this.props.altera.cidade} onChange={this.props.atualizarDadosAlterar.bind(this)} />
        </div>
        <div className="label">Estado
          <input name="estado" value={this.props.altera.estado} onChange={this.props.atualizarDadosAlterar.bind(this)} />
        </div>
        </div>
        </Modal.Body>
        <Modal.Footer className="footer">
          <Button className="btnFooter" variant="secondary" onClick={this.props.toggleFecha}>Close</Button>
          <Button className="btnFooter" variant="primary" type="submit" onClick={this.props.toggleFecha}>Salvar</Button>
        </Modal.Footer>
      </form>
    </Modal>
    
  </div>

  )
}
}


