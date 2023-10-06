// Creamos la clase de nodos
class Nodo {
    constructor(valor) {
        this.valor = valor;
        this.izquierda = null;
        this.derecha = null;
    }
}

// Definimos el arbol
class BinaryTree {
    constructor() {
        this.raiz = null;
    }

    // Función del árbol para agregar un valor
    insertar(valor) {
        // Crear nodo
        const nodoNuevo = new Nodo(valor);
        // Si el árbol está vacío
        if (this.raiz === null) {
            this.raiz = nodoNuevo;
            return true;
        }
        else {
            // Buscar la posición en el árbol si ya tiene datos
            let nodoActual = this.raiz;
            while (true) {
                // Si es menor se va al sub- árbol de la izquierda
                if (valor < nodoActual.valor) {
                    // Si el hijo de la izquierda está vacío se inserta un nodo
                    if (nodoActual.izquierda === null) {
                        nodoActual.izquierda = nodoNuevo;
                        return true;
                    }
                    // Se mueve hacia el nodo de la izquierda
                    nodoActual = nodoActual.izquierda;
                }
                // Si es mayor o igual te vas a la derecha
                else {
                    // Si el sub-árbol derecho es nulo, se inserta un nuevo nodo
                    if (nodoActual.derecha === null) {
                        nodoActual.derecha = nodoNuevo;
                        return true;
                    }
                    // Te mueves al nodo de la derecha
                    nodoActual = nodoActual.derecha;
                }
            }
        }
    }

    // Función para la búsqueda
    buscar(valor) {
        const coincidencias = []; // Creamos un arreglo para almacenar las coincidencias
        this.buscarNodo(this.raiz, valor, coincidencias); // Iniciamos la búsqueda desde la raíz
        return coincidencias; // Retornamos el arreglo de coincidencias
    }

    buscarNodo(nodo, valor, coincidencias) {
        if (nodo === null) {
            return;
        }

        if (valor === nodo.valor) {
            coincidencias.push(nodo.valor); // Agregamos la coincidencia al arreglo
        }

        if (valor <= nodo.valor) {
            this.buscarNodo(nodo.izquierda, valor, coincidencias); // Buscamos en el sub-árbol izquierdo
        }

        if (valor >= nodo.valor) {
            this.buscarNodo(nodo.derecha, valor, coincidencias); // Buscamos en el sub-árbol derecho
        }
    }
}


// Ejemplo de uso
const binaryTree = new BinaryTree();
binaryTree.insertar(5);
binaryTree.insertar(2);
binaryTree.insertar(3);
binaryTree.insertar(8);

// Método buscar y notificar todas las coincidencias
console.log(binaryTree.buscar(4)); // Output: []
console.log(binaryTree.buscar(3)); // Output: [3]
console.log(binaryTree.buscar(8)); // Output: [8]