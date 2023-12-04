# Ensayo

La esencia fundamental del desafío plantea un tablero de dimensiones 4x5, con cuatro alfiles de cada color dispuestos en las filas superior e inferior. El objetivo es cambiar las posiciones de los alfiles, sin considerar su orden específico en la fila. La tarea consiste en trasladar los alfiles de un color desde la parte superior hasta la inferior y viceversa, realizando un solo movimiento a la vez y alternando entre alfiles de diferentes colores, evitando movimientos consecutivos del mismo alfil.
En primer término, se estableció la cantidad mínima de movimientos requeridos para completar el desafío. Dado que el tablero cuenta con cinco filas y ambos alfiles se encuentran inicialmente en la fila más alejada, resulta imposible que un alfil llegue al extremo opuesto en un solo movimiento. De esta manera, se concluye que se necesitarán al menos dos movimientos para que cualquier alfil alcance cualquier posición en el lado contrario. En consecuencia, la cantidad mínima de movimientos posibles es el doble de la cantidad de alfiles presentes, que en este caso son ocho alfiles, lo que implica un mínimo de 16 movimientos. A partir de esta premisa, se elabora la estrategia de juego, considerando que cada vez que un alfil de un color se desplace a una casilla, otro alfil de color diferente debe moverse a una casilla del mismo color en la que se movió el primer alfil. Por ejemplo, si un alfil negro abandona una casilla negra, se debe mover un alfil blanco a una casilla negra, asegurando que ambos alfiles ocupen las casillas que dejaron vacías.
Los primeros movimientos consisten en alternar alfiles impares, llevándolos a posiciones que les permitan ingresar a la casilla desocupada del lado opuesto. Estos movimientos colocan a los alfiles de un color en una misma columna y a los alfiles del otro color en una misma fila, sin que compartan ninguna casilla con alfiles de diferente color. Por ejemplo, podrían quedar dos alfiles negros en la fila 3 sin alfiles blancos en esa fila, y dos alfiles blancos en la columna 5 sin alfiles negros en esa columna. Esta disposición facilita realizar movimientos inversos para ubicar cada alfil en el lado opuesto. Este conjunto de movimientos, para los cuatro alfiles de un lado al otro, completa un total de ocho movimientos. Este mismo proceso se replica con los alfiles restantes, siguiendo la misma estrategia y culminando en otros ocho movimientos, logrando así el número mínimo total de 16 movimientos requeridos.
El desafío en sí mismo no presenta mayores complicaciones, ya que de manera lógica es posible inferir las reglas fundamentales que conducirán al resultado más eficiente.

La restricción de que los alfiles solo pueden realizar un movimiento a la vez juega un papel determinante en cómo se ejecutan las diversas jugadas. Además, la configuración específica del tablero conlleva a que cualquier intento de lograr la máxima traslación posible se vea obstaculizado por barreras que impiden llegar al otro lado con un solo movimiento inicial.

Este escenario conduce a deducir el número mínimo de movimientos, y gracias a las reglas preestablecidas que dictan cómo se pueden llevar a cabo las jugadas, siguiendo una alternancia asociada a las reglas normales del ajedrez, se llega prácticamente de manera inevitable a la conclusión lógica más eficiente. No es necesario dedicar un esfuerzo considerable para llegar a esta solución.

Aunque existe la posibilidad de que los movimientos individuales interfieran entre sí y resulten en la necesidad de realizar más movimientos, esto es algo que, con una comprensión básica de cómo funcionan los juegos de ajedrez, o incluso con la habilidad de planificar con anticipación cómo se moverán y en qué posición se desea que termine cada pieza, se puede evitar que los movimientos se entorpezcan entre sí. Asimismo, se permite que cada pieza mantenga una distancia adecuada sin estar demasiado cerca de otras que podrían utilizar su misma posición o interactuar accidentalmente con ellas.
Este tipo de rompecabezas puede resolverse fácilmente mediante un sistema automático, como se mencionó anteriormente. La solución más efectiva se puede deducir lógicamente a partir de las mismas reglas predefinidas, lo que significa que una máquina no tendría problemas significativos para llegar a la misma conclusión que nosotros, en términos relativos. No obstante, esta dinámica cambia al introducir mayor complejidad, como la inclusión de otras piezas, por ejemplo, los caballos. Esto crea un problema que demanda un análisis más profundo de los posibles resultados, limitando los movimientos válidos y complicando el mapa de estados, requiriendo así más esfuerzo para alcanzar la solución más eficiente.

Existen otros problemas que parten de la misma base y conducen a teorías de juegos más avanzadas, con movimientos más complejos. De este modo, a partir de movimientos simples y reglas fundamentales, se pueden generar problemas de teoría de juegos que experimentan cambios significativos a medida que la complejidad aumenta. Esto influye en nuestra aproximación y análisis de los problemas, considerando que no siempre es factible lograr la solución más eficaz y, en algunas ocasiones, determinar la viabilidad de dicha solución, todo ello según la teoría que rige la resolución de problemas.

La capacidad de las inteligencias artificiales para abordar problemas, tanto simples como complejos, depende en gran medida de cómo se ingresan los diversos factores o variables y de cómo se establecen las reglas que conducen a una solución óptima. De manera análoga a la teoría de juegos, estas inteligencias pueden llevar a cabo estrategias que les permitan alcanzar la victoria en diferentes escenarios.

