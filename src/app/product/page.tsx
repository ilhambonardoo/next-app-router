import Link from "next/link";
import getData from "@/services/products";

type ProductPage = {
  params: { slug: string[] };
};

export default async function DetailProductPage({ params }: ProductPage) {
  const { slug } = params;
  const products = await getData("http://localhost:3000/api/product");
  console.log(products);
  return (
    <>
      <div className="grid grid-cols-4 gap-7 mt-5 place-items-center">
        {/* <h1>
        {slug ? (
          <>
            <h1>Detail Product</h1>
          </>
        ) : (
          <>
            <h2>Product</h2>
          </>
        )}
      </h1> */}
        {products.data.length > 0 &&
          products.data.map((product: any) => (
            <Link
              href={`/product/detail/${product.id}`}
              className="w-full max-w-sm bg-gray-400 border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700"
              key={product.id}
            >
              <img
                className="p-8 rounded-t-lg object-cover h-96 w-full"
                src={product.image}
                alt="product image"
              />
              <div className="px-5 pb-5">
                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white truncate">
                  {product.title}
                </h5>
                <div className="flex items-center justify-between mt-3">
                  <span className="text-3xl font-bold text-gray-900 dark:text-white">
                    ${product.price}
                  </span>
                  <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Add to cart
                  </button>
                </div>
              </div>
            </Link>
          ))}
      </div>
      {slug && (
        <>
          <div>
            <h2>{slug[0]}</h2>
            <h2>{slug[1]}</h2>
            <h2>{slug[2]}</h2>
          </div>
        </>
      )}
    </>
  );
}
