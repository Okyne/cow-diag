export class Diagnostic {

  id: number
  count: number
  cows: any[]
  date: any
  ideal: number
  min: number
  max: number

  constructor(id, count, min, max, ideal, date, cows) {
    this.date = date
    this.count = count
    this.cows = cows || []
    this.id = id
    this.ideal = ideal
    this.min = min
    this.max = max
  }

}

export interface Diagnostic {
  [prop: string]: any;
}
