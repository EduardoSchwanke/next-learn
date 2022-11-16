import Link from 'next/link'

function Home() {
    return (
        <div>
            <h1>Home</h1>
            <Link href="/sobre">
                <a>Acessar página Sobre</a>
            </Link>
        </div>
    )
}

export default Home

//Load: 17.34 s
//sobre 87ms