import { shallow } from "enzyme"
import { TodoAdd } from "../../../components/08-useReducer/TodoAdd"

describe('Pruebas en <TodoAdd />', () => {
    const handleAddTodo = jest.fn();
    const wrapper = shallow(
        <TodoAdd 
        handleAddTodo = {handleAddTodo}
        />,
    )
    test('debe de mostarse correctamente', () => {
     expect(wrapper).toMatchSnapshot(); 
    })
    test('NO debe de llamar la función handleAddTodo', () => {
       const formsubmit = wrapper.find('form').prop('onSubmit');
       console.log(formsubmit); 
       formsubmit({preventDefault(){}});
       expect(handleAddTodo).toHaveBeenCalledTimes(0);
       })
       test('debe de llamar la función handleAddTodo', () => {
       const value = 'Aprender React'; 
       wrapper.find('input').simulate('change',{
            target: {
                value,
                name: 'description'
            }
       });
       const formsubmit = wrapper.find('form').prop('onSubmit');
       console.log(formsubmit); 
       formsubmit({preventDefault(){}});
       expect(handleAddTodo).toHaveBeenCalledWith(expect.any(Object));
       expect(handleAddTodo).toHaveBeenCalledWith({
           desc: value,
           done: false, 
           id: expect.any(Number)
       });
       expect(wrapper.find('input').prop('value')).toBe('');
    })
    
    
})
