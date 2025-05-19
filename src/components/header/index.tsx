import { useContext } from "react";
import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { CartContext } from '../../contexts/CartContext';

export function Header() {
    const { cartAmount } = useContext(CartContext)

    return (
        <header className="w-full bg-gray-900 text-white shadow-md sticky top-0 z-10">
            <nav className="w-full max-w-7xl mx-auto h-16 flex items-center justify-between px-6">
                <Link className="font-bold text-xl sm:text-2xl" to={"/"}>
                    Shop
                </Link>

                <Link className="relative" to={"/cart"}>
                    <FiShoppingCart size={24} />
                    {cartAmount > 0 && (
                        <span className="absolute -top-2 -right-2 min-w-[1rem] h-5 px-2 flex items-center justify-center bg-blue-500 rounded-full text-white text-xs font-semibold">
                            {cartAmount}
                        </span>
                    )}
                </Link>
            </nav>
        </header>
    );
}