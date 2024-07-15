import user, { products } from "../data/data";

function AdminPanel() {
    return (
        <button>Admin Login</button>
    );
}

function LoginForm() {
    return (
        <button>User Login</button>
    );
}

function Credentials() {
    let content;
    if (user.isLoggedIn) {
        content = <AdminPanel />
    } else {
        content = <LoginForm />
    }
    return (
        <div>
            {content}
        </div>
    );
}

const listItems = products.map(product =>
    <li key={product.id}>{product.title}</li>
);

function ListOfItems() {
    return (
        <ul>{listItems}</ul>
    );
}

function AlertShow() {
    function handleClick() {
        alert('You clicked me!');
    }

    return (
        <button onClick={handleClick}>
            Show Alert
        </button>
    );
}



function ButtonClickCounter({count, onClick}) {

    return (
        <button onClick={onClick}>
            Clicked {count} times
        </button>
    );
}



export { Credentials, ListOfItems, AlertShow, ButtonClickCounter };