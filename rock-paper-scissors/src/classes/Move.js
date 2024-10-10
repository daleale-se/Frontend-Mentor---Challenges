export default class Move {

    constructor(logic, ui) {
        this.logic = logic
        this.ui = ui
    }

    playsAgainst(otherPlayerMove) {
        if (this === otherPlayerMove) return 0
        return this.logic.playsAgainst(otherPlayerMove)
    }

    tryBeats(moveName) {
        return this.logic.tryBeats(moveName)
    }

    addClickeableEvent(gameLogic) {
        this.ui.addClickeableEvent(gameLogic, this)
    }

    selectedMove(player) {
        this.ui.selectedMove(player)
    }

}