

type HangmanWordProps = {
    guessedLetters:string[]
    wordToGuess:string
}

export function HangmanWord({guessedLetters,wordToGuess}:HangmanWordProps){
    return(
        <div
            style={{
                display: "flex",
                gap: ".25em",
                fontSize: "6rem",
                fontWeight: "bold",
                textTransform: "uppercase",
                fontFamily: "monospace",
            }}
        >
            {wordToGuess}
        </div>
    )
}