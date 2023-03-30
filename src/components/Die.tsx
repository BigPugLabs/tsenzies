export type DieProps = {
    value: number;
    isHeld: boolean;
}

export default function Die(props: DieProps): JSX.Element {
    return (
        <div>
            <h2>
                {props.value}
            </h2>
        </div>
    )
}
