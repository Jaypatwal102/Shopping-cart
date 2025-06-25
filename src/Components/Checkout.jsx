import { Link } from "react-router-dom";

function Checkout({ cart }) {
  let total = cart.reduce((pre, cur) => pre + cur.price * cur.quantity, 0);
  return (
    <>
      <div className="p-4 bg-white rounded-xl shadow-md max-w-xl mx-auto space-y-4">
        {cart.map((r) => (
          <div
            key={r.id}
            className="flex justify-between items-center border-b pb-2"
          >
            <div>
              <h2 className="text-lg font-semibold">{r.name}</h2>
              <h3 className="text-gray-600">{`Qty: ${r.quantity}`}</h3>
            </div>
            <h2 className="text-green-600 font-bold">{`₹${r.price}`}</h2>
          </div>
        ))}

        <div className="flex justify-between items-center mt-4 pt-4 border-t">
          <h2 className="text-xl font-semibold">Total</h2>
          <h3 className="text-xl font-bold text-blue-700">{`₹${total}`}</h3>
        </div>

        <Link
          to="/feedback"
          className="block text-center w-full mt-4 py-3 bg-blue-600 text-white text-lg font-semibold rounded-md hover:bg-blue-700 transition"
        >
          Pay Now
        </Link>
      </div>
    </>
  );
}

export default Checkout;
