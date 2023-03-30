interface DieProps {
    number: number;
}

export default function Die(props: DieProps) {
    return (
        <div>{props.number}</div>
    )
}
