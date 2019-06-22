# 2019-dmi-bootcamp
2019 Bootcamp Materials

## Run API
```
> cd scores-api
> npm install
> npm run start
```

**Endpoints**

* http://localhost:3000/scores/mlb - MLB
  - ?dates=YYYYMMDD - filter by date
* http://localhost:3000/scores/mlb/:gameId - MLB Game Summary (box score)
* http://localhost:3000/scores/wwc - Women's World Cup
  - ?dates=YYYYMMDD - filter by date
* http://localhost:3000/scores/wwc/:gameId - Women's World Cup Game Summary
