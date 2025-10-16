type DetailProductPage = {
  params: { slug: string[] };
};

export default async function DetailProductPage({ params }: DetailProductPage) {
  const { slug } = await params;

  return (
    <>
      {slug ? (
        <>
          <h1>Detail Product</h1>
        </>
      ) : (
        <>
          <h2>Product</h2>
        </>
      )}
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
