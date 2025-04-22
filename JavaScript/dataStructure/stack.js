class Stack {
    constructor() {
        this.elementos = [];
    }

    //Método para adicionar um elemento no topo da pilha
    push(elemento) {
        this.elementos.push(elemento);
    }

    //Método para remover um elemento do topo da pilha
    pop() {
        this.elementos.pop();
    }
}