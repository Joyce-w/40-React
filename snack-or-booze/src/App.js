import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import SnackOrBoozeApi from "./Api";
import NavBar from "./NavBar";
import { Route, Switch } from "react-router-dom";
import Menu from "./FoodMenu";
import Snack from "./FoodItem";
import NewItemForm from "./NewItemForm";

function App() {

  //how to update snacks/drinks if it is updated in another server?
  const [isLoading, setIsLoading] = useState([]);
  const [snacks, setSnacks] = useState([]);
  const [drinks, setDrinks] = useState([]);

  //update loading
  const updateLoading = () => {
    setIsLoading((isLoading) => [...isLoading, false]);
  }

  //get snack data
  useEffect(() => {
    async function getSnacks() {
      let snacks = await SnackOrBoozeApi.getSnacks();
      setSnacks(snacks);
      updateLoading();
    }
    getSnacks();
  }, []);

// get drink data
  useEffect(() => {
    async function getDrinks() {
      let drinks = await SnackOrBoozeApi.getDrinks();
      setDrinks(drinks);
      updateLoading();
    }
    getDrinks();
  }, []);

  let loading = isLoading.length !== 2 ? <p>Loading &hellip;</p> : null;


  return (
    <div className="App">
      <BrowserRouter>
        <NavBar  />
        <main>
          <Switch>
            <Route exact path="/">
              <Home loading={loading} snacks={snacks.length} drinks={drinks.length} />
            </Route>
            {/* Snacks Route */}
            <Route exact path="/snacks">
              <Menu items={snacks} title="Snacks" category="Snacks"/>
            </Route>
            <Route path="/snacks/:id">
              <Snack items={snacks} cantFind="/snacks" />
              
              {/* Drinks route */}
            </Route>
            <Route exact path="/drinks">
              <Menu items={drinks} title="Drinks" category="Drinks"/>
            </Route>
            <Route path="/drinks/:id">
              <Snack items={drinks} cantFind="/drinks" />
            </Route>
            {/* New Item Form */}
            <Route exact path="/newItem">
              <NewItemForm/>
            </Route>
            <Route>
              <p>Hmmm. I can't seem to find what you want.</p>
            </Route>
          </Switch>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
