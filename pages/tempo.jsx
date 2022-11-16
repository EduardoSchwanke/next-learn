import "react-dom"

function Tempo(props) {
    const dynamicDate = new Date();
    const dynamicDataString = dynamicDate.toUTCString()

    return (
        <div>
            <div>{dynamicDataString} (dinamico)</div>
            <div>{props.staticDataString} (estatico)</div>
        </div>
    )
}


export function getStaticProps(){
    const staticDate = new Date();
    const staticDataString = staticDate.toUTCString()

    return {
        props: {
            staticDataString
        }
    }
}


export default Tempo