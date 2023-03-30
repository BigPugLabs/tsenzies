import { useState } from "react"
import Die from "./components/Die"

function App(): JSX.Element {

    function genDice(): number[] {
        return Array.from({ length: 10 }, () => Math.ceil(Math.random() * 6))
    }

    const [dice, setDice] = useState(genDice)
    const diceElems = dice.map(num => <Die number={num} />)

    function roll() {
        setDice(genDice())
    }

    return (
        <main>
            <div className="die--tray">
                {diceElems}
            </div>
            <button className="roll" onClick={roll}>Roll</button>
        </main>
    )
}

export default App
