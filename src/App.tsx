import { nanoid } from "nanoid"
import { useEffect, useState } from "react"
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

    const [tsenzies, setTsenzies] = useState(false)

    useEffect(() => {
        //console.log("diceState changed")

        if (dice.every(({ isHeld, value }) => isHeld && value == dice[0].value)) {
            setTsenzies(true)
            console.log("you win")
        }

        return () => {
            //
        }
    }, [dice])

    function roll(): void {
        setDice(dice => dice.map(die => (die.isHeld ? die : { ...die, value: Math.ceil(Math.random() * 6) })))
    }

    function hold(id: string): void {
        setDice(dice => dice.map(die => (die.id == id ? { ...die, isHeld: !die.isHeld } : die)))
    }

    return (
        <main>
            <h1 className="title">Tenzies</h1>
            <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
            <div className="die--tray">
                {diceElems}
            </div>
            <button className="roll" onClick={roll}>Roll</button>
        </main>
    )
}

export default App
