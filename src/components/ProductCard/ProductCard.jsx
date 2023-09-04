export default function ProductCard({ product }) {
    return (
        <div className="card rounded-lg">

            <div className="imgBox pt-4">
                <img src={product.image} alt="product image" className="mouse"></img>
            </div>

            <div className="contentBox pt-4">
                <h3>{product.name}</h3>
                <h2 className="price">61.<small>98</small> €</h2>
                <a href="#" className="buy mt-2 py-1 px-2 rounded-lg">Buy Now</a>
            </div>

        </div>
    )
}