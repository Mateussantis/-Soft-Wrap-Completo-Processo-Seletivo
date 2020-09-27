import React, { Component} from 'react';
import './style/App.css';
import { api } from '../../services/api';
import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import ReactPaginate from 'react-paginate'; 

export default class App extends Component {
  constructor() {
    super();    
    this.state = {
      lista: [],
      cadastro: {
        nome: "",
        idade: "",
        estado_civil: "",
        cpf: "",
        cidade: "",
        estado: ""
      },
      altera: {
        nome: "",
        idade: "",
        estado_civil: "",
        cpf: "",
        cidade: "",
        estado: ""
      },
      modalAltera: false,

      offSet: 0,
      // tableData: [],
      orgtableData: [],
      perPage: 3,
      currentPage: 0,

    }
    this.cadastrar = this.cadastrar.bind(this);
    this.deletar = this.deletar.bind(this);
    this.alterar = this.alterar.bind(this);
    this.handlePageClick = this.handlePageClick.bind(this);
  }


  // listar = () => {
  //   fetch("http://localhost:3333/users")
  //     .then(response => response.json())
  //     .then(data => this.setState({ lista: data}));
  // }

  listar = () => {
    api.get("users")
      .then(res => {
        const data = res.data
        const slice = data.slice(this.state.offSet, this.state.offSet + this.state.perPage)

        this.setState({ 
          pageCount: Math.ceil(data.length / this.state.perPage),
          orgtableData: res.data,
          lista: slice
        })
      }
    )
  }

  handlePageClick = (e) => {
    const selectedPage = e.selected;
    const offset = selectedPage * this.state.perPage;

    this.setState({
      currentPage: selectedPage,
        offset: offset
    }, () => {
      this.loadMoreData()
    });
  };

  loadMoreData() {
		const data = this.state.orgtableData;
		
		const slice = data.slice(this.state.offset, this.state.offset + this.state.perPage)
		this.setState({
			pageCount: Math.ceil(data.length / this.state.perPage),
			lista: slice
		})
  }
  

  cadastrar = (event) => {
    // event.preventDefault();

    api.post("users/", this.state.cadastro)
    .then(setTimeout(() => {
      this.listar();
    }, 1500));
    
  }

  atualizarDados = (input) => {
    this.setState({
      cadastro: {
        ...this.state.cadastro,
        [input.target.name] : input.target.value
      } 
    });
  }

  deletar = (id) => {
    api.delete("users/"+id)
    .then(res => {
      console.log("res:"+res);
      console.log("data"+res.data);
      }
    )
    .then(() => setTimeout(() => {
      this.listar();
    }, 1000))
  }

  alterar = (event) => {
    event.preventDefault();

    let id = this.state.altera.id;
    let usuario = this.state.altera;

    this.setState({
      altera: {
        nome: this.state.altera.nome,
        idade: this.state.altera.idade,
        estado_civil: this.state.altera.estado_civil,
        cpf: this.state.altera.cpf,
        cidade: this.state.altera.cidade,
        estado: this.state.altera.estado
      }
    });

    api.put("users/"+id, usuario)
    .then(response => {
      console.log("id: "+id);
      console.log(response);
      console.log(response.data);
    })
    .then(setTimeout(() => {
      this.listar();
    }, 1000));
  }

  atualizarDadosAlterar = (input) => {
    this.setState({
      altera: {
        ...this.state.altera,
        [input.target.name]: input.target.value
      }
    });
  }

  toggleAltera = () => {
    this.setState({
      modalAltera: true
    });
  }

  toggleFecha = () => {
    this.setState({
      modalAltera: false
    });
  }

  abrirModalAlterar = (user) => {
    this.toggleAltera();
    this.setState({ altera: user});
  }

  UNSAFE_componentWillMount(){
    this.listar();
  }

  UNSAFE_componentDidMount(){
    console.log('Did');
  }

  UNSAFE_componentDidUpdate(){
    console.log("Update");
  }

  UNSAFE_componentWillUnmount(){
    console.log("Unmount");
  }

  render() {
    return(
      <div className="body">

        <h3 className="h3">Cadastrar um Usuario</h3>
        <div className="cadastrar">
          <form className="form" onSubmit={this.cadastrar} >
            <label>
            <p>Nome</p>
            <input type="text" placeHolder="Nome" name="nome" value={this.state.cadastro.nome} onChange={this.atualizarDados.bind(this)} />
            </label>
            <label>
              <p>Idade</p>
              <input type="number" placeHolder="Idade" name="idade" value={this.state.cadastro.idade} onChange={this.atualizarDados.bind(this)} />
            </label>
            <label>
              <p>Estado Civil</p>
              <input type="text" placeHolder="Estado Civil" name="estado_civil" value={this.state.cadastro.estado_civil} onChange={this.atualizarDados.bind(this)} />
            </label>
            <label>
              <p>CPF</p>
              <input type="text" placeHolder="Cpf" name="cpf" value={this.state.cadastro.cpf} onChange={this.atualizarDados.bind(this)} />
            </label>
            <label>
              <p>Cidade</p>
              <input type="text" placeHolder="Cidade" name="cidade" value={this.state.cadastro.cidade} onChange={this.atualizarDados.bind(this)} />
            </label>
            <label>
              <p>Estado</p>
              <input type="text" placeHolder="Estado" name="estado" value={this.state.cadastro.estado} onChange={this.atualizarDados.bind(this)} />
            </label>
            <button type="submite">Cadastrar</button>
          </form>
        </div>

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
            this.state.lista.map(function(user, i){
              return(
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.nome}</td>
                  <td>{user.idade}</td>
                  <td>{user.estado_civil}</td>
                  <td>{user.cpf}</td>
                  <td>{user.cidade}</td>
                  <td>{user.estado}</td>
                  <td><button className="buttonAction" onClick={() => this.abrirModalAlterar(user)}>Alterar</button></td>
                  <td><button className="buttonAction" onClick={e => this.deletar(user.id)} >Deletar</button></td>
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
            pageCount={this.state.pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={this.handlePageClick}
            containerClassName={"pagination"}
            subContainerClassName={"pages pagination"}
            activeClassName={"active"}
          />
        

        <Modal show={this.state.modalAltera} onHide={this.toggleAltera}>
        <form onSubmit={this.alterar}>
            <div className="titulo">
              <h4 className="h4">Alterar</h4>
            </div>
            <Modal.Body className="corpo">
            <div className="corpo_form">
              <div className="label">
                Nome
                <input text="a" name="nome" value={this.state.altera.nome} onChange={this.atualizarDadosAlterar.bind(this)} />
              </div>
              <div className="label">Idade
                <input label="Idade" name="idade" type="number"value={this.state.altera.idade} onChange={this.atualizarDadosAlterar.bind(this)} />
              </div>
              <div className="label">Estado Civil
                <input name="estado_civil" value={this.state.altera.estado_civil} onChange={this.atualizarDadosAlterar.bind(this)} />
              </div>
              <div className="label">CPF
                <input name="cpf" value={this.state.altera.cpf} onChange={this.atualizarDadosAlterar.bind(this)} />
              </div>
              <div className="label">Cidade
                <input name="cidade" value={this.state.altera.cidade} onChange={this.atualizarDadosAlterar.bind(this)} />
              </div>
              <div className="label">Estado
                <input name="estado" value={this.state.altera.estado} onChange={this.atualizarDadosAlterar.bind(this)} />
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer className="footer">
            <Button className="btnFooter" variant="secondary" onClick={this.toggleFecha}>Close</Button>
            <Button className="btnFooter" variant="primary" type="submit" onClick={this.toggleFecha}>Salvar</Button>
          </Modal.Footer>
        </form>
      </Modal>
      </div>
    );
  }

}
