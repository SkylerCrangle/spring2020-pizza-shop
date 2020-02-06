import { generateId } from "../utils.js"

export default class Ingredient {
  constructor(data) {
    this.ingredientName = data.ingredientName
    this.id = data.id || generateId()
    this.toppingPrice = Math.floor(Math.random() * 3)
  }

  get Template() {
    return /*html*/`
<div class="col-6">
<p>${this.ingredientName} $${this.toppingPrice}</p>


</div>
`
  }

}