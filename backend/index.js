const express = require('express');
const app = express();
const cors = require("cors")
const axios = require("axios");
require('dotenv').config()
app.use(cors())
app.get('/task', (req, res) => {
    res.status(200).send({success: true, message: "Server is up..."})
})


app.get('/nyt-stories', async (req, res) => {
    try{
        let { section } = req.query;
        console.log("Query Params", section)
        let config = {
            method: 'get',
			url: `${process.env.NYT_STORIES_URL}/${section.trim()}.json?api-key=${process.env.NYT_API_KEY}`,
			headers: {
				'Content-Type': 'application/json'
			}
        }
        let { data } = await axios(config);
        console.log("Stories from NYT", data)
        res.status(200).send({success: true, message: "Storie.", data})
    } catch(err){
        console.log("Server Error:", err)
        res.status(500).send({success: false, message: "Server Error.", data: []})
    }
})


app.listen(process.env.PORT, ()=> {
    console.log("Server is listening on PORT", process.env.PORT)
})