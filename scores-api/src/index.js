import express from "express";
import mlbScoresRouter from "./routes/mlbScores";
import womensWorldCupRouter from "./routes/womensWorldCup";

const app = express();

app.use("/scores/mlb", mlbScoresRouter);
app.use("/scores/mlb/:id", mlbScoresRouter);
app.use("/scores/wwc", womensWorldCupRouter);

app.listen(3000, () => console.log("App listening on port 3000"));
