import express from "express";
import mlbScoresRouter from "./routes/mlbScores";

const app = express();

app.use('/scores/mlb', mlbScoresRouter);

app.listen(3000, () => console.log("App listening on port 3000"));

