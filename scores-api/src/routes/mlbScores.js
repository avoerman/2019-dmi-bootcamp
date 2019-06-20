import express from "express";
import axios from "axios";
import mapToInternalModel from "../maps/mlb";
import mapGameToInternalModel from "../maps/mlbGame";

const mlbScoresUri =
  "http://site.api.espn.com/apis/site/v2/sports/baseball/mlb/scoreboard";
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const response = await axios.get(mlbScoresUri);
    const data = response.data;
    const mapped = mapToInternalModel(data);

    res.send(mapped);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.toString() });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const gameUri = mlbScoresUri + "/" + req.params.id;
    console.log(gameUri);
    const response = await axios.get(gameUri);
    const data = response.data;
    const mapped = mapGameToInternalModel(data);

    res.send(mapped);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.toString() });
  }
});

export default router;
