export enum TodoState {
  active = 'active',
  done = 'done',
  deleted = 'deleted',
}

/* describe a todo interface */
interface Todo {
  content: string;
  state: TodoState;
}

/**
 * create a new store for a specific type a todos
 */
export class Store{
  /* unique store id */
  private id: string;
  /* store name */
  private name: string;
  /* store todos */
  private todos: Todo[] = [];
  /* store glory aka completeness */
  private glory: number = 0;
  /* empty store flag */
  private empty: Boolean = true;

  /**
   * instantiate a new store
   */
  public constructor(name: string, id: string) {
    this.name = name;
    this.id = id;
    this.todos;
  }

  /* return store id */
  public getId(): string {
    return this.id;
  }

  /* return store name */
  public getName(): string {
    return this.name;
  }

  public editName(name: string): Store {
    this.name = name;
    return this;
  }

  /* Set the empty flag accordingly */
  private switchEmptyFlag(to: Boolean = false): void {
    if (this.todos.length > 0) {
      this.empty = false;
    }

    if (to && this.todos.length === 0) {
      this.empty = true;
    }
  }

  /* check if an item/todo exists in the store*/
  private itemExist(id: number): Boolean {
    return this.todos[id].state !== TodoState.deleted;
  }

  /* add an item/todo to the store */
  public addItem(todo: Todo): Store {
    this.todos.push(todo);
    if (this.empty) {
      this.switchEmptyFlag();
    }
    return this;
  }

  /* remove an item/todo from the store */
  public removeItem(id: number): Store {
    if (this.itemExist(id)) {
      this.todos[id].state = TodoState.deleted;
    }
    return this;
  }

  /* return an array of store items/todos */
  public getItems(): Todo[] {
    return this.todos;
  }
}
