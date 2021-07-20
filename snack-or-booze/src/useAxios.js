import { useEffect, useState } from "react";
import SnackOrBoozeApi from "./Api";

const useAxios = (category) => {

  const [items, setItems] = useState([]);

    //check category to determind whcih api to call
  let getCategory = category === 'snacks' ? SnackOrBoozeApi.getSnacks() : SnackOrBoozeApi.getDrinks();

  //get food list data
  useEffect(() => {
    const getItems = async () =>  {
      let category = await getCategory
      setItems(category);
    }
    getItems();
  }, []);

  return {items};
}

export default useAxios;