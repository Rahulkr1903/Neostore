import Home from "./pages/Home";

import ProductList from "./pages/ProductList";

import {BrowserRouter as Router,Route,Routes,Navigate} from "react-router-dom";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Register from "./pages/Register"
import { useSelector } from "react-redux";
// import Success from "./pages/Success";

//  function App() {
  const App = () => {
      const user = useSelector((state) => state.user.currentUser);
   
  return (
    <div className="App">
      <Router>
        <Routes>
          
           <Route path="/" element={<Home/>} />
           <Route path="/products" element={<ProductList/>} />
          <Route path="/products/:category" element={<ProductList/>} />
          <Route path="/product/:id" element={<Product/>} />
          <Route path="/product" element={<Product/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/login" element={<Login/>}/>
          {/* <Route path="/success" element={<Success/>}/> */}
          <Route path="/register" element={<Register/>} /> 



          <Route path="/login" element={ user ?<Navigate replace to="/" /> : <Navigate replace to="/login" /> } />

          {/* <Route path="/login" {user ? element={<Home/>}:element} */}
          
          


          {/* <Route path="/login">{user ? <Navigate replace to="/" />: <Login />}</Route>
        <Route path="/register"> */}
          {/* {user ? <Navigate replace to="/" /> : <Register />} */}
        {/* </Route> */}

{/* 
   user ? <Route path="/" element={<Home/>} />:  <Route path="/login" element={<Login/>}/>
 } */}


          
        </Routes>
      </Router>
    </div>
  );
};

export default App;




// import Product from "./pages/Product";
// import Home from "./pages/Home";
// import ProductList from "./pages/ProductList";
// import Register from "./pages/Register";
// import Login from "./pages/Login";
// import Cart from "./pages/Cart";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Redirect,
// } from "react-router-dom";
// import Success from "./pages/Success";
// import { useSelector } from "react-redux";

// const App = () => {
//   const user = useSelector((state) => state.user.currentUser);
//   return (
//     <Router>
//       <Switch>
//         <Route exact path="/">
//           <Home />
//         </Route>
//         <Route path="/products/:category">
//           <ProductList />
//         </Route>
//         <Route path="/product/:id">
//           <Product />
//         </Route>
//         <Route path="/cart">
//           <Cart />
//         </Route>
//         <Route path="/success">
//           <Success />
//         </Route>
//         <Route path="/login">{user ? <Redirect to="/" /> : <Login />}</Route>
//         <Route path="/register">
//           {user ? <Redirect to="/" /> : <Register />}
//         </Route>
//       </Switch>
//     </Router>
//   );
// };

// export default App;
