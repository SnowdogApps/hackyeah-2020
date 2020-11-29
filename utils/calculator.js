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
  calcRainfallCollected (roofArea, yearlyRainfall = 530) {
    this.rainfallCollected = roofArea * yearlyRainfall * 0.7 // how much in the year you can collect
    return this.rainfallCollected
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
    return this.lawnWatering
  }

  calcEstimatedUsage (gardenArea, lawnArea, peopleCount) {
    this.estimatedUsage = this.calcYearlyFlushing(peopleCount) + this.calcYearlyGardenWatering(gardenArea) + this.calcYearlyLawnWatering(lawnArea)
    return this.estimatedUsage
  }

  calcSuggestedCapacity (roofArea, yerlyRainfall, gardenArea, lawnArea, peopleCount) {
    this.suggestedCapacity = (this.calcRainfallCollected(roofArea, yerlyRainfall) + this.calcEstimatedUsage(gardenArea, lawnArea, peopleCount)) / 2 * this.waterReserveFactor
    return this.suggestedCapacity
  }

  getResults () {
    const { rainfallCollected, estimatedUsage, suggestedCapacity } = this
    return {
      rainfallCollected,
      estimatedUsage,
      suggestedCapacity
    }
  }
}

export default new Calculator()
