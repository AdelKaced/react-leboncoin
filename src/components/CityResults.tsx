import axios from "axios";
import React, { useEffect, useState } from "react";

const CityResults = ({
  city,
  setDisplayCity,
  setInputData,
}: number | string | null) => {
  const [cityData, setCityData] = useState<any>([]);
  const handleCity = (data) => {
    setDisplayCity(false);
    setInputData((prevData) => ({
      ...prevData,
      city: data.nom + " " + data.codesPostaux[0],
    }));
  };

  useEffect(() => {
    console.log(typeof city);
    let url;
    if (typeof city === "string") {
      url = `https://geo.api.gouv.fr/communes?nom=${city}&fields=nom,code,codesPostaux,codeDepartement,codeRegion,population&format=json&geometry=centre`;
    } else {
      url = `https://geo.api.gouv.fr/communes?codePostal=${city}&fields=nom,code,codesPostaux,codeDepartement,codeRegion,population&format=json&geometry=centre`;
    }
    axios
      .get(url)
      .then((res) => res.data)
      .then((data) => setCityData(data));
  }, [city]);
  return (
    <div className="city-results">
      {cityData.map((data) => (
        <div
          onClick={() => handleCity(data)}
          id={`${data.city}${data.codesPostaux[0]}`}
        >
          {" "}
          {data.nom} {data.codesPostaux[0]}{" "}
        </div>
      ))}
    </div>
  );
};

export default CityResults;
