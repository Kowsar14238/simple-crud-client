
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
            <h1>Opps! Page is not found</h1>
            <Link to={`/`}><button>Home page</button></Link>
        </div>
    );
};

export default ErrorPage;