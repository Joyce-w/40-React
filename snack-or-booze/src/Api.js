import axios from "axios";

const BASE_API_URL = "http://localhost:5000";

/* 
  json-server will give you CRUD endpoints on snacks and drinks.
  Here we've provided you with a single action to get all drinks.

  You'll need to add to this class as you build features for the app.
*/

class SnackOrBoozeApi {
  //get snacks from api
  static async getSnacks() {
    const result = await axios.get(`${BASE_API_URL}/snacks`);
    return result.data;
  }
  //get drinks from api
  static async getDrinks() {
    const result = await axios.get(`${BASE_API_URL}/drinks`);
    return result.data;
  }
  //post snacks from api
  static async postSnacks(snacks) {
    const result = await axios.post(`${BASE_API_URL}/snacks`, snacks);
    return result.data;
  }
  //post drinks from api
  static async postDrinks(drinks) {
    const result = await axios.post(`${BASE_API_URL}/drinks`, drinks);
    return result.data;
  }
  

}

export default SnackOrBoozeApi;
