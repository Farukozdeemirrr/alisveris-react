import './App.css';
import { useState, useEffect } from 'react';
import Header from './components/Header'
import Product from './components/Product';
import Basket from './components/Basket';
import product from './product.json'



function App() {
  // useState, renderlar arasında veri tutmayı sağlar.
  const [money, setMoney] = useState(50000)
  const [basket, setBasket] = useState([])
  const [total, setTotal] = useState(0)

  // Bileşenin içine “useEffect” yerleştirmek, “count” durum değişkenine (veya herhangi bir props'a) bu efektten (etkiden) 
  // erişmemizi sağlar. “Count” durum değişkenini okumak için özel bir API'a ihtiyacımız yok 
  useEffect(() => {


    // reduce() yöntemi, dizi değerlerini yalnızca bir değere indirger. Çıktı değerini almak için dizinin her bir elemanı 
    // üzerinde bir reducer işlevi çalıştırır.
    setTotal(
      basket.reduce((acc, item) => {
        return acc + (item.amount * (product.find(product => product.id === item.id).price))
      }, 0),
    )

    console.log(total)
  }, [basket])

  return (
    <>
      {/* Moneyi ve totali header'a gönderme işlemi yapıyoruz */}
      <Header total={total} money={money} product={product} basket={basket} />
      {/* Basket id'lerimizi alıyoruz */}
      
      <div className='container'>
        {product.map
          (product =>
            (<Product key={product.id} total={total} money={money} basket={basket} setBasket={setBasket} product={product} />)

          )}  </div>

    </>
  );
}

export default App;
