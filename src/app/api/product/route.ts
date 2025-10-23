import { NextRequest, NextResponse } from "next/server";
const data = [
  {
    id: 1,
    title: "Nike Shox R4",
    price: 2100000,
    image:
      "https://static.nike.com/a/images/t_web_pw_592_v2/f_auto/8507bfd1-93ca-43dd-9e34-dd6c30afc7f1/NIKE+SHOX+R4.png",
  },
  {
    id: 2,
    title: "Nike Air Force 1 '07 WB",
    price: 3330000,
    image:
      "https://static.nike.com/a/images/t_web_pw_592_v2/f_auto/c90f7949-b685-485e-8602-23f1d079cd3a/AIR+FORCE+1+%2707+WB.png",
  },
  {
    id: 3,
    title: "Nike Air Max TL 2.5",
    price: 2849000,
    image:
      "https://static.nike.com/a/images/t_web_pw_592_v2/f_auto/5bd30c3e-63e8-4ac8-862a-ff141ab37e72/AIR+MAX+TL+2.5.png",
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
