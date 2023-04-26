# ECOA

A major redesign of the traditional Tec's primary satisfaction survey: ECOA

![](demo.jpeg)

# ToDo's - Domingo

## Videojuego

### Felipe

- [ ] Deshabilitar botón de finalizar si el progress no está en verde en ambas banderitas
- [ ] Obtener `?studentRegistration` del iframe URL con `Application.absoluteURL`
- [ ] Agregar control por teclado exclusivamente (preguntarle al profe si se ocupa)
- [ ] No debe de dejar avanzar a la siguiente si no ha contestado la pregunta actual (mostrar una alerta)
- [ ] Que no pueda quitarle el focus a la pregunta cuando clickea afuera
- [ ] Cachar un error en caso de que no haya encuestas activas al hacer el /progress (mostrar una alerta)
- [ ] Confusión: botón de back no funcionando en la pregunta inicial (tienes que picarle a home)

### Santiago

- [ ] Animación Teus feliz/triste
- [ ] Animación Premio Random
- [ ] Referencias de las imagenes
- [ ] Música de fondo (que no se cruce con la final)
- [ ] Sonido de click al botón
- [ ] Cambiar materia a `unidad de formación` en la banderita inicial
- [ ] Poner pantalla de inicio con instrucciones y mecánica
- [ ] Variedad de los sonidos
- [ ] Contraste de botones en la UI (no deben ser rojos/verdes)
- [ ] Hacer el fetch para el premio final
- [ ] Tamaño de botones consistentes
- [ ] Cambiar icono de home a uno visible en todas las pantallas (blanco)
- [ ] Avanzar en las diapositivas de la presentación final

## Front

- [ ] Color de UI similar al del videojuego
- [ ] Terminar sección de Encuestas
- [ ] Mejorar diseño de CSS
- [ ] Re-diseñar front de encuesta activa, ahora será por medio de fechas
- [ ] Añadir sección para `Bloque`
- [ ] Cachar error cuando pones título duplicado en el survey (viene del back)
- [ ] Cachar error cuando quieres crear una encuesta que es en una fecha con overlap (viene del back)
- [ ] Cachar error cuando la startDate es mayor que la endDate (viene del back)
- [ ] Dashboard de PowerBI
- [ ] Seguridad para el login es necesaria (dice el profe de web). Osea, si ponemos `/teachers` y no estamos autenticados, no debería dejarnos entrar. (Protected Routes w/ React Router)
- [ ] Agregar botón de logout
- [ ] Enviar información del front al videojuego
- [ ] Mostrarla info del Teacher en el dashboard, con caso de error cuando no existe el profe

## Backend

- [ ] Endpoints faltantes de `answers`, `comments`, `finish`
- [ ] Respuestas del 0 - 10 y el NULL value. Agregar validación `zod`.
- [ ] Preguntar si los 2 stored procedures y 1 trigger que re-hicimos están bien
- [ ] Pasa algo si agregamos el string: `¿Cómo evalúas los siguientes enunciados relacionados con el Bloque?  Los temas, las actividades y el reto durante el Bloque:` antes de cada pregunta?
- [ ] Implementar feature de `activa` internamente para simular periodos
- [ ] Acomodar bien el diagrama relacional del workbench
- [ ] Cuando el usuario le de a finalizar, debe haber un error si intenta finalizarla pero le faltan preguntas.
- [ ] Dashboard de PowerBI para vista de /profesor?
- [ ] Endpoint de teacherInfo
- [ ] Mover preguntas abiertas a lo último
- [ ] Quitar preámbulos de preguntas B y C
- [ ] Importar tabla de teacher del CSV que nos dieron, no agregar info de matrícula de la miss, solamente lectura y desplegar, no escribir en tabla de teacher
- [ ] Terminar rubrica de excel
- [ ] Stored procedure para tener fecha de la ultima encuesta activa, y luego hacer el delete
- [ ] Cambiar `materia` a `unidada de formacion` en las preguntas de la ecoa

# References & Credits

- Chris Kolmenic MySQL ENUM's Article: https://komlenic.com/244/8-reasons-why-mysqls-enum-data-type-is-evil/
- Table Inheritance Article: https://www.freecodecamp.org/news/single-table-inheritance-vs-polymorphic-associations-in-rails-af3a07a204f2/amp/
- Class Table Ineritance: https://www.martinfowler.com/eaaCatalog/classTableInheritance.html
- Single Table Ineritance: https://www.martinfowler.com/eaaCatalog/singleTableInheritance.html
- Inheritance vs Composition Article: https://betterprogramming.pub/inheritance-vs-composition-2fa0cdd2f939
- Dependency Injection Article: https://8r14z.medium.com/dependency-injection-for-dummies-168dad181a3d
- MiduDev: https://www.youtube.com/@midudev
- W3Schools: https://www.w3schools.com/
- StackExchange: https://stackexchange.com/
- StackOverflow: https://stackoverflow.com/
- MySQLTutorial: https://www.mysqltutorial.org/

# Development Team

Team **2**

- **Backend** - Pedro Alonso Moreno Salcedo A01741437
- **Backend** - Kerim Taray Malagon A0027581
- **Unity** - Santiago Velasquez Chang A00832788
- **Unity** - Felipe de Jesús González Acosta A01275536
- **Frontend** - Adrián Alejandro Ramírez Cruz A00830640

![](https://contrib.rocks/image?repo=pedroalonsoms/ecoa)
