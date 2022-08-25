export default class BonCoinService {

  static getBoncoinService() {
    return fetch("http://localhost:3001/offers")
      .then((res) => res.json())
      .catch((error) => console.error(error));
  }
}
