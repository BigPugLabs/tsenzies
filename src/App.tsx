import { nanoid } from "nanoid"
import { useEffect, useState } from "react"
import Confetti from "react-confetti"
import Die from "./components/Die"

function App() {

    const [dice, setDice] = useState(genDice)
    const [tsenzies, setTsenzies] = useState(false)

    useEffect(() => {
        if (dice.every(({ isHeld, value }) => isHeld && value == dice[0].value)) {
            setTsenzies(true)
        }
    }, [dice])

    function genDice() {
        return Array.from({ length: 10 }, () => ({
            holdFn: hold,
            id: nanoid(),
            isHeld: false,
            value: Math.ceil(Math.random() * 6)
        }))
    }

    function rollOrRestart(): void {
        if (tsenzies) {
            setDice(genDice())
            setTsenzies(false)
        } else {
            setDice(dice => dice.map(die => (die.isHeld ? die : { ...die, value: Math.ceil(Math.random() * 6) })))
        }
    }

    function hold(id: string): void {
        setDice(dice => dice.map(die => (die.id == id ? { ...die, isHeld: !die.isHeld } : die)))
    }

    const diceElems = dice.map(die => <Die key={die.id} {...die} />)

    return (
        <main>
            {tsenzies && <Confetti />}
            <h1 className="title">Tenzies</h1>
            <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
            <div className="die--tray">
                {diceElems}
            </div>
            <button className="roll" onClick={rollOrRestart}>{tsenzies ? "New Game" : "Roll"}</button>
        </main>
    )
}

export default App
