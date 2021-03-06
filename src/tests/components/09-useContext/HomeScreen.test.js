import { mount, shallow } from "enzyme"
import {HomeScreen} from '../../../components/09-useContext/HomeScreen'
import { UserContext } from "../../../components/09-useContext/UserContext"
describe('Pruebas en <HomeScreen />', () => {
    const user= {
        name: 'Carlos',
        email: 'ckubota54@gmail.com'
    }
    const wrapper = mount(
    <UserContext.Provider value={{
        user
        }}>
        <HomeScreen />
    </UserContext.Provider>
    );
    test('debe de mostrar', () => {
        expect(wrapper).toMatchSnapshot();
    })
    
})
