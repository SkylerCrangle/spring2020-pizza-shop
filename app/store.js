import Value from "./Models/Value.js";
import Pizza from "./Models/Pizza.js";
import Ingredient from "./Models/Ingredient.js";

let _state = {
  activeValue: new Value({ title: "Value" }),
  /** @type {Value[]} */
  values: [],
  /** @type {Pizza[]} */
  pizzas: [],
};

function _loadState() {
  try {
    let stateObj = JSON.parse(localStorage.getItem("pizzaShop"))
    _state.pizzas = stateObj.pizzas.map(p => {
      let pizza = new Pizza(p)
      pizza.ingredients = pizza.ingredients.map(i => new Ingredient(i))
      return pizza
    })
  } catch (e) {

  }
}

class Store {
  saveState() {
    // debugger
    localStorage.setItem("pizzaShop", JSON.stringify(_state))
  }
  /**
   * Provides access to application state data
   */
  get State() {
    return _state;
  }
}


_loadState()

const STORE = new Store();
export default STORE;
