import { useEffect, useState, useContext } from "react";
import { BsCartPlus } from "react-icons/bs";

import { api } from '../../services/api';
import { CartContext } from "../../contexts/CartContext";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

export interface ProductProps {
    id: number,
    title: string;
    description: string;
    price: number;
    cover: string;
}

export function Home() {
    const { addItemCart } = useContext(CartContext)
    const [products, setProducts] = useState<ProductProps[]>([]);

    useEffect(() => {
        async function getProducts() {
            const response = await api.get("/products")
            setProducts(response.data);
        }
        getProducts();
    }, [])

    function handleAddCartItem(products: ProductProps) {
        toast.success("Produto adicionado no carrinho!")
        addItemCart(products);
    }

    return (
        <div>
            <main className="w-full max-w-7x1 px-4 mx-auto">
                <h1 className="font-bold text-2xl mb-4 mt-10 text-center">
                    Produtos em alta
                </h1>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-5">
                    {products.map((products) => (
                        <section key={products.id} className="w-full">
                            <Link to={`/product/${products.id}`}>
                                <img
                                    className="w-full rounded-lg max-h-70 mb-2"
                                    src={products.cover}
                                    alt={products.title}
                                />
                                <p className="font-medium mt-21mb-2">{products.title}</p>
                            </Link>
                            <div className="flex gap-3 items-center">
                                <strong className="text-zinc-700/90">
                                    {products.price.toLocaleString("pt-BR", {
                                        style: "currency",
                                        currency: "BRL"
                                    })}
                                </strong>
                                <button className="bg-zinc-900 p-1 rounded" onClick={() => handleAddCartItem(products)}>
                                    <BsCartPlus size={20} color="#FFF" />
                                </button>
                            </div>
                        </section>
                    ))}
                </div>
            </main>
        </div>
    );
}
