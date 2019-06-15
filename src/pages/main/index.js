import React, { Component } from 'react';
import api from '../../services/api';
export default class Main extends Component {
    state = {
        products :[],
        productTitle: '',
        productDescription: '',
    };

    componentDidMount() {
        this.loadProducts();
    }
    
    loadProducts =  async () => {
        const response = await api.get('/products');
        this.setState({ products: response.data.docs });
    };

    setProductTitle = (event) => {
        this.setState({ productTitle: event.target.value });
    };
    
    setProductDescription = (event) => {
        this.setState({ productDescription: event.target.value });
    };

    addProduct = () => {
        const { products, productTitle, productDescription } = this.state;

        this.setState({
            products:[
                ...products,
                {
                    title: productTitle,
                    description: productDescription,
                },
            ],
            productTitle: '',
            productDescription: '', 
        });
    };
    
    render(){
        const { 
            state: {
                products,
                productTitle,  
                productDescription, 
            },
            setProductTitle,
            setProductDescription,
            addProduct,
        } = this;
        return(
            <React.Fragment>
                <div className='product-control'>
                    <p>Adicionar tarefa</p>
                    <input 
                        type='text' 
                        placeholder='Digite o título'
                        onChange={setProductTitle}
                        value={productTitle}
                    />
                    <input 
                        type='text' 
                        placeholder='Digite a descrição'
                        onChange={setProductDescription} 
                        value={productDescription}
                    />
                    <button onClick={addProduct}>
                        Adicionar Produto
                    </button>
                </div>

                <div className='product-list'>
                    {products.map(product => (
                        <article key={product._id}>
                            <strong>{product.title}</strong>
                            <p>{product.description}</p>
                            <a href=''>Acessar</a>
                        </article>
                    ))}
                </div>
            </React.Fragment>
        );
    }
}