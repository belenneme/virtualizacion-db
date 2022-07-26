
//=================Puerto====================
process.env.PORT= process.env.PORT || 3000

//--------Definir entornos------------
process.env.NODE_ENV = process.env.NODE_ENV || 'dev'

//---------Base de Datos---------------

let urlDB;

if(process.env.NODE_ENV==='dev'){
    urlDB='mongodb://localhost:27017/virtualizacion'
}else{
    urlDB= process.env.MONGO_URI
}

process.env.URLDB= urlDB

process.env.CADUCIDAD_TOKEN= "48h"

process.env.SEED= process.env.SEED || "este_es_el_seed"

