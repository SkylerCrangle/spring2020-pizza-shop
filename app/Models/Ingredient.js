import { generateId } from "../utils.js"

export default class Ingredient {
  constructor(data) {
    this.ingredientName = data.ingredientName
    this.id = data.id || generateId()
  }

  get Template() {
    return /*html*/`
<div class="col-6">
<h1>${this.ingredientName}</h1>


</div>
`
  }

}