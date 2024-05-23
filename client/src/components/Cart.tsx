import data from "../utils/data.json";

const Cart = () => {
  const itemData = {
    image: data[0].image.desktop,
    name: data[0].slug,
    price: data[0].price,
  };

  return (
    <div className="absolute flex md:justify-end bg-black2/50 z-50 h-dvh w-full px-6 md:px-8 lg:px-[170px] pt-8">
      <div className="flex flex-col gap-8 bg-white rounded-lg overflow-clip h-max md:w-[400px] p-6">
        <div className="flex justify-between items-center">
          <p className="font-bold tracking-widest uppercase">Cart (3)</p>
          <button
            type="button"
            className="text-gray-400 hover:text-primary-1 text-sm"
          >
            Remove All
          </button>
        </div>

        <div className="flex w-full justify-center items-center">
          <div className="flex gap-4 h-20 w-full justify-start items-center">
            <div className="h-20">
              <img
                src={itemData.image}
                className="h-full w-full block object-contain"
              />
            </div>
            <div className="flex flex-col gap-2">
              <p className="uppercase text-sm font-semibold tracking-wider">
                {itemData.name}
              </p>
              <p className="text-gray-400 text-sm tracking-wider">
                $ {itemData.price}
              </p>
            </div>
          </div>

          <div className="flex bg-gray1 h-8">
            <button
              type="button"
              className="w-9 text-black1 text-center hover:text-primary-1"
            >
              -
            </button>
            <p className="w-9 text-black1 text-sm items-center flex justify-center">
              1
            </p>
            <button
              type="button"
              className="w-9 text-black1 text-center hover:text-primary-1"
            >
              +
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex justify-between">
            <p className="text-gray-400 uppercase text-sm tracking-wider">
              Total
            </p>
            <p className="font-semibold tracking-wider">$ 5,336</p>
          </div>
          <button
            type="button"
            className="uppercase tracking-wider text-sm w-full py-3 text-center bg-primary-1 hover:text-primary-2 text-white"
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
