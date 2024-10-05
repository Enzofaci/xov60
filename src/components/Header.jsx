import logo from "../assets/Logo.png"

function Header () {
    return (
        <header>
            <img src={logo} class="logo" />
            <nav>
                <a href="" class="itens-menu">Promoções</a>
                <a href="" class="itens-menu">Blog</a>
                <a href="" class="itens-menu">Programação</a>
                <a href="" class="itens-menu">Anuncie</a>
            </nav>
            <div class="relogio">
                15:55
            </div>
        </header>
    )
}

export default Header