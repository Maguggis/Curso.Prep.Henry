algunos apuntes de las clases

## OBJETOS
dentro de cada objeto vamos a encontrar instancias definidas como un conjunto KEY:VALUE
js es orinetado a objetos o no?? o es de prototipado??
se puede usar como orientado a objetos pero no es ese su fin con el que fue creado

como construir objetos:
objeto literal ===
    const miObjeto = {
        nombre: "sada",
        edad: ,
        genero: ,
        nivelDeConsciencia: "nulo",
        serGroso: function(){
            if ( esGroso ){
                console.log("Es groso")
            },
        }
    }

# para crear constructores recorda que son FUNCIONES constructoras por lo tanto:
    function Persona(nombre, apellido){
        this.nombre = nombre,
        this.apellido = apellido,
    }
# para agregarle objetos:

const pedro = new Persona(pedro, lezcano);

## RECORDAR:
- keyword new
- convencion constructores siempre comienzan con mayus
- keyword this: recordar que por dentro el new lo que hace es bindear el los parametros que le pasemos al objeto, o sea el this le indica que objeto es al que le estamos agregando esas caracteristicas

el metodo prototype lo que nos permite es ir agregandole nuevos parametros a la clase constructora DIRECTAMENTE cosa qque sea agregado como key:value a todos los objetos que hayamos creado o los por crear.
    para saber el prototipo de un objeto hacemos : miObjeto.__proto__

    si yo busco una propiedad en el objeto que no esta incluida en el mismo, js pasa a su prototipo y lo busca ahi a ver si esta!!
    prototypechain: la manera que js va buscando prototipo por prototipo hasta encontrar el elemento que le estamos pidiendo o metodo 


algo aun mas interesante es que podemos asignarle un valor default!
        ej: Persona.prototype.sexual = "" || "No sabemos";
    en este caso si el metodo sexual se encuentra vacio retornara la segunda opcion ya que un string vacio es false!!!
    en el caso contrario al ser true el primer valor del || ya retorna ese ya que js toma la sentencia como true

usar el && se llama "short circuit" es un quilombo: basicamente si a es true define b, y si a es false directamente ya lo define porque no pasa a b.
    ej. var mate = {amargo: "si"}
        var cafe;

        mate && cafe.amargo ===> retorna : amargo:si
        cafe.amargo && mate ===> 

    usos: basicamente se lo usa para decir ok si el primer elemento del && existe quiero ver que tiene en el segundo elemento del &&

    esto es un operador de control, y se llama short circuit porque al segundo ya directamente no lo lee y hace como "cortocircuito"

# BASICAMENTE

muchas cosas no me quedaorn claras, pero al parecer todas las propiedades de la clase constructora las ponemos en la clase y todos los metodos los agregamos con prototipado! siempre con this 
super significa que estoy invocando al constructor de la clase que extiendo!

otra manera qes directamente usando class que tiene el ultimo ES