import { NextRequest, NextResponse } from "next/server";
const data = [
  {
    id: 1,
    category: "T-shirt",
    price: 200000,
  },
  {
    id: 2,
    category: "Jeans",
    price: 330000,
  },
];
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  console.log(id);
  if (id) {
    const detailProduct = data.find((item) => item.id === Number(id));
    if (detailProduct) {
      return NextResponse.json({
        status: 200,
        message: "success",
        data: detailProduct,
      });
    }
    return NextResponse.json({
      status: 404,
      message: "Not found",
      data: {},
    });
  }

  return NextResponse.json({ status: 200, message: "success", data });
}
