import _pizzaService from "../Services/PizzaService.js"
import _store from "../store.js"

function _draw() {
  let pizzas = _store.State.pizzas
  let pizzaElem = document.getElementById("pizzaRow")
  let template = ""

  pizzas.forEach(pizza => {
    template += pizza.Template
  })
  pizzaElem.innerHTML = template

  _pizzaService.calcTotalPrice()
  //document.getElementById("totalId").innerText = `Total Price:`
}

//testing push
export default class PizzaController {
  constructor() {
    console.log("pizza controller")
    _draw()
  }

  addPizza(event) {

    event.preventDefault();

    let formData = event.target;

    let newPizza = {
      pizzaName: formData.pizzaName.value
    }

    console.log(newPizza);

    _pizzaService.addPizza(newPizza)
    _draw()
  }

  addIngredient(event, id) {
    event.preventDefault();
    let formData = event.target;

    let newIngredient = {
      ingredientName: formData.ingredientName.value
    }
    console.log(newIngredient);

    _pizzaService.addIngredient(newIngredient, id);
    _draw();
  }

  deletePizza(id) {
    _pizzaService.deletePizza(id)
    _draw()
  }

  delTopping(idPizza, idIngredient) {
    _pizzaService.delTopping(idPizza, idIngredient)
    _draw()
  }

}