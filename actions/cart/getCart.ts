import axios from "axios";

export const getToCart = async (userId: any, jwt: any) => {
  const Urls = `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/user-carts?filters[userId][$eq]=${userId}&[populate][products][populate][images][populate][0]=url`;

  try {
    const response = await axios.get(Urls, {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });
    const data = response.data.data;
    const cartItemList = data.map((item, index) => ({
      name: item.products?.data[0].name,
      quantity: item.quantity,
      amount: item.amount,
      image: item.products?.data[0].images.data.url,
      id: item.id,
      product: item.products?.data[0].id,
    }));

    return cartItemList;
  } catch (error) {
    console.log("error", error.response.data);
    throw error;
  }
};
