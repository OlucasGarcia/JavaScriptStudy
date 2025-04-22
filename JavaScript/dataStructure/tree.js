class Tree {
    constructor() {
        this.nos = {}
    } 

    //Método para inserir um novo valor na árvore
    inserir (arvore, valor) {

        //verifica se a árvore está recebendo um valor
        if (arvore.valor) {

            if (valor > arvore.valor) {
                this.inserir(arvore.direita, valor)
            } else {
                this.inserir(arvore.esquerda, valor)
            }

        } else {
            arvore.valor = valor
            arvore.direita = {}
            arvore.esquerda = {}
        }
    }
}