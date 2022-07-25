const express = require("express");

let app = express();

let Categoria = require("../modelos/categoria");

//-------METODO GET-------------

app.get("/categoria", (req, res) => {
  Categoria.find({})
    .sort("nombre")
    .exec((err, categorias) => {
      if (err) {
        return res.status(500).json({
          ok: false,
          err,
        });
      }

      res.json({
        ok: true,
        categorias,
      });
    });
});

//----------METODO GET CON ID------------
app.get("/categoria/:id", function (req, res) {
  let id = req.params.id;
  Categoria.findById(id, (err, categoriaDB) => {
    if (err) {
      return res.status(500).json({
        ok: false,
        err,
      });
    }

    if (!categoriaDB) {
      return res.status(400).json({
        ok: false,
        err: {
          message: "La categoria no existe",
        },
      });
    }

    res.json({
      ok: true,
      categoria: categoriaDB,
    });
  });
});

//-----------------Método POST---------------------------------
app.post("/categoria", (req, res) => {
  let body = req.body;

  let categoria = new Categoria({
    nombre: body.nombre,
    memoria: body.memoria,
    cpu: body.cpu,
    almacenamiento: body.almacenamiento,
  });

  categoria.save((err, categoriaDB) => {
    if (err) {
      return res.status(500).json({
        ok: false,
        err,
      });
    }
    if (!categoriaDB) {
      return res.status(400).json({
        ok: false,
        err,
      });
    }
    res.json({
      ok: true,
      categoria: categoriaDB,
    });
  });
});
//===============================

//-----------------------------Método Delete-------------------
app.delete("/categoria/:id", (req, res) => {
  let id = req.params.id;

  let estadoActualizado = {
    estado: false,
  };

  Categoria.findByIdAndUpdate(
    id,
    estadoActualizado,
    { new: true },
    (err, categoriaBorrada) => {
      if (err) {
        return res.status(400).json({
          ok: false,
          err,
        });
      }
      if (!categoriaBorrada) {
        return res.status(404).json({
          ok: false,
          err: {
            message: "Categoria no encontrada",
          },
        });
      }
      res.json({
        ok: true,
        message: "Categoría Borrada",
      });
    }
  );
});

module.exports = app;
