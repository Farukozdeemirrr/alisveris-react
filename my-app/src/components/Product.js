import { useState } from 'react'
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import bootStrap from "bootstrap";


// Product.js, App.js'e bağlı
// Önce App.js'deki product.map'e göndereceksin sonra "funciton Product'da çektiği verileri alacaksın"
function Product({ product, basket, setBasket, total, money }) {

    // alınan ürün miktarının gösterimini yap
    const basketItem = basket.find(item => item.id === product.id)

    const addBasket = () => {
        // Sepette ürün var mı yok mu kontrolünü yap
        const checkBasket = basket.find(item => item.id === product.id)
        // ürün daha önce eklenmiş

        if (checkBasket) {
            checkBasket.amount += 1
            // Aynı üründen birden fazla alma işlemi yapıyoruz
            setBasket([...basket.filter(item => item.id !== product.id), checkBasket])
        }
        else {
            setBasket([...basket, {
                id: product.id,
                amount: 1
            }])
        }
    }
    const removeBasket = () => {
        const currentBasket = basket.find(item => item.id === product.id)
        const basketWithoutCurrent = basket.filter(item => item.id !== product.id)

        currentBasket.amount -= 1

        if (currentBasket.amount === 0) {

            setBasket([...basketWithoutCurrent])
        }
        else {
            setBasket([...basketWithoutCurrent, currentBasket])
        }

    }

    return (
        <>
            {/* Ürün başlıklarını döndürüyoruz */}

            <div className='product' class="p-3 mb-2 bg-light text-dark"   >

                <img className='image' src={product.image} style={{width:'100px ',height:'100px', objectFit:'cover' }} />
                <h5>{product.title}</h5>

                <div className='price' style={{ marginBottom: '15px' }} >
                    {product.price}TL
                </div>

                <div>
                    <button onClick={addBasket} disabled={total + product.price > money} class="btn btn-success" > Ekle</button>
                    {/* Eğer sepette ürün yoksa çıkar butonu pasif olacak */}
                    <button onClick={removeBasket} disabled={!basketItem} class="btn btn-danger" style={{ marginLeft: '5px', marginRight: '5px' }}> Çıkar</button>
                    <span className='amount' style={{ marginRight: '35px', float: 'right' }}>{basketItem && basketItem.amount || 0} </span>


                </div>
            </div>


        </>
    )
}

export default Product