import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ListOffers from "../components/ListOffers";
import BonCoinService from "../services/boncoin-service";

const FindAdd = () => {
  const [offersData, setOffersData] = useState([]);
  const location = useLocation();
  const [criteria, setCriteria] = useState("");
  let paramObj: any = {};

  useEffect(() => {
    BonCoinService.getBoncoinService().then((data) => {
      let params = location.search;
      console.log(params);
      const splitParams = params.slice(1).split("&");
      console.log(splitParams);

      // transform url params to an object

      for (let i in splitParams) {
        const splitParam = splitParams[i].split("=");
        console.log(splitParam);
        paramObj[splitParam[0]] = splitParam[1].replace("+", " ");
        //  paramObj.push(paramObj)
      }
      console.log(paramObj);
      setCriteria(paramObj);

      const filterData = data.filter(
        (res: any) =>
          (paramObj.category === "Toutes categories" ||
            res.category === paramObj.category) &&
          (paramObj.city === "null" || res.city === paramObj.city) &&
          (!paramObj.priceMin ||
            parseInt(res.price) > parseInt(paramObj.priceMin)) &&
          (!paramObj.priceMax  ||
            parseInt(res.price) < parseInt(paramObj.priceMax))
      );
      console.log(filterData);

      setOffersData(filterData);
    });
  }, []);

  return (
    <div>
      <h1>
        Annonces {criteria.category} à vendre à {criteria.city} entre{" "}
        {criteria.priceMin} et {criteria.priceMax}{" "}
      </h1>
      {offersData.map((offer) => (
        <ListOffers key={offer.id} offer={offer} />
      ))}
    </div>
  );
};

export default FindAdd;
