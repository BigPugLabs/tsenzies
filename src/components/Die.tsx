type DieProps = {
    number: number;
}

export default function Die(props: DieProps): JSX.Element {
    return (
        <div>{props.number}</div>
    )
}
