
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layout/Main';
import Home from './components/Home/Home';
import Questions from './Questions/Questions';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Blog from './components/Blog/Blog';


function App() {
  const router = createBrowserRouter([
  {
    path:'/',
    element:<Main></Main>,
    children:[
      {
        path:'/',
        loader: ()=> fetch('https://openapi.programming-hero.com/api/quiz'),
        element: <Home></Home>

      },
      {
        path:'/quiz/:id',
        loader: ({params})=> fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`),
        element:<Questions></Questions>
      },
      {
        path:'/blog',
        element:<Blog></Blog>
      },
      {
        path:'*',
        element:<ErrorPage></ErrorPage>
      }
    ]
  }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
      {/* <h1>welcome for mcq test</h1> */}
    </div>
  );
}

export default App;
