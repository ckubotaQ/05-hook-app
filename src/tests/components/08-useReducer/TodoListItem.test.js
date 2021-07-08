
import {shallow} from 'enzyme';
import { TodoListItem } from '../../../components/08-useReducer/TodoListItem';
import { demoTodos } from '../../archivosfijos/demoTodos';


describe('Pruebas en <TodoListItem />', () => {
    test('debe de mostrarse correctamente', () => {
        const wrapper = shallow (<
            TodoListItem 
            todo={demoTodos}
            index= {1}
             />)
    })
    test('debe de llamar la funcion handledelete', () => {
        const wrapper = shallow (<
            TodoListItem 
            todo={demoTodos}
            index= {1}
             />)
    })
    test('debe de llamar la funcion handleToggle', () => {
        const wrapper = shallow (<
            TodoListItem 
            todo={demoTodos}
            index= {1}
             />)
    })
    test('debe de mostrar el texto correctamnte', () => {
        const wrapper = shallow (<
            TodoListItem 
            todo={demoTodos}
            index= {1}
             />)
    })
    
    



})
