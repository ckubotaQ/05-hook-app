import {renderHook, act} from '@testing-library/react-hooks';
import {useForm} from '../../hooks/useForm';
describe('Pruebas en UseForm', () => {
    const initialForm={
        name: 'Carlos',
        email: 'ckubota54@gmail.com'
    };
    test('debe de regresar un formulario por defecto', () => {
        const {result } = renderHook( () => useForm(initialForm) );
        const [values, handleInputChange, reset ]=result.current;
        expect(values).toEqual(initialForm);
        expect(typeof handleInputChange).toBe('function');
        expect(typeof reset).toBe('function');
    });
    test('debe de cambiar un formulario (cambiar name)', () => {
        const {result } = renderHook( () => useForm(initialForm) );
        const [, handleInputChange]=result.current;
        act(
            () =>{
                handleInputChange({
                    target:{
                        name:'name',
                        value: 'Rebeca'

                    }
                });
            }
        )
        const [formvalues] = result.current;
        expect(formvalues).toEqual({...initialForm, name: 'Rebeca'})

    });
    test('debe de re-establecer el formulario con RESET', () => {
        const {result } = renderHook( () => useForm(initialForm) );
        const [, handleInputChange,reset]=result.current;
        act(
            () =>{
                handleInputChange({
                    target:{
                        name:'name',
                        value: 'Rebeca'

                    }
                });
                reset();
            }
        )
        const [formvalues] = result.current;
        expect(formvalues).toEqual(initialForm)
    });
    

    
    
    
})
