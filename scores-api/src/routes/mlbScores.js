import express from "express";
import axios from "axios";
import mapToInternalModel from "../maps/mlb";

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

export default router;
