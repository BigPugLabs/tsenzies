type DieProps = {
    holdFn: (id: string) => void;
    id: string;
    isHeld: boolean;
    value: number;
}

export default function Die(props: DieProps) {
    return (
        <div className={props.isHeld ? "held" : ""} onClick={() => props.holdFn(props.id)} >
            <h2>
                {props.value}
            </h2>
        </ div>
    )
}
