class formaDeBolo{
    constructor(saborDaMassa, saborDoRecheio){
        this.saborDaMassa = saborDaMassa
        this.saborDoRecheio = saborDoRecheio

    }
    escrever(){
        console.log(`um delicioso bolo de ${this.saborDaMassa} com recheio de ${this.saborDoRecheio}`)
    }    

    assar(){
        console.log("bolo assando de " + this.saborDaMassa)
    }
}


let boloFesta = new formaDeBolo("massa de baunilha", "recheio de ninho")
let boloPremium = new formaDeBolo("massa de chocolate", "recheio de avelã")


boloFesta.escrever()