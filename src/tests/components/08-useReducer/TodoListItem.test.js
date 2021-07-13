
import {shallow} from 'enzyme';
import { TodoListItem } from '../../../components/08-useReducer/TodoListItem';
import { demoTodos } from '../../archivosfijos/demoTodos';


describe('Pruebas en <TodoListItem />', () => {
    const handleToggle =jest.fn(); 
    const handleDelete =jest.fn(); 
    const wrapper = shallow (<
        TodoListItem 
        todo={demoTodos[0]}
        index= {1}
        handleToggle={handleToggle}
        handleDelete={handleDelete}
         />)


    test('debe de mostrarse correctamente', () => {
     expect(wrapper).toMatchSnapshot();
    })
    test('debe de llamar la funcion handledelete', () => {
     wrapper.find('button').simulate('click');
     expect(handleDelete).toHaveBeenCalledWith(demoTodos[0].id);
    })
    test('debe de llamar la funcion handleToggle', () => {
        wrapper.find('p').simulate('click');
     expect(handleToggle).toHaveBeenCalledWith(demoTodos[0].id);
    })
    test('debe de mostrar el texto correctamnte', () => {
      const p = wrapper.find('p');
      expect(p.text()).toBe(`2. ${demoTodos[0].desc}`)
    })
    test('debe de tener la clase complete si el TODO.DONE esta en true', () => {
      const todo = demoTodos[0];
      todo.done= true;
      const wrapper = shallow (<
        TodoListItem 
        todo={todo}
         />)
        expect(wrapper.find('p').hasClass('complete'))
      
    
    
    
    })
    
    



})
