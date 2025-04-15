type ChessLetters = "A" | "B" | "C" | "D" | "E" | "F" | "G" | "H"

type ChessNumbers = "1" | "2" | "3"  | "4" | "5" | "6" | "7" | "8"

type ChessPosition = `${ChessLetters}${ChessNumbers}`

let position:ChessPosition = "A8";


type BoxSpacing = "margin" | "padding"

type Direction = "top" | "bottom" | "left" | "right"

type Spacing  = `${BoxSpacing}-${Direction}`  

type Units = "px" | "rem" | "%"

type Box = {
    [key in Spacing]?: `${number}${Units}`

}

let myCSS: Box = {
    "margin-bottom": "10px",
    "padding-bottom" : "10rem",
    
}