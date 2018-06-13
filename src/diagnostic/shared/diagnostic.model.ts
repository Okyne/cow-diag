export class Diagnostic {

  count: number
  cows: any[]
  date: any
  id: number
  ideal: number
  min: number
  max: number

  constructor(id, count, min, max, ideal) {
    this.date = new Date()
    this.count = count
    this.cows = []
    this.id = id
    this.ideal = ideal
    this.min = min
    this.max = max
  }

}

export interface Diagnostic {
  [prop: string]: any;
}
