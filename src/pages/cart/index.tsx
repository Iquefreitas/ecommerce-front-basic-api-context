import { useContext } from "react";
import { Link } from "react-router-dom";

import { CartContext } from "../../contexts/CartContext";


export function Cart() {
    const { cart, total, addItemCart, removeItemCart } = useContext(CartContext);
    return (
        <div className="w-full max-w-7xl mx-auto px-6">
            <h1 className="font-medium text-2xl text-center my-4">Carrinho de compras</h1>

            {cart.length === 0 && (
                <div className="flex flex-col items-center justify-center">
                    <p className="font-semibold text-lg mb-4">Ops seu carrinho esta vazio...</p>
                    <Link
                        to={"/"}
                        className="bg-gradient-to-r from-blue-400 via-cyan-500 to-teal-500 hover:from-teal-500 hover:via-cyan-500 hover:to-blue-400 text-white font-semibold rounded-full py-3 px-6 shadow-md transition duration-300 ease-in-out transform hover:scale-105"
                    >
                        Acessar produtos
                    </Link>
                </div>
            )}
            {cart.map((item) => (
                <section key={item.id} className="flex item-center justify-between border-b-2 border-gay-300">
                    <img
                        src={item.cover}
                        alt="item.title"
                        className="w-28"
                    />
                    <strong>Preço: R${item.price.toFixed(2)}</strong>
                    <div className="flex items-center justify-center gap-3">
                        <button
                            onClick={() => removeItemCart(item)}
                            className="bg-slate-600 px-2 rounded text-white fonte-medium flex items-center justify-center">
                            -
                        </button>
                        {item.amount}
                        <button
                            onClick={() => addItemCart(item)}
                            className="bg-slate-600 px-2 rounded text-white fonte-medium flex items-center justify-center">
                            +
                        </button>
                    </div>
                    <strong className="float-right">
                        SubTotal: {item.total.toLocaleString("pt-BR", {
                            style: "currency",
                            currency: "BRL"
                        })}
                    </strong>
                </section>
            )
            )}
            {cart.length !== 0 && <p className="font-bold mt-4">Total:{total}</p>}
        </div>
    );
}

