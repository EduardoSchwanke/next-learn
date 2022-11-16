import Link from 'next/link'

function Home() {
    return (
        <div>
            <h1>Home</h1>
            <a href="/sobre">Acessar página Sobre</a>
        </div>
    )
}

export default Home

/*
<Link href="/sobre">
                <a>Acessar página Sobre</a>
            </Link>
*/