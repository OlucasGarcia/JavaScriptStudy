class Fila {
    constructor () {
        this.elementos = []
    }

    // Método para adicionar um elemento no final da fila
    enqueue(elemento) {
        this.elementos.push(elemento)
    }

    // Método para remover um elemento no começo da fila
    dequeue() {
        this.elementos.shift()
    }
}