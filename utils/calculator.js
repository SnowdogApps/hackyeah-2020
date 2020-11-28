class Calculator {
  // all values l/year
  rainfallCollected = 0
  flushing = 0
  gardenWatering = 0
  lawnWatering = 0
  estimatedUsage = 0
  suggestedCapacity = 0
  waterReserveFactor = 0.08

  // 530 is default for Poland
  calcLitersPerYear (roofArea, yearlyRainfall = 530) {
    this.rainfallCollected = roofArea * yearlyRainfall * 0.7 // how much in the year you can collect
    return this.rainfallCollectedPerYear
  }

  calcYearlyFlushing (peopleCount) {
    this.flushing = peopleCount * 45 * 365
    return this.flushing
  }

  calcYearlyGardenWatering (gardenArea) {
    this.gardenWatering = gardenArea * 10 * 120
    return this.gardenWatering
  }

  calcYearlyLawnWatering (lawnArea) {
    this.lawnWatering = lawnArea * 5 * 120
  }

  calcEstimatedUsage () {
    this.estimatedUsage = this.gardenWatering + this.lawnWatering + this.gardenWatering
    return this.estimatedUsage
  }

  calcSuggestedCapacity () {
    this.suggestedCapacity = (this.rainfallCollected + this.estimatedUsage) / 2 * this.waterReserveFactor
    return this.suggestedCapacity
  }
}

export default new Calculator()
