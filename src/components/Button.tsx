type ButtonProps = {
    texto: string,
    onClick: () => void
}

function Button({ texto, onClick }: ButtonProps) {
    return (
        <button onClick={onClick}>
            {texto}
        </button>
    )
}

export default Button
