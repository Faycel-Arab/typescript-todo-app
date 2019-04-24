import { Store, Todo, TodoState } from '../../src/store';

describe('Testing Store...', () => {

  let store: Store;
  const name = 'store';
  const id = 'store_123456789';
  const item: Todo = {
    content: 'Brush your teeth',
    state: TodoState.active,
  };

  beforeEach(() => {
    store = new Store(name, id);
  });

  it('it should return the class id', () => {
    expect(store.getId()).toBe(id);
  });

  it('it should return the class name', () => {
    expect(store.getName()).toBe(name);
  });

  it('It should edit class name', () => {
    store.editName('Todo store');
    expect(store.getName()).toBe('Todo store');
  });

  it('it should add an item/todo to the store', () => {
    store.addItem(item);
    const items: Todo[] = store.getItems();
    expect(items.length).toBe(1);
  });

  it('it should delete an item/todo from the store', () => {
    store.addItem(item);
    store.removeItem(0);
    const items: Todo[] = store.getItems();
    expect(items[0].state).toBe(TodoState.deleted);
  });
});
