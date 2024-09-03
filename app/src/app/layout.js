export const metadata = {
    title: 'ReadMe',
    description: 'Una aplicacion para resumir, anotar, valorar partes interesantes, capitulos de libros'
}

export default function Layout({ children }) {
    return (
        <html lang="es">
            <body>
                <header>My header</header>
                {children}
                <footer>My footer</footer>
            </body>
        </html>
    )
}