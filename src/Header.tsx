import "./Header.css"
export default function Header() {
    return(
        <header>
            <div id="titlebox">
                <h1 id="titre">L'histoire de Counter Strike </h1> 
                <button className="btn" onClick={() => window.open ("https://fr.wikipedia.org/wiki/Counter-Strike", "_blank")}>Wiki CS</button>
            </div>
        </header>
    )
}