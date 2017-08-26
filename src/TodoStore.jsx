import { observable, autorun } from 'mobx'

class TodoStore {
  @observable todos = ["buy milk", "buy coffee"]
  @observable filter = "buy"
}

const store = window.store = new TodoStore()

autorun(() => {
  console.log(store.todos[0])
  console.log(store.filter)
})

export default store