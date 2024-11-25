import './RandomQuote/RandomQuote.css'

export default function Footer(){
    return(
        <>
        <hr />
        <footer className = "author">
            <hr/>
            <p>
                &copy;
                {new Date().
                getFullYear()} My Color Picker Website ||
                Written by: Vian Paolo P. Palacio
            </p>
        </footer>
        </>
    )
}