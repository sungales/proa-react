import Button from "./components/Button"

function App() {

    function click() {
        console.log("clique")
    }

    return (
        <div>
            <h1>teste sinistro</h1>
            <Button onClick={click} texto="Clicar"></Button>
        </div>
    )
}

export default App
