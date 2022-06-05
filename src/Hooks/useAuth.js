import {useContext} from 'react' ; 
import { UserContext } from '../Containers/UserContext';

const useAuth = () =>{

    const [role,setRole] = useContext(UserContext);
    console.log('auth',role)
    return  role
}


export default useAuth;