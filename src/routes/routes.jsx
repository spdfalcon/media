import Admin from "../pages/Admin/Admin"
import Rating from "../components/Rating/Rating"
import Comments from "../components/Comments/Comments"

const routes = [
    {
        path: '/admin/*', element: <Admin />, children: [
            {
                path: 'rating', element: <Rating />
            },
            {
                path: 'comments', element: <Comments />
            },
        ]
    }
]

export default routes