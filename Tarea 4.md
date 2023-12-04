## Introducción
Los programas poseen la capacidad de interpretar diversos conjuntos de datos de maneras variadas, todos fundamentados en valores binarios y sus arreglos. La base de esta comprensión se establece en el concepto de matrices, donde una computadora puede discernir la combinación de elementos que representan múltiples dimensiones, partiendo de vectores presentes en una sola dimensión y escalando hacia matrices de una amplitud prácticamente infinita.
De esta manera, la computadora logra comprender estos espacios a pesar de que no sean inherentes a su naturaleza. Se asume como "natural" aquello que la computadora puede entender de forma innata o para lo cual fue específicamente diseñada. Es posible desarrollar representaciones y programas capaces de analizar estas estructuras, resolviendo así problemas relacionados con espacios de esta índole.
De manera concreta, el propósito es crear un programa que tenga la capacidad de identificar y contar los elementos distintos en un espacio bidimensional, representado por una matriz considerada como un vector de dos dimensiones.
## Desarrollo
El programa a desarrollar busca contar islas de una imagen dada, con las librerías de Python nos podemos simplificar demasiado la tarea, es algo que primero se debe deducir con lógica. No implica un esfuerzo significativo, ya que simplemente se trata de observar el espacio en el que se desarrollan los problemas o, en este caso, un juego, y analizarlo un tanto para navegar por él. La tarea puede implicar la generación de una ruta, proporcionar instrucciones precisas a alguien sobre cómo moverse, o simplemente realizar un recuento de los elementos presentes en el espacio. Este proceso incluye la habilidad de distinguir con precisión y facilidad unos elementos de otros, incluso cuando presentan patrones o colores diversos.
La razón subyacente de nuestra destreza en este aspecto radica en cómo estamos intrínsecamente "diseñados". De manera natural, casi podríamos decir que estamos programados para diferenciar entre distintos elementos. Además, somos inherentemente entrenados para reconocer colores e incluso detalles que, en algunas circunstancias, pueden ser desafiantes incluso entre individuos de la misma especie. Esta capacidad nos brinda una habilidad notable para realizar distinciones y contar elementos, algo que fue crucial para la supervivencia en comunidades más antiguas o, más específicamente, para nuestros ancestros que empleaban esta habilidad de manera vital.

Aunque seguimos utilizando esta habilidad en la actualidad, se vuelve aún más intrigante desarrollar un enfoque lógico para enseñar a una entidad no diseñada para este propósito a contar elementos en un espacio bidimensional.
Es por esto que, en esencia, un problema aparentemente sencillo no resulta tan instintivo de abordar. Se hace necesario comprender cómo la computadora interpreta el espacio que se le presenta o simula para llegar a una deducción lógica sobre la resolución efectiva del ejercicio o problema.
Para abordar la solución, es esencial considerar el uso de un enfoque iterativo y recursivo. Esto implica que el mismo modelo o instrucción para resolver el problema debe ser capaz de repetirse y utilizar sus propias instancias para abordar el problema. Por ejemplo, una instrucción como "dar un paso" puede convertirse de manera iterativa y recursiva al indicar a alguien que mueva primero el pie derecho y luego el izquierdo, repitiendo este proceso cada vez que se alterne, logrando así un avance en línea recta.
Esta misma lógica puede aplicarse al programa. Inicialmente, el programa recorrerá la matriz examinando cada uno de sus espacios y analizando sus contenidos. La información a analizar en estos espacios puede ser de cualquier tipo, aunque, por conveniencia, en este caso la trataremos como valores binarios (cero o uno). Así, todos los espacios tendrán un valor de cero, mientras que aquellos con un valor de uno podrán formar "islas". Las islas consistirán en valores cercanos en el espacio bidimensional, conectados por al menos una de sus aristas.
Desde la lógica más fundamental, es posible diseñar un programa que simplemente recorra la matriz y, al encontrar ceros, los ignore, mientras que, al hallar unos, los cuente. Esto nos permitiría contar cuántos espacios en la matriz están ocupados, por ejemplo, por tierra.
Sin embargo, nuestro objetivo no es simplemente contar espacios individuales, sino identificar islas. Esto implica, como se mencionó anteriormente, espacios unidos por al menos una arista. Esto añade complejidad al problema y exige aplicar otra capa lógica en la resolución previamente desarrollada, para ser capaces de ignorar los elementos adyacentes al primero contado y continuar sin importar la forma que pueda tener esa isla.
Para abordar la segunda capa lógica, es crucial tener en cuenta el entorno de cada espacio contado. Podemos imaginarnos recorriendo la matriz sin ser capaces de visualizar los espacios circundantes hasta que los pisamos. En este escenario, sabemos la dirección que debemos tomar, pero desconocemos el color del espacio que vamos a pisar hasta que lo hacemos.
Para determinar la existencia de islas en este espacio, podríamos adoptar la estrategia de, cada vez que encontramos un espacio negro (es decir, una isla), explorar los espacios adyacentes. Al hallar una isla negra, nos moveríamos alrededor de ella para verificar si hay otra isla negra. En cada desplazamiento a una isla, sería necesario revisar nuevamente los alrededores para asegurarnos de no pasar por alto ningún espacio sin examinar. Avanzaríamos en los ejes principales del espacio, buscando cada vez que nos movemos que no haya más islas en los mismos ejes del nuevo espacio al que nos trasladamos. Este proceso eventualmente nos llevaría a completar la evaluación de todas las islas. Una vez que hayamos evaluado todos los espacios, deberíamos registrar qué espacios ya fueron ocupados o tenidos en cuenta como parte de una isla y aumentar el contador de islas. Finalmente, regresaríamos al punto de partida.
Sin embargo, en este punto, necesitaríamos una herramienta adicional: una lista de los espacios que ya hemos cruzado. Anteriormente, simplemente contábamos cada vez que pisábamos un espacio con el valor o color que buscábamos, sin considerar su ubicación. Pero en la nueva implementación de la resolución, esto ya no sería completamente útil, ya que perderíamos la capacidad de saber qué espacios ya hemos tenido en cuenta, lo que resultaría en el recuento repetido de islas en cada avance, con pasos adicionales. Además, tampoco podríamos regresar a la posición inicial porque desconoceríamos su ubicación.
Por lo tanto, es esencial considerar un puntero o indicador que nos informe sobre nuestra posición inicial al iniciar la búsqueda de islas, y también una matriz adicional del mismo tamaño que la inicial, donde registremos los espacios que ya hemos recorrido para evitar contarlos nuevamente cuando coincidan con el espacio que estamos avanzando.
Podemos visualizar esta solución como si estuviéramos utilizando un mapa para el espacio que estamos explorando. Este mapa, inicialmente en blanco, tiene las mismas dimensiones que el espacio que estamos recorriendo, lo que facilita su comprensión. A medida que avanzamos, anotamos cada espacio que pisamos. Al explorar las islas, marcamos en el mapa los lugares que visitamos, formando así la figura de la isla y registrando los espacios recorridos. Al finalizar el recorrido, todo el mapa estaría marcado.
El primer mapa sirve para el desplazamiento efectivo y sin repetición de espacios. El segundo mapa, al final, no nos proporciona la imagen de las islas en sí, pero nos indica cuántas hay.
Esta solución podría trasladarse a un programa informático. En esencia, simulamos el comportamiento que tendría la computadora al analizar el espacio bidimensional representado a través de vectores.
Para traducir esto a un lenguaje computacional, necesitaríamos comprender cómo se desplaza la computadora. Podríamos diseñar una función capaz de recorrer el arreglo bidimensional, independientemente de sus dimensiones (entendidas no por la cantidad de arreglos, sino por su tamaño). Dentro de esta función, se llamaría a sí misma para realizar la búsqueda de islas. Cuando encuentra un espacio con el valor buscado (asumamos que es uno), se desplazaría en los ejes arriba, abajo, izquierda y derecha, buscando otros espacios con el mismo valor. Continuaría este recorrido, volviendo al punto anterior cada vez que completara una búsqueda, avanzando gradualmente y encontrando las orillas de la isla, hasta regresar al punto de inicio cuando encontró la primera orilla.
Esta solución, al basarse en una lógica simple, puede aplicarse a dimensiones adicionales del espacio. Podríamos usar la misma lógica para buscar en un espacio tridimensional, como nubes, desplazándonos arriba, abajo, izquierda, derecha, adelante y atrás al encontrar un espacio que consideramos vapor. Además, para espacios de cuatro o cinco dimensiones, que ni siquiera podemos imaginar, podríamos seguir aplicando la misma lógica. Esto se debe a que no sigue una lógica intuitiva para nosotros, sino más bien una lógica matemática basada en espacios euclídeos de dimensiones relativas, que no dependen de nuestra interpretación del espacio, sino de cómo se puede segmentar y simplificar en números y ejes con infinitas dimensiones.
## Código
```python
import cv2
import numpy as np

def contar_islas(imagen_path, umbral_diferencia=50):
    imagen = cv2.imread(imagen_path)
    gris = cv2.cvtColor(imagen, cv2.COLOR_BGR2GRAY)

    # Aplicar umbral para obtener una imagen binaria
    _, umbral = cv2.threshold(gris, 128, 255, cv2.THRESH_BINARY)

    # Dilatar la imagen en la dirección horizontal
    kernel_horizontal = np.ones((1, 5), np.uint8)
    dilatacion_horizontal = cv2.dilate(umbral, kernel_horizontal, iterations=1)

    # Detección de bordes
    bordes = cv2.Canny(dilatacion_horizontal, 50, 150, apertureSize=3)

    # Detectar líneas horizontales
    lineas_horizontales = cv2.HoughLines(bordes, 1, np.pi / 180, threshold=100,
                                        min_theta=np.pi / 4, max_theta=3 * np.pi / 4)

    # Detectar líneas verticales
    lineas_verticales = cv2.HoughLines(bordes, 1, np.pi / 180, threshold=100,
                                      min_theta=-np.pi / 4, max_theta=np.pi / 4)

    # Contar cruces de líneas para determinar el número de islas
    if lineas_horizontales is not None and lineas_verticales is not None:
        contador_islas =-2+len(lineas_horizontales)*len(lineas_verticales)
    else:
        contador_islas = 0

    return contador_islas

ruta_imagen = r'C:\xampp\htdocs\IA\imagentarea2\cap.png'

islas_contadas = contar_islas(ruta_imagen)

print(f'Número de islas: {islas_contadas}')
```
## Descripcion del código
El programa utiliza procesamiento de imágenes para contar el número de islas en una imagen:
Carga de la imagen: La imagen se carga utilizando OpenCV, una biblioteca de visión por computadora en Python.
Umbralización binaria: Se aplica un umbral para convertir la imagen en blanco y negro, donde los píxeles por encima de un cierto umbral se consideran blancos y los demás negros.
Dilatación horizontal: Se realiza una dilatación en la dirección horizontal para resaltar las líneas horizontales en la imagen.
Detección de bordes: Se utiliza el operador Canny para detectar bordes en la imagen, lo que ayuda a identificar las líneas horizontales.
Detección de líneas horizontales y verticales: Se aplica la transformada de Hough para detectar líneas horizontales y verticales en la imagen.
Conteo de intersecciones: El programa cuenta las intersecciones entre líneas horizontales y verticales para determinar el número de islas en la imagen.
Resultado: El número de islas contadas se imprime como salida.
El código tiene algunas particularidades, como contar intersecciones de líneas para inferir el número de islas, y el uso de parámetros como umbral de diferencia y estructuras de dilatación que pueden ajustarse según las características específicas de la imagen. Además, el código asume que las islas están representadas por líneas horizontales y verticales en la imagen.
## Conclusión
Estas soluciones basadas en lógica matemática ilustran cómo podemos desarrollar respuestas efectivas y simples que son aplicables a diversas instancias de un mismo tipo de problema. Esta capacidad de escalabilidad permite abordar desafíos aparentemente más complejos, pero que, en relación al problema inicial, representan una extensión que puede ser manejada gracias a la solución implementada de manera efectiva.
Estos son los tipos de enfoques que nuestra inteligencia humana puede generar. Se busca que una inteligencia artificial también pueda concebir, comprender y aplicar este tipo de soluciones. Son respuestas que, a primera vista, pueden no ser totalmente intuitivas, pero que, al analizarse desde una perspectiva específica, cobran sentido y dan estructura a un mundo que podemos interpretar de manera diferente. Estas soluciones buscan simplificar, ignorando elementos no esenciales al abordar un problema y centrándose solo en los factores clave. Al implementar esto en una inteligencia artificial, se aspira a que pueda ejecutar soluciones sin depender de una capacidad operativa masiva o de un conocimiento extenso y naturalmente adquirido a través de la experiencia, similar al que tenemos como seres humanos, al menos en una etapa inicial.
En última instancia, se busca que las máquinas puedan generar soluciones elegantes, así como las mentes brillantes también pueden hacer.
