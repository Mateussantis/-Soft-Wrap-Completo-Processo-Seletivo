// import React, { Component} from 'react';
// import './style/App.css';
// import { api } from '../../services/api';
// import { Button } from 'react-bootstrap';
// import Modal from 'react-bootstrap/Modal';
// import ReactPaginate from 'react-paginate'; 
// import Cadastro from '../../Components/Cadastro';
// import Tabela from '../../Components/Tabela';

// export default class App extends Component {
//   constructor(props) {
//     super(props);    
//     this.state = {
//       lista: [],
//       cadastro: {
//         nome: "",
//         idade: "",
//         estado_civil: "",
//         cpf: "",
//         cidade: "",
//         estado: ""
//       },
//       altera: {
//         nome: "",
//         idade: "",
//         estado_civil: "",
//         cpf: "",
//         cidade: "",
//         estado: ""
//       },
//       modalAltera: false,

//       offSet: 0,
//       orgtableData: [],
//       perPage: 3,
//       currentPage: 0,

//     }
//     this.cadastrar = this.cadastrar.bind(this);
//     this.deletar = this.deletar.bind(this);
//     this.alterar = this.alterar.bind(this);
//     this.handlePageClick = this.handlePageClick.bind(this);
//   }
  

//   listar = () => {
//     api.get("users")
//       .then(res => {
//         const data = res.data
//         const slice = data.slice(this.state.offSet, this.state.offSet + this.state.perPage)

//         this.setState({ 
//           pageCount: Math.ceil(data.length / this.state.perPage),
//           orgtableData: res.data,
//           lista: slice
//         })
//       }
//     )
//   }

//   handlePageClick = (e) => {
//     const selectedPage = e.selected;
//     const offset = selectedPage * this.state.perPage;

//     this.setState({
//       currentPage: selectedPage,
//         offset: offset
//     }, () => {
//       this.loadMoreData()
//     });
//   };

//   loadMoreData() {
// 		const data = this.state.orgtableData;
		
// 		const slice = data.slice(this.state.offset, this.state.offset + this.state.perPage)
// 		this.setState({
// 			pageCount: Math.ceil(data.length / this.state.perPage),
// 			lista: slice
// 		})
//   }
  

//   cadastrar = (event) => {
//     // event.preventDefault();

//     api.post("users/", this.state.cadastro)
//     .then(setTimeout(() => {
//       this.listar();
//     }, 1500));
    
//   }

//   atualizarDados = (input) => {
//     this.setState({
//       cadastro: {
//         ...this.state.cadastro,
//         [input.target.name] : input.target.value
//       } 
//     });
//   }

//   deletar = (id) => {
//     api.delete("users/"+id)
//     .then(res => {
//       console.log("res:"+res);
//       console.log("data"+res.data);
//       }
//     )
//     .then(() => setTimeout(() => {
//       this.listar();
//     }, 1000))
//   }

//   alterar = (event) => {
//     // event.preventDefault();

//     let id = this.state.altera.id;
//     let usuario = this.state.altera;

//     this.setState({
//       altera: {
//         nome: this.state.altera.nome,
//         idade: this.state.altera.idade,
//         estado_civil: this.state.altera.estado_civil,
//         cpf: this.state.altera.cpf,
//         cidade: this.state.altera.cidade,
//         estado: this.state.altera.estado
//       }
//     });

//     api.put("users/"+id, usuario)
//     .then(response => {
//       console.log("id: "+id);
//       console.log(response);
//       console.log(response.data);
//     })
//     .then(setTimeout(() => {
//       this.listar();
//     }, 1000));
//   }

//   atualizarDadosAlterar = (input) => {
//     this.setState({
//       altera: {
//         ...this.state.altera,
//         [input.target.name]: input.target.value
//       }
//     });
//   }

//   toggleAltera = () => {
//     this.setState({
//       modalAltera: true
//     });
//   }

//   toggleFecha = () => {
//     this.setState({
//       modalAltera: false
//     });
//   }

//   abrirModalAlterar = (user) => {
//     this.toggleAltera();
//     this.setState({ altera: user});
//   }

//   UNSAFE_componentWillMount(){
//     this.listar();
//   }

//   UNSAFE_componentDidMount(){
//     console.log('Did');
//   }

//   UNSAFE_componentDidUpdate(){
//     console.log("Update");
//   }

//   UNSAFE_componentWillUnmount(){
//     console.log("Unmount");
//   }

//   render() {
//     return(
//       <div className="body">

//         <Cadastro cadastro = {this.state.cadastro} cadastrar = {this.cadastrar} atualizarDados = {this.atualizarDados} />

//         <Tabela 
//           listar={this.listar} lista={this.state.lista}
//           modalAltera={this.state.modalAltera} altera={this.state.altera}
//           toggleAltera={this.toggleAltera} abrirModalAlterar={this.abrirModalAlterar} alterar={this.alterar}  
//           atualizarDadosAlterar={this.atualizarDadosAlterar} toggleFecha={this.toggleFecha}
//           deletar={this.deletar} 
//           orgtableData={this.state.orgtableData} perPage={this.state.perPage} offset={this.state.offset} 
//           currentPage={this.state.currentPage} pageCount={this.state.pageCount} 
//           handlePageClick={this.handlePageClick} loadMoreData={this.loadMoreData}  
//         />
                 
//       </div>
//     );
//   }

// }
