import { todoReducer } from "../../../components/08-useReducer/todoReducer"
import { demoTodos } from "../../archivosfijos/demoTodos";

describe('Pruebas en todoReducer', () => {
    test('debe de retornar el estado por defecto', () => {
        const state = todoReducer(demoTodos,{});
        expect(state).toEqual(demoTodos);
    })
    test('debe de agregar un todo', () => {
        const state = todoReducer(demoTodos,{});
    })
    
    
})
