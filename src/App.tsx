import Die from "./components/Die"

function App(): JSX.Element {

    return (
        <main>
            <div className="die--tray">
                <Die number={Math.floor(Math.random() * 6) + 1} />
                <Die number={Math.floor(Math.random() * 6) + 1} />
                <Die number={Math.floor(Math.random() * 6) + 1} />
                <Die number={Math.floor(Math.random() * 6) + 1} />
                <Die number={Math.floor(Math.random() * 6) + 1} />
                <Die number={Math.floor(Math.random() * 6) + 1} />
                <Die number={Math.floor(Math.random() * 6) + 1} />
                <Die number={Math.floor(Math.random() * 6) + 1} />
                <Die number={Math.floor(Math.random() * 6) + 1} />
                <Die number={Math.floor(Math.random() * 6) + 1} />
            </div>
        </main>
    )
}

export default App
