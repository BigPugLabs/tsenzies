import { nanoid } from "nanoid"
import { useState } from "react"
import Die from "./components/Die"

function App() {

    function genDice() {
        return Array.from({ length: 10 }, () => ({
            holdFn: hold,
            id: nanoid(),
            isHeld: false,
            value: Math.ceil(Math.random() * 6)
        }))
    }

    const [dice, setDice] = useState(genDice)
    const diceElems = dice.map(die => <Die key={die.id} {...die} />)

    function roll(): void {
        setDice(dice => dice.map(die => (die.isHeld ? die : { ...die, value: Math.ceil(Math.random() * 6) })))
    }

    function hold(id: string): void {
        setDice(dice => dice.map(die => (die.id == id ? { ...die, isHeld: !die.isHeld } : die)))
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
