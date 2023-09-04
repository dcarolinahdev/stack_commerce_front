export default function ProductCard({ product }) {
    return (
        <div className="card">

            <div className="imgBox">
                <img src={product.image} alt="mouse corsair" className="mouse"></img>
            </div>

            <div className="contentBox">
                <h3>{product.name}</h3>
                <h2 className="price">61.<small>98</small> €</h2>
                <a href="#" className="buy">Buy Now</a>
            </div>

        </div>
    )
}