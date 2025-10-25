export default async function getData(url: string) {
  // const res = await fetch("https://fakestoreapi.com/products", {
  //   cache: "no-store",
  // });
  const res = await fetch(url, {
    cache: "force-cache",
    next: { tags: ["products"] },
    // next: { revalidate: 10 },
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}
