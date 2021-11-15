/* Me gustaria que mi ordenador sea de marca MSI*/

db.ordenadores.find( { "Marca": { $eq: "MSI" } } ).pretty()

/*Mi hermano le gustaría que comprar un ordenador caro para el trabajo, entonces le gustaría gastarse más de 800€*/

db.ordenadores.find( { "precio": { $gt: 800 } } ).pretty()

/*Mi amigo es youtuber entonces le gustaría gastarse en un ordenador 1000€ o más */

db.ordenadores.find( { "precio": { $gte: 1000 } } ).pretty()

/*Un cliente busca mucho almacenamiento para el pc entonces buscará entre 2, 2.5 o 3 TB */

db.ordenadores.find( { "Componentes.Almacenamiento.TB": { $in: [ 2, 2.5, 3 ] } } ).pretty()

/*Mi abuela no tiene mucha idea de ordenadores pero quiere uno para ver películas y para escribir sus libros, entonces le gustaría gastarse menos de 500€*/

db.ordenadores.find( { "precio": { $lt: 500  } } ).pretty()

/*Mi padre le gustaría gastarse poco dinero en un ordenador para un regalo entonces busca un ordenador por 400€ o menos */

db.ordenadores.find( { "precio": { $lte: 400  } } ).pretty()

/*Mi cliente tuvo una mala experiencia con las refrigeraciones líquidas porque se le estrepeó una recientemente, entonces quiere buscar los ordenadores que no las tenga */

db.ordenadores.find( { "Componentes.Refrigeracion.Tipo": { $ne: "Liquida" } } ).pretty()

/*Quiero un ordenador que tenga una placa base que no tenga ni USB 3.0 ni Displayport porque son más caros los ordenadores */

db.ordenadores.find({"Componentes.Placabase.Puertos": { $nin: [ "USB 3.0", "Displayport" ] } } )

/*Necesito un ordenador con pocos ventiladores porque suena mucho y molesto a mi madre */

db.ordenadores.find({ $nor: [ {"Componentes.Caja.Ventiladores":{$not:{ $lt: 4}}}, {"Componentes.Refrigeracion.Ventiladores":{$not:{$lt:2}}}]}).pretty()

/*Me gustaria que mi ordenador sea de MSI o que mi ordenador valga menos de 700 €*/

db.ordenadores.find( { $or: [ { "Precio": { $lt: 700 } }, { "Marca": "MSI" } ] } ).pretty()

/*Me gustaría ver los ordenadores que no tengan ni puerto VGA ni puerto displayport y pero no me acuerdo como se llamaba el otro puerto de imagen creo que era HDM...*/

db.ordenadores.find({ $and: [ {"Componentes.Placabase.Puertos":{$nin:["USB 3.0","Displayport"]}}, {"Componentes.Placabase.Puertos":{$regex:/^HD/i}}]}).pretty()

/*Me gustaría ver todos los ordenadores que valgan 1000€ o menos de 1000€ y tengan tanto puertos HDMI como Displayport */

db.ordenadores.find({ $and: [ {"Componentes.Placabase.Puertos":{ $all:["HDMI","Displayport"]}}, {"precio":{$lte:1000}}]}).pretty()

/* Estoy buscando un ordenador que tenga refrigeración liquida y que tenga un tarjeta grafica de nvidia*/

db.ordenadores.find({ $and: [ {"Componentes.Refrigeracion.Tipo":"Liquida"},{ "Componentes.Grafica.Marca": "Nvidia" } ] }).pretty()

/*Estoy buscando un pc que valga menos de 1000€ y me gustaría que tuviera un procesador intel*/

db.ordenadores.find({ $and: [ {"precio":{$lt:1000}},{"Componentes.Procesador.Marca":{$eq:"Intel"}} ] }).pretty()

/*Llevo ahorrando durante 3 años y me gustaría comprarme el ordenador que valga más de 1000€ o 1000€ y que tenga dos discos duros que tengan 1.5 o 2.0 o 2.5 TB menos no quiere*/

db.ordenadores.find({ $and: [ {"precio":{$gte:1000}}, {"Componentes.Almacenamiento.TB":{$in:[1.5, 2, 2.5]}} ] }).pretty()

/*Me quero comprar un ordenador pero soy hater de hiditec porque los disipadores de esa marca me han dado muchos problemas y también me gustaría que el precio estuviera por encima de los 500€*/

db.ordenadores.find({ $and: [ {"precio":{$gt:500}}, {"Componentes.Refrigeracion.Marca":{$ne:"Hiditec"}}]}).pretty()

/*Quiero un ordenador que tenga los USB de la caja que sean más de un USB 1.0 y menos que 3.1  */

db.ordenadores.find({"Componentes.Caja.TipoUSB":{$elemMatch:{ $gte:1.0, $lt:3.1 }}}).pretty()

/*Mi abuelo no entiende de ordenadores pero no le gustan las leds y le gustaria ver todos los componentes que no tienen leds */

db.ordenadores.find({"Componentes.Placabase,LEDS":{$exists:false}}).pretty()

/*Quiero que la caja tenga 3 tipos de USB y quiero que la marca procesador sea de MSI*/

db.ordenadores.find({ $and: [ {"Componentes.Caja.TipoUSB":{$size:3}}, {"Marca":{$eq:"MSI"}} ] }).pretty()


