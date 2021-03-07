declare class ChessBoardElement {
    moves(sq: string): string[]
    move(str: string): boolean
    highlight(...sq: string[])
}
