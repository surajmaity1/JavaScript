function App() {
    const handleLinkClick = (event) => {
        // event.preventDefault();
        // Logic to instead do client-side routing or show a modal etc.
    }

    return (
        <a href="/some-path" onClick={handleLinkClick}>
            Clicking this link won't take you to /some-path
        </a>
    );
}

export default App;