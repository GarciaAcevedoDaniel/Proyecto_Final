//Esto sirve para ordenadar la búsqueda del más caro al más barato

db.ordenadores.find({}).sort ({precio:1});

//Esto sirve para ordenadar la búsqueda del más barato al más caro

db.ordenadores.find({}).sort ({precio:-1});

//Esto sirve para escanear cada documento en una colección, para seleccionar aquellos documentos que coincidan con la declaración de consulta y no sea tan extenso esto te lo resume con un índice.

db.ordenadores.createIndex({precio:500})

//Este operador sirve para actualizar uno o varios documentos para cambiar sus valores, $set sirve para indicar el cambio que se va a realizar


db.ordenadores.updateMany(
    { Marca: "MSI" },
    { $set: { Precio: 500 } }
)

//La función de este operador es borrar los documentos definidos

db.ordenadores.deleteMany(
    { Marca: "MSI"}
)