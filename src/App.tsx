import { nanoid } from "nanoid"
import { useState } from "react"
import Die, { DieProps } from "./components/Die"

function App(): JSX.Element {

    function genDice(): DieProps[] {
        return Array.from({ length: 10 }, () => ({
            id: nanoid(),
            holdFn: hold,
            isHeld: false,
            value: Math.ceil(Math.random() * 6)
        }))
    }

    const [dice, setDice] = useState(genDice)
    const diceElems = dice.map(die => <Die key={die.id} {...die} />)

    function roll(): void {
        //setDice(genDice())
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
