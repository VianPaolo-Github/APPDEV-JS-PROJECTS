export default function Footer(){
    return(
        <>
        <hr />
        <footer>
            <hr/>
            <p>
                &copy;
                {new Date().
                getFullYear()} My Counter Website ||
                Written by: Vian Paolo P. Palacio
            </p>
        </footer>
        </>
    )
}