import products from '../../assets/products.json';
import CategoryList from '../CategoryList/CategoryList';
import ProductCard from '../ProductCard/ProductCard';

export default function ProductList() {

    console.log(products);


    return (
        
         
        <div className='productList--container'>
            <CategoryList/>
            {products.map((product => (
            <ProductCard product={product} />
        )))}</div>
    )
}

  