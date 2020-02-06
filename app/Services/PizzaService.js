import Pizza from "../Models/Pizza.js"
import _store from "../store.js"
import Ingredient from "../Models/Ingredient.js"


class PizzaService {
  constructor() {
    console.log("pizza service")
  }
  addPizza(newPizza) {
    newPizza = new Pizza(newPizza)
    _store.State.pizzas.push(newPizza)
    _store.saveState()
  }

  addIngredient(newIngredient, pizzaId) {
    newIngredient = new Ingredient(newIngredient)
    let pizza = _store.State.pizzas.find(pizza => pizza.id === pizzaId)
    pizza.ingredients.push(newIngredient)
    _store.saveState()
  }

  deletePizza(id) {
    let pizzas = _store.State.pizzas.filter(pizza => pizza.id !== id)
    _store.State.pizzas = pizzas
    _store.saveState()

  }

  delTopping(idPizza, idTopping) {
    let herePizza = _store.State.pizzas.find(pizza => pizza.id == idPizza)
    let delThisTop = herePizza.ingredients.findIndex(toppining => toppining.id === idTopping)
    herePizza.ingredients.splice(delThisTop, 1)
    _store.saveState()


    // _store.State.pizzas = newPizzas
    // _store.State.pizzas = newPizzas


    /* _store.State.pizzas = pizzas.map(p => {
     let pizza = new Pizza(p)
     pizza.ingredients = pizza.ingredients.map(i => new Ingredient(i))

*/
  }






}

const PIZZASERVICE = new PizzaService()
export default PIZZASERVICE