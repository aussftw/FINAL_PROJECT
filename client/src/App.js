import React, { useState } from 'react';
import MainButton from './components/common/buttons/MainButton';
import CartMini from "./components/Header/CartMini/CartMini";

function App() {
    const [clicked, setClicked] = useState(false)
    return (
        <div className="App">
            <h1>Some Shop</h1>
            <p> for real</p>
            <MainButton text={"BlaBla"} onClick={() => setClicked(!clicked)}/>
            { clicked ? <CartMini /> : null}
        </div>
  );
}

export default App;
