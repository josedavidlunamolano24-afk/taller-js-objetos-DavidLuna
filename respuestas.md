1. Variables básicas

    ¿Qué diferencia hay entre let, var y const?
     let permite que podamos reasignar, var nos permite redeclarar y reasignar y const se usa cuando el valor no cambia

    ¿Qué tipo de dato es edad?
    es un dato tipo numbre porque es un valor numerico

    ¿Qué es una variable?
    un espacio de memoria que sirve para guardar y usar datos en un programa

2. Función con el nombre que desee
    ¿Qué es una función?
    Una función es un bloque de código que realiza una tarea específica y se puede reutilizar

    ¿Qué es un return?
    es una palabra clave para una funcion para devolver un valor y terminar su ejecucion

    ¿Qué pasa si una función no tiene return?
    La función devuelve undefined
    
3. Función con parámetros

    ¿Qué son parámetros?
    Son las variables que se definen en la función para recibir datos.

    ¿Qué son argumentos?
    Son los valores reales que se envían a la función al llamarla.

    ¿Cuál es la diferencia entre ambos?
    Los parámetros se escriben al definir la función y los argumentos se pasan al ejecutarla.

5. crear objeto

    ¿Qué es un objeto en JavaScript?
    Un objeto es una estructura que permite agrupar datos usando propiedades y métodos dentro de una sola variable

    ¿Qué es una propiedad?
    es un dato o característica que pertenece a un objeto y se define con un nombre.

    ¿Cómo se accede a una propiedad?
    Se accede con un punto (.) para obtener o usar un valor que está dentro de un objeto.

6. Agregar propiedad

    ¿Cómo se agrega una nueva propiedad a un objeto?
    Se agrega una nueva propiedad a un objeto asignándole un valor con punto o corchetes.

    ¿Se puede modificar un objeto declarado con const? Explica.
    protege el objeto como referencia, no su contenido. Por eso puedes cambiar, agregar o eliminar propiedades, pero no reemplazar el objeto completo.

7. Función con objeto (SIN DESESTRUCTURACIÓN)

    ¿Por qué enviamos el objeto completo?
    porque permite a la función acceder a todas sus propiedades, evita pasar muchos parámetros y hace el código más ordenado y reutilizable.

    ¿Qué ventaja tiene enviar objetos a funciones?
    La ventaja de enviar objetos a funciones es que se pueden manejar muchos datos relacionados juntos, el código queda más claro, flexible y fácil de mantener.

8. Objeto

    ¿Cómo se accede a una propiedad dentro de otro objeto?
    Se accede usando notación punto encadenada, es decir, un punto por cada nivel del objeto.

10. Función (SIN DESESTRUCTURACIÓN)

    ¿Qué ocurre si la propiedad no existe?
    Si la propiedad no existe, el valor obtenido será undefined.

    ¿Por qué es importante validar datos?
    Es importante validar datos porque ayuda a evitar errores, mejorar la seguridad y asegurar que el programa funcione correctamente al recibir información válida.

11. Modificar propiedad

    ¿Cómo se modifica una propiedad?
    Una propiedad se modifica asignándole un nuevo valor usando punto o corchetes.

    ¿Qué diferencia hay entre modificar y copiar un objeto como harías la copia sin spread investiga?
    Modificar un objeto cambia directamente el objeto original.
    Copiar un objeto crea uno nuevo para no afectar el original.
    Sin spread, la copia se hace con Object.assign().

12. Desestructuración

    ¿Qué es desestructuración?
    La **desestructuración** es una forma de **extraer valores de objetos o arreglos** y guardarlos en **variables** de manera rápida y sencilla.

    ¿Qué ventaja tiene frente al acceso con punto?
    La **desestructuración** tiene ventaja frente al acceso con punto porque hace el código **más corto**, **más claro** y evita repetir muchas veces `objeto.propiedad`.

13. Desestructuración de objeto carro

    ¿Qué pasa si el nombre de la variable no coincide con la propiedad?
    Si el **nombre de la variable no coincide con la propiedad**, el valor será **`undefined`**, porque JavaScript no encuentra esa propiedad con ese nombre.


    ¿Es obligatorio usar el mismo nombre?
    No, no es obligatorio usar el mismo nombre. Puedes usar un alias al desestructurar para darle otro nombre a la variable.


14. Desestructuración

    ¿Por qué se usan llaves dentro de llaves?
    Porque se está desestructurando un objeto que está dentro de otro objeto.

    ¿Qué significa el anidamiento en desestructuración?
    Significa extraer propiedades de objetos internos directamente, sin usar notación punto.

15. Parámetro desestructurado

    ¿Qué significa desestructurar en el parámetro?**
    Significa **extraer las propiedades del objeto directamente en la definición de la función**.

    ¿Qué ventaja tiene esta técnica?**
    Hace el código **más claro**, **más corto** y permite usar solo los datos necesarios.


16. Desestructuración en función

    ¿Por qué no necesitas usar punto dentro del return?
    Porque al desestructurar, las propiedades ya están guardadas en variables directas, no dentro del objeto.

    ¿Qué ocurre si el objeto no tiene esa propiedad?
    El valor será undefined y, si es una propiedad anidada inexistente, puede causar un error si no se valida.

17. Renombramiento

    ¿Qué es el renombramiento?**
    Es cuando, al desestructurar, se le asigna un **nombre diferente** a una propiedad para guardarla en una variable.

    ¿Cuándo es útil cambiar el nombre de una variable?**
    Cuando quieres **evitar conflictos de nombres**, hacer el código **más claro** o usar nombres **más descriptivos**.


18. Copia con spread

    ¿Qué hace el operador spread (`...`)?
    Permite **copiar y combinar** objetos o arreglos expandiendo sus propiedades o valores en uno nuevo.

    ¿La copia es profunda o superficial?
    La copia que hace el operador spread es **superficial**, no profunda; los objetos anidados siguen compartiendo referencia.

19. Copiar objeto anidado

    ¿Por qué se debe copiar también el objeto interno?
    Porque el operador spread solo hace una **copia superficial**. Si no copias el objeto interno, ambos objetos compartirán la **misma referencia**.

    ¿Qué pasa si no lo haces?
    Si modificas el objeto interno en la copia, **también se modificará el objeto original**, causando efectos no deseados.


20. Desestructuración completa

    ¿Qué tan recomendable es hacer desestructuración muy larga?
    No es muy recomendable, porque vuelve el código **difícil de leer y mantener**.

    ¿Cuándo es mejor dividir la desestructuración?
    Cuando el objeto es **muy grande**, tiene **muchos niveles** o necesitas **claridad** en el código.

    ¿Qué errores comunes se pueden cometer?

    * Desestructurar propiedades que **no existen** (da `undefined` o error).
    * Confundirse con los **nombres de las propiedades**.
    * Hacer desestructuración **demasiado compleja** en una sola línea.


