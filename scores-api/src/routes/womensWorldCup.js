import express from "express";
import axios from "axios";
import mapToInternalModel from "../maps/womensWorldCup";
import mapMatchToInternalModel from "../maps/womensWorldCupMatch"

const scoreboardUri =
  "http://site.api.espn.com/apis/site/v2/sports/soccer/fifa.wwc/scoreboard";
const gameSummaryUri = 
  "http://site.api.espn.com/apis/site/v2/sports/soccer/fifa.wwc/summary?event=";
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const response = await axios.get(scoreboardUri);
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
    const gameUri = gameSummaryUri + req.params.id;
    console.log(gameUri);
    const response = await axios.get(gameUri);
    const data = response.data;
    const mapped = mapMatchToInternalModel(data);

    res.send(mapped);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.toString() });
  }
});

export default router;
