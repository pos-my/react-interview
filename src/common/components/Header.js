function Header() {
    return (
        <>
            <nav className="navbar navbar-dark bg-dark" data-test="navbar">
                <span className="navbar-brand mb-0 h1"
                      style={{ textAlign: 'center', margin: '8px' }}
                      data-test="navbar-content"
                >ABC Restaurant</span>
            </nav>
        </>
    )
}

export default Header