import React, { lazy, Suspense} from 'react';
import { Route, Switch } from 'react-router-dom';

// Components
import Home from '../Home';
import SignIn from '../Sign';
// import MovieList from '../Movies';
// import SingleMovie from '../Movies/SignleMovie';
// import Actors from '../Actors';
import SingleActor from '../Actors/SingleActor';
import About from '../About';

const Actors = lazy(() => import ("../Actors"))
const MovieList = lazy(() => import ("../Movies"))
const SingleMovie = lazy(() => import ("../Movies/SignleMovie"))

const Routes = () => 
  <Switch>
      <Route exact path='/movies/:movieId'>
      <Suspense fallback={<h1 style={{color: "red", margin: "200px"}}>Loading ...</h1>}>
        <SingleMovie />
        </Suspense>
      </Route>
      <Route exact path='/actors/:actorId'>
        <SingleActor />
      </Route>
      <Route exact path='/about'>
        <About />
      </Route>
      <Route exact path='/sign'>
        <SignIn />
      </Route>
      <Route exact path='/movies'>
      <Suspense fallback={<h1 style={{color: "red", margin: "200px"}}>Loading ...</h1>}>
         <MovieList />
        </Suspense> 
      </Route>
      <Route exact path='/actors'>
        <Suspense fallback={<h1 style={{color: "white", margin: "200px"}}>Loading ...</h1>}>
        <Actors />
        </Suspense>
      </Route>
      <Route exact path='/'>
        <Home/>
      </Route>
  </Switch>

export default Routes;