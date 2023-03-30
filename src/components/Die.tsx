export type DieProps = {
    id: string;
    isHeld: boolean;
    value: number;
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
