import './App.css';

function App() {
    return (
        <div className="App">
            <div className="container">
                <Header />
                <Menu />
                <Footer />
            </div>
        </div>
    );
}

function Header() {
    return (
        <header className="header">
            <h1>FAST REACT PIZZA CO.</h1>
        </header>
    )
}

function Footer() {
    const time = new Date();
    const status = time.getHours() >= 12 && time.getHours() <= 22 ? "Open" : "Closed"

    return (
        <footer className="footer">
            <div className="order">
                <p >We're happy to welcome you between 12:00 and 22:00</p>
                <p>Status: { status }</p>
                <button className="btn">Order</button>
            </div>
        </footer>
    )
}

function Menu() {
    const pizzaData = [
        {
            name: "Focaccia",
            ingredients: "Bread with italian olive oil and rosemary",
            price: 6,
            photoName: "pizzas/focaccia.jpg",
            soldOut: false,
        },
        {
            name: "Pizza Margherita",
            ingredients: "Tomato and mozarella",
            price: 10,
            photoName: "pizzas/margherita.jpg",
            soldOut: false,
        },
        {
            name: "Pizza Spinaci",
            ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
            price: 12,
            photoName: "pizzas/spinaci.jpg",
            soldOut: false,
        },
        {
            name: "Pizza Funghi",
            ingredients: "Tomato, mozarella, mushrooms, and onion",
            price: 12,
            photoName: "pizzas/funghi.jpg",
            soldOut: false,
        },
        {
            name: "Pizza Salamino",
            ingredients: "Tomato, mozarella, and pepperoni",
            price: 15,
            photoName: "pizzas/salamino.jpg",
            soldOut: true,
        },
        {
            name: "Pizza Prosciutto",
            ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
            price: 18,
            photoName: "pizzas/prosciutto.jpg",
            soldOut: false,
        },
    ];

    const pizzas = pizzaData.map((pizza) => {
        return (
            <Pizza name={pizza.name} ingredients={pizza.ingredients} image={pizza.photoName} price={pizza.price} soldOut={pizza.soldOut} />
        )
    })

    return (
        <main className="menu">
            <h2>OUR MENU</h2>
            <p>Authentic Italian Cuisine. 6 creative dishes to choose from. All from our stove oven, all organic, all delicious.</p>

            <ul className="pizzas">
                { pizzas }
            </ul>
        </main>
    )
}

function Pizza(props) {
    return (
        <li className={`pizza ${props.soldOut ? 'sold-out' : ''}`} style={{ textAlign: 'left' }}>
            <img src={props.image} alt="" />
            <div>
                <h3>{ props.name }</h3>
                <p>{ props.ingredients }</p>
                <span>{ props.soldOut ? 'SOLD OUT' : `$ ${props.price}` }</span>
            </div>
        </li>
    )
}


export default App;
