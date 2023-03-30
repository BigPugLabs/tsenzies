type DieProps = {
    number: number;
}

export default function Die(props: DieProps): JSX.Element {
    return (
        <div>
            <h2>
                {props.number}
            </h2>
        </div>
    )
}