Cuando múltiples inteligencias artificiales se enfrentan a juegos o problemas, pueden generar resultados de manera extremadamente rápida y eficiente utilizando algoritmos específicos diseñados para resolver tareas desafiantes. Esto contrasta con el tiempo que nosotros, como seres humanos, requeriríamos para abordar problemas similares, sobre todo considerando que las computadoras procesan cientos de miles de valores por segundo.

Comprender cómo se resuelven este tipo de problemas es fundamental para obtener una visión más clara de cómo funcionan internamente tanto nuestra mente como la de una computadora. Asimismo, es crucial examinar cómo se relacionan ambas al momento de resolver problemas, y cómo pueden arrojar resultados diferentes a pesar de seguir procesos similares o basarse en un modelo que, aunque no sea exacto, está fuertemente derivado del aprendizaje humano. Este análisis destaca las notables diferencias que existen entre las capacidades de procesamiento de información de las personas.

## Movimientos

1
| A1 | A2 | A2 | A4 |
|----|----|----|----|
| -  | -  | -  | -  |
| -  | -  | -  | -  |
| -  | -  | -  | -  |
| B1 | B2 | B3 | B4 |

2 

| -  | A2 | A3 | A4 |
|----|----|----|----|
| -  | -  | -  | -  |
| -  | -  | -  | -  |
| -  | -  | -  | A1 |
| B1 | B2 | B3 | B4 |

3 
| - | A2 | A3 | A4 |
|---|----|----|----|
| - | -  | -  | -  |
| - | -  | B1 | -  |
| - | -  | -  | A1 |
| - | B2 | B3 | B4 |

4
| - | A2 | -  | A4 |
|---|----|----|----|
| - | -  | -  | A3 |
| - | -  | B1 | -  |
| - | -  | -  | A1 |
| - | B2 | B3 | B4 |

5
| -  | A2 | -  | A4 |
|----|----|----|----|
| -  | -  | -  | A3 |
| B3 | -  | B1 | -  |
| -  | -  | -  | A1 |
| -  | B2 | -  | B4 |

6
| -  | A2 | -  | A4 |
|----|----|----|----|
| -  | -  | -  | A3 |
| B3 | -  | B1 | -  |
| -  | -  | -  | -  |
| -  | B2 | A1 | B4 |

7
| B1 | A2 | -  | A4 |
|----|----|----|----|
| -  | -  | -  | A3 |
| B3 | -  | -  | -  |
| -  | -  | -  | -  |
| -  | B2 | A1 | B4 |

8
| B1 | A2 | -  | A4 |
|----|----|----|----|
| -  | -  | -  | -  |
| B3 | -  | -  | -  |
| -  | -  | -  | -  |
| A3 | B2 | A1 | B4 |

9
| B1 | A2 | B3 | A4 |
|----|----|----|----|
| -  | -  | -  | -  |
| -  | -  | -  | -  |
| -  | -  | -  | -  |
| A3 | B2 | A1 | B4 |

10
| B1 | -  | B3 | A4 |
|----|----|----|----|
| A2 | -  | -  | -  |
| -  | -  | -  | -  |
| -  | -  | -  | -  |
| A3 | B2 | A1 | B4 |

11
| B1 | - | B3 | A4 |
|----|---|----|----|
| A2 | - | -  | -  |
| -  | - | -  | B2 |
| -  | - | -  | -  |
| A3 | - | A1 | B4 |

12
| B1 | - | B3 | -  |
|----|---|----|----|
| A2 | - | -  | -  |
| -  | - | -  | B2 |
| A4 | - | -  | -  |
| A3 | - | A1 | B4 |

13
| B1 | -  | B3 | -  |
|----|----|----|----|
| A2 | -  | -  | -  |
| -  | B4 | -  | B2 |
| A4 | -  | -  | -  |
| A3 | -  | A1 | -  |

14
| B1 | -  | B3 | -  |
|----|----|----|----|
| A2 | -  | -  | -  |
| -  | B4 | -  | B2 |
| -  | -  | -  | -  |
| A3 | A4 | A1 | -  |

15
| B1 | -  | B3 | B4 |
|----|----|----|----|
| A2 | -  | -  | -  |
| -  | -  | -  | B2 |
| -  | -  | -  | -  |
| A3 | A4 | A1 | -  |

16
| B1 | -  | B3 | B4 |
|----|----|----|----|
| -  | -  | -  | -  |
| -  | -  | -  | B2 |
| -  | -  | -  | -  |
| A3 | A4 | A1 | A2 |

17
| B1 | B2 | B3 | B4 |
|----|----|----|----|
| -  | -  | -  | -  |
| -  | -  | -  | -  |
| -  | -  | -  | -  |
| A3 | A4 | A1 | A2 |

Despues del último movimiento, se logró alcanzar el resultado, logrando el intercambio completo de las piezas blancas ubicadas en la parte superior del tablero con las piezas negras situadas en la parte inferior. Este objetivo se llevó a cabo de manera eficiente y estratégica en un total de 17 movimientos, sin necesidad de eliminar ninguna pieza enemiga en el proceso. La ejecución de la táctica permitió redistribuir las piezas de ambos colores de manera exitosa, cumpliendo así con el objetivo planteado inicialmente.