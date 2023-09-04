import products from '../../assets/products.json';
import CategoryList from '../CategoryList/CategoryList';
import ProductCard from '../ProductCard/ProductCard';

export default function ProductList() {

    console.log(products);

    return (
        <div className='flex px-6 mb-6'>
            <CategoryList/>
            <div className='flex justify-between flex-wrap gap-3 pl-2'>
                {
                    products.map((
                        product => (<ProductCard key={product.category_id} product={product} /> )))
                }
            </div>
        </div>
    )
}
