const express = require('express');
const multer = require('multer');
const multerConfig = require ('./config/multer')

const rountes =  express.Router();

const BoxController = require ("./controllers/BoxController");
const FileController = require ("./controllers/FileController");

rountes.post("/boxes", BoxController.store);
rountes.get("/boxes/:id", BoxController.show)
rountes.post(
    "/boxes/:id/files", multer(multerConfig)
    .single('file'), 
    FileController.store);

module.exports = rountes;