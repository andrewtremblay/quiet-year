import React from 'react';
import { useFirestoreDocData, useFirestore, SuspenseWithPerf} from 'reactfire';
import { useStateWithLocalStorage } from '../utils/storage';


function Login() {
    const [currentGame, setCurrentGame] = useStateWithLocalStorage('currentGame');
    const [currentUser, setCurrentUser] = useStateWithLocalStorage('currentUser');

    if (currentGame !== '') {
        setCurrentGame('');
    }

    const createNewUser = () => {
        setCurrentUser('')
    }

    return (
    <div>
        Set User Name
    </div>);
}  

export default Login;