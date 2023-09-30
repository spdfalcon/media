import { useRoutes } from 'react-router-dom'
import routes from './routes/routes'
import './App.css'
function App() {
    const router = useRoutes(routes)
    return (
        <>
        <div className='font-iransans'>
            {router}
        </div>
        </>
    )
}

export default App
