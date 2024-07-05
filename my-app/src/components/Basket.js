import { useState } from "react"
import BasketItem from "./BasketItem"


function Basket({ basket, product }) {
    return (
        <>
            {basket.map(item => (
                // BasketItem'a item' ı prop olarak gönderdik
                <BasketItem item={item}
                    // Ürünün id'sine ulaşıp ürün ismini gösterdik
                    product={product.find(p => p.id === item.id)} />
            ))}

        </>
    )
}



export default Basket
