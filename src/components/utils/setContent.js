import Spinner from '../spinner/Spinner';
import ErrorMessage from '../erroeMessage/ErrorMessage';
import Skeleton from '../skeleton/Skeleton';


const setContent = (process, Component, data) => {
    switch (process) {
        case 'waiting':
            return <Skeleton/>;
        case 'loading':
            return <Spinner/>
        case 'confirmed':
            return <Component data={data}/>;
        case 'error':
            return <ErrorMessage/>;
            default:
                throw new Error('Unexpexted process state')
    }
}

export default setContent;