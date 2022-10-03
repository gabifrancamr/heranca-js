class SpaceShip {
    constructor(name, maxCrew, maxVelocidade){
       this.name = name
       this.maxCrew = maxCrew
       this.maxVelocidade = maxVelocidade 
       this.currentVelocity = 0
    }

    speedUp(acceleration){
        this.currentVelocity += acceleration
        if(this.currentVelocity > this.maxVelocidade){
            console.log("Velocidade máxima ultrapassada. Diminua")
        }
    }
}

class BattleSpaceShip extends SpaceShip {
    stop(){
        this.currentVelocity = 0
        console.log("Parando nave de batalha")
    }
}

class DiscoverySpaceShip extends SpaceShip {
    stop(){
        this.currentVelocity = 0
        console.log("Recolhendo equipamentos e parando nave de descoberta")
    }
}

let darwin = new DiscoverySpaceShip("Darwin", 10, 200)
let fenix = new BattleSpaceShip("Fenix", 8, 240)

console.log(darwin)
console.log(fenix)

darwin.speedUp(210)
fenix.speedUp(230)

darwin.stop()
fenix.stop()
