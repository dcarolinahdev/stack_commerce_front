import products from "../assets/products.json";
import CategoryList from "./CategoryList";
import ProductCard from "./ProductCard";

export default function ProductList() {

  return (
    <>
      <div class="p-4">
        <div>
       
        </div>
        <div class="grid grid-cols-5 gap-4">
          <div>
            <img
              class="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              class="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              class="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              class="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              class="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg"
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="container-fluid mx-auto">
        <div className="flex flex-wrap p-2">
          <div className="w-full md:w-[15%] pr-1">
            <div className="hidden md:block">
              <CategoryList />
            </div>
            <div className="md:hidden">
              <CategoryList />
            </div>
          </div>

          <div className="w-full md:w-[85%] pr-1 flex flex-wrap">
            {products.map((product) => (
              <div
                key={product.category_id}
                className="w-1/2  md:w-1/2 lg:w-1/3 xl:w-1/4 pr-1"
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
