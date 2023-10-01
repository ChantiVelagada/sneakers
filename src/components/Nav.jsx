import "./Nav.css"

function Nav(props) {

    return (
        <>
        <header>
            <nav className="navbar">
                <img className="logo" src="./images/logo.svg" />
                <a href="#">Collections</a>
                <a href="#">Men</a>
                <a href="#">Women</a>
                <a href="#">About</a>
                <a href="#">Contact</a>
            </nav>

            <div className="login">
                <i className="fa-solid fa-cart-shopping"></i>
                <img className="avatar" src="./images/image-avatar.png" />
                <div className="cart-card">
                    <h4>Cart</h4>
                    <div className="checkout">
                        <img className="product-icon" src="./images\image-product-1-thumbnail.jpg"/>
                        <div className="co-info">
                            <p>Fall Limited Edition Sneakers</p>
                            <p> $125.00 x {props.quantity} <span>${125*props.quantity}.00</span></p>
                        </div>
                        <img className="delete" src="./images/icon-delete.svg" />
                    </div>
                    <button className="checkout-btn">Checkout</button>
                </div>
            </div>
        </header>
        </>
    )
}

export default Nav;