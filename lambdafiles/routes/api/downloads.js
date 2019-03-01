require("dotenv").config();
const express = require("express");
const router = express.Router();
const pg = require("pg");

var client = new pg.Client(process.env.RDS_SECRET);
client.connect();


//GET ALL DOWNLOADS
router.get("/", async (req, res) => {
    client.query(`SELECT * FROM downloads`)
	.then(result => {
	    res.status(200).json(result.rows);
	})
	.catch(e => {
            console.error(e),
	    res.status(404).json(e.stack);
	})
});


//CREATE NEW DOWNLOAD
router.post("/", (request, res) => {
	const {fk_file_id, user_id, fk_username} = request.body;
	
    client.query(`INSERT INTO downloads (fk_file_id, user_id, fk_username)
    VALUES ($1, $2, $3)`,[fk_file_id, user_id, fk_username])
	.then(result => {
	    res.status(200).json(result);
	})
	.catch(e => {
	    console.error(e.detail),
	    res.send(e)
	})
});


//
router.delete("/:id", (request, res) => {
    const downloadID = parseInt(request.params.id);
    client.query(`DELETE FROM downloads WHERE download_id = $1`,[downloadID])
	.then(result => {
	    res.status(200).json(result);
	})
	.catch(e => {
	    console.error(e),
	    res.send(e)
	})
});


//DELETE DOWNLOAD BY DOWNLOAD_ID
router.delete("/:id", (request, res) => {
    const downloadID = parseInt(request.params.id)
    client.query(`DELETE FROM downloads WHERE download_id = $1`,[downloadID])
	.then(result => {
	    res.status(200).json(result);
	})
	.catch(e => {
	    console.error(e),
	    res.send(e)
	})
});

//UPDATE DOWNLOAD BY DOWNLOAD_ID
router.put("/:id", (request, res) => {
	const downloadID = parseInt(request.params.id)
	const { fk_file_id, user_id, fk_username } = request.body;

	console.log("RB", request.body);
	client.query(`UPDATE downloads SET fk_file_id = $1, user_id = $2, fk_username = $3 
	WHERE download_id = $4 RETURNING fk_file_id, user_id, fk_username`, [fk_file_id, user_id, fk_username, downloadID])
	  .then(result => {
		res.status(200).json(result);
	  })
	  .catch(e => {
		console.error(e.detail), res.send(e);
	  });
  });

module.exports = router;
