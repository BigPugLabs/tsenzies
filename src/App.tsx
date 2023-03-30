import { useState } from "react"
import Die, { DieProps } from "./components/Die"

function App(): JSX.Element {

    function genDice(): DieProps[] {
        return Array.from({ length: 10 }, () => ({ value: Math.ceil(Math.random() * 6), isHeld: false }))
    }

    const [dice, setDice] = useState(genDice)
    const diceElems = dice.map(die => <Die {...die} />)

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
