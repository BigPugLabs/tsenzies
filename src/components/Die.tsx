export type DieProps = {
    isHeld: boolean;
    value: number;
}

export default function Die(props: DieProps): JSX.Element {
    return (
        <div className={props.isHeld ? "held" : ""}>
            <h2>
                {props.value}
            </h2>
        </div>
    )
}
