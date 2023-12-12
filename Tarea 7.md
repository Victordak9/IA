# Heurística en la Resolución de Problemas
Cuando nos enfrentamos a la tarea de resolver un problema de considerable complejidad, puede resultar desafiante encontrar una solución óptima.

Típicamente, enfoques para resolver problemas buscan ser muy específicos o tratan de abordar el problema de una manera que sea fácilmente comprensible en términos de cómo alcanzar la solución. Sin embargo, esta aproximación puede aumentar significativamente la complejidad de la resolución al punto de volverse poco rentable o ineficiente para encontrar una solución óptima.

Para muchos problemas, existen múltiples caminos hacia la solución. Aunque generalmente existe una solución más eficiente, a veces se pueden abordar los problemas de maneras menos eficientes pero más simples de comprender. Estas soluciones más simples a menudo surgen debido a la relativa facilidad con la que uno puede concebirlas, a pesar de que existan soluciones superiores.

Aquí es donde entra en juego la heurística. La heurística permite tomar un problema complejo y simplificarlo en uno más manejable, aunque no necesariamente busca una solución concreta y eficiente. En lugar de eso, se enfoca en identificar los elementos esenciales necesarios para resolver el problema en cuestión.

Mediante la heurística, es posible llegar a soluciones satisfactorias que son relativamente simples de comprender y que se pueden implementar de manera aceptablemente eficiente, aunque puedan dejar espacio para una solución más óptima.

Solución para el Problema del Laberinto
Para resolver el problema de navegar un laberinto con entrada y salida sin atravesar los muros, se busca un algoritmo adecuado.

La solución parte de la simplificación del problema al representarlo como una matriz binaria de ceros y unos, donde los unos representan muros y los ceros representan un camino.

El enfoque consiste en comenzar desde una coordenada dada que servirá como la entrada del laberinto. Se exploran los espacios circundantes en un plano cartesiano, es decir, arriba, abajo, izquierda y derecha, verificando si existen en la matriz y si forman un camino transitable.

Una vez que se han examinado los cuatro espacios, se elige el que tenga el valor más bajo y se avanza hacia ese nuevo espacio. Se asigna un valor ligeramente mayor al espacio previamente ocupado, lo que indica una prioridad menor pero aún teniendo en cuenta la posibilidad de regresar.

De esta manera, los caminos recorridos comienzan a tener valores como 0.1 o 0.2 a medida que se avanza, hasta llegar a un muro que obligue a retroceder o alcanzar la salida. Para encontrar la salida, se buscan los valores de coordenadas en los bordes del laberinto, identificando cualquier espacio con un valor de cero o el valor máximo que puede tener la matriz, lo que indica que se ha alcanzado una posición en las orillas que, al ser diferente de la entrada, representa la salida y, por lo tanto, el éxito en la resolución del laberinto.

Si no se encuentra una salida, el algoritmo regresa a la entrada por la que comenzó.

```

def explorar(laberinto, posicion_actual, entrada):
    fila_actual, columna_actual = posicion_actual
    total_filas, total_columnas = len(laberinto), len(laberinto[0])

    if 0 <= fila_actual < total_filas and 0 <= columna_actual < total_columnas:
        valor_arriba = laberinto[fila_actual - 1][columna_actual] if fila_actual - 1 >= 0 else float('inf')
        valor_abajo = laberinto[fila_actual + 1][columna_actual] if fila_actual + 1 < total_filas else float('inf')
        valor_izquierda = laberinto[fila_actual][columna_actual - 1] if columna_actual - 1 >= 0 else float('inf')
        valor_derecha = laberinto[fila_actual][columna_actual + 1] if columna_actual + 1 < total_columnas else float('inf')

        valor_minimo = min(valor_arriba, valor_abajo, valor_izquierda, valor_derecha)

        if valor_minimo == valor_arriba:
            proxima_posicion = fila_actual - 1, columna_actual
        elif valor_minimo == valor_abajo:
            proxima_posicion = fila_actual + 1, columna_actual
        elif valor_minimo == valor_izquierda:
            proxima_posicion = fila_actual, columna_actual - 1
        elif valor_minimo == valor_derecha:
            proxima_posicion = fila_actual, columna_actual + 1
        
        if proxima_posicion[0] == 0 or proxima_posicion[0] == total_filas - 1:
            if proxima_posicion != entrada:
                return proxima_posicion
        if proxima_posicion[1] == 0 or proxima_posicion[1] == total_columnas - 1:
            if proxima_posicion != entrada:
                return proxima_posicion
        
        laberinto[fila_actual][columna_actual] += 0.1
        
        return explorar(laberinto, proxima_posicion, entrada)

    return None

laberinto = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 0, 1, 0, 1],
    [1, 1, 1, 0, 1, 1, 1, 0, 1],
    [1, 0, 0, 0, 1, 0, 1, 0, 1],
    [1, 0, 1, 1, 1, 0, 1, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 1, 1, 1, 0, 1, 0, 1],
    [0, 0, 1, 0, 0, 0, 1, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1],
]

posicion_inicial = (7, 0)

final = explorar(laberinto, posicion_inicial, posicion_inicial)
print("Entrada: ", posicion_inicial, "\nSalida:  ", final)

```

Funcionamiento del Algoritmo
El algoritmo opera siguiendo la estrategia propuesta y se traduce en un código ejecutable en Python.

El algoritmo es recursivo y se llama a sí mismo cada vez que se encuentra en un nuevo espacio. Para su funcionamiento, se requiere de cierta información esencial. Esto incluye una matriz que representa el espacio, una posición que indica su ubicación en la matriz y una coordenada que identifica la entrada, que se usará más adelante para distinguir la salida.

El proceso comienza por obtener las coordenadas de la posición actual, así como las dimensiones de la matriz. Luego, se verifica si la posición actual está dentro de los límites de la matriz. Una vez confirmado esto, se procede a recopilar los valores de los espacios circundantes: arriba, abajo, izquierda y derecha. Se determina cuál de estos espacios tiene el valor más bajo, lo que indica el próximo paso a seguir.

Posteriormente, se obtienen las coordenadas del nuevo espacio y se verifica que no sea una salida. Si no es la salida, se invoca la función de manera recursiva. En este proceso, la matriz se actualiza incrementando en 0.1 el valor de la coordenada por la que se pasó, se establece un nuevo punto de inicio y se conserva la misma coordenada de entrada para su identificación.

Este algoritmo es capaz de resolver un laberinto proporcionando una matriz inicial con un único cero en el borde, donde el resto de la matriz puede tener cualquier tamaño y respetar los ceros y unos como representación de las paredes del laberinto. El resultado final es la ubicación de la entrada y la salida del laberinto.