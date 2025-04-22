import { useReducer } from "react";
import { Minus, Plus, ShoppingCartIcon as CartIcon, Trash } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Áo thun",
    price: 250000,
    image:
      "https://bizweb.dktcdn.net/100/415/697/products/2-a1f3923b-edc0-4612-aa4c-b9b045d48fb6.jpg?v=1706691017533",
  },
  {
    id: 2,
    name: "Quần jean",
    price: 450000,
    image:
      "https://vulcano.sgp1.digitaloceanspaces.com/media/22461/JKR6994015A-%281%29.jpg",
  },
  {
    id: 3,
    name: "Giày",
    price: 850000,
    image:
      "https://contents.mediadecathlon.com/p2363380/k$38a9ed7aa958c889550b68620f84dfc9/gi%C3%A0y-tennis-nam-essential-tr%E1%BA%AFng-artengo-8668903.jpg?f=1920x0&format=auto",
  },
];

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM": {
      const existingItemIndex = state.items.findIndex(
        (item) => item.product.id === action.product.id,
      );

      if (existingItemIndex >= 0) {
        // Item already exists, increase quantity
        const updatedItems = [...state.items];
        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          quantity: updatedItems[existingItemIndex].quantity + 1,
        };
        return { ...state, items: updatedItems };
      } else {
        // Add new item
        return {
          ...state,
          items: [...state.items, { product: action.product, quantity: 1 }],
        };
      }
    }
    case "REMOVE_ITEM": {
      return {
        ...state,
        items: state.items.filter(
          (item) => item.product.id !== action.productId,
        ),
      };
    }
    case "UPDATE_QUANTITY": {
      if (action.quantity <= 0) {
        return {
          ...state,
          items: state.items.filter(
            (item) => item.product.id !== action.productId,
          ),
        };
      }

      return {
        ...state,
        items: state.items.map((item) =>
          item.product.id === action.productId
            ? { ...item, quantity: action.quantity }
            : item,
        ),
      };
    }
    default:
      return state;
  }
};

const formatPrice = (price) => {
  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(price);
};

const ShoppingCart = () => {
  const [cart, dispatch] = useReducer(cartReducer, { items: [] });

  // Calculate totals
  const totalItems = cart.items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0,
  );

  return (
    <div className="mt-5 space-y-6">
      <h1 className="text-2xl font-bold">Giỏ hàng</h1>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* Product list */}
        <div>
          <h3 className="mb-3 text-lg font-medium">Sản phẩm</h3>
          <div className="space-y-3">
            {products.map((product) => (
              <div key={product.id} className="rounded-lg border shadow-sm">
                <div className="flex items-center justify-between p-3">
                  <div className="flex items-center space-x-3">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="h-12 w-12 rounded-md object-cover"
                    />
                    <div>
                      <p className="font-medium">{product.name}</p>
                      <p className="text-sm text-gray-500">
                        {formatPrice(product.price)}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => dispatch({ type: "ADD_ITEM", product })}
                  >
                    Thêm
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Cart summary */}
        <div>
          <div className="mb-3 flex items-center">
            <h3 className="text-lg font-medium">Giỏ hàng</h3>
            <div className="ml-2 flex h-6 w-6 items-center justify-center rounded-full bg-blue-500 text-xs text-white">
              {totalItems}
            </div>
          </div>

          {cart.items.length === 0 ? (
            <div className="rounded-lg border py-8 text-center">
              <CartIcon className="mx-auto mb-2 h-10 w-10 text-gray-400" />
              <p className="text-gray-500">Giỏ hàng trống</p>
            </div>
          ) : (
            <div className="rounded-lg border shadow-sm">
              <div className="p-4">
                <div className="space-y-3">
                  {cart.items.map((item) => (
                    <div
                      key={item.product.id}
                      className="flex items-center justify-between"
                    >
                      <div className="flex items-center space-x-3">
                        <img
                          src={item.product.image || "/placeholder.svg"}
                          alt={item.product.name}
                          className="h-10 w-10 rounded-md object-cover"
                        />
                        <div>
                          <p className="font-medium">{item.product.name}</p>
                          <p className="text-sm text-gray-500">
                            {formatPrice(item.product.price)}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() =>
                            dispatch({
                              type: "UPDATE_QUANTITY",
                              productId: item.product.id,
                              quantity: item.quantity - 1,
                            })
                          }
                        >
                          <Minus className="h-3 w-3" />
                        </button>
                        <input
                          type="number"
                          value={item.quantity}
                          onChange={(e) =>
                            dispatch({
                              type: "UPDATE_QUANTITY",
                              productId: item.product.id,
                              quantity: Number.parseInt(e.target.value) || 0,
                            })
                          }
                          className="h-8 w-14 rounded-md border text-center"
                        />
                        <button
                          onClick={() =>
                            dispatch({
                              type: "UPDATE_QUANTITY",
                              productId: item.product.id,
                              quantity: item.quantity + 1,
                            })
                          }
                        >
                          <Plus className="h-3 w-3" />
                        </button>
                        <button
                          onClick={() =>
                            dispatch({
                              type: "REMOVE_ITEM",
                              productId: item.product.id,
                            })
                          }
                        >
                          <Trash className="h-3 w-3" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                <hr className="my-4 border-gray-200" />

                <div className="space-y-1.5">
                  <div className="flex justify-between">
                    <span>Tổng số lượng:</span>
                    <span>{totalItems} sản phẩm</span>
                  </div>
                  <div className="flex justify-between font-bold">
                    <span>Tổng tiền:</span>
                    <span>{formatPrice(totalPrice)}</span>
                  </div>
                </div>

                <button>Thanh toán</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default ShoppingCart;
