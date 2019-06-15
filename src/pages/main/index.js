import React, { Component } from "react";
import api from "../../services/api";
export default class Main extends Component {
    state = {
        products :[],
        productName: '',
    };

    componentDidMount() {
        this.loadProducts();
    }
    
    loadProducts =  async () => {
        const response = await api.get('/products');
        this.setState({ products: response.data.docs });
    };

    setProductName = (event) => {
        this.setState({ productName: event.target.value });
    };
    
    render(){
        return(
            <div className="product-list">
                <p>Adicionar tarefa</p>
                <input type='text' onChange={this.setProductName} />
                {this.state.products.map(product => (
                    <article key={product._id}>
                        <strong>{product.title}</strong>
                        <p>{product.description}</p>
                        <a href="">Acessar</a>
                    </article>
                ))}
            </div>
        );
    }
}