import React, { useState } from "react";
import CityResults from "./CityResults";
import PriceResults from "./PriceResults";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import TimeToLeaveIcon from "@mui/icons-material/TimeToLeave";
import HomeIcon from "@mui/icons-material/Home";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { createSearchParams, useNavigate } from "react-router-dom";

// https://geo.api.gouv.fr/communes?nom=behren&fields=nom,code,codesPostaux,codeDepartement,codeRegion,population&format=json&geometry=centre
// https://geo.api.gouv.fr/communes?codePostal=95000&fields=nom,code,codesPostaux,codeDepartement,codeRegion,population&format=json&geometry=centre
// https://geo.api.gouv.fr/communes?codeDepartement=57&fields=nom,code,codesPostaux,codeDepartement,codeRegion,population&format=json&geometry=centre
// https://geo.api.gouv.fr/regions?nom=ile%20de%20france&fields=nom,code
// https://geo.api.gouv.fr/departements?nom=moselle&fields=nom,code,codeRegion

type Field = {
  radioChecked: string;
  category: string;
  search: string;
  city: string | number | null;
  priceMin: number | null;
  priceMax: number | null;
};

const Forms = () => {
  const navigate = useNavigate();
  // const [radioChecked, setRadioChecked] = useState<string>();

  const [inputData, setInputData] = useState<Field>({
    radioChecked: "offer",
    category: "",
    search: "",
    city: null,
    priceMin: null,
    priceMax: null,
  });

  const [displayPrice, setDisplayPrice] = useState(false);
  const [displayCity, setDisplayCity] = useState(false);

  const handleChange = (e: any) => {
    console.log(e.target);
    const name = e.target.name;
    const value = e.target.value;
    if (name === "city") setDisplayCity(true);
    setInputData({ ...inputData, [name]: value });
    // if (name === "minimum" || name === "maximum") {
    //   setInputData({
    //     ...inputData,
    //     price: { ...inputData.price, [name]: value },
    //   });
    // } else {

    // }
  };

  const categories = [
    {
      value: "Toutes categories",
      label: "Toutes categories",
      icon: <FormatListBulletedIcon />,
    },
    {
      value: "Vacances",
      label: "Vacances",
      icon: <WbSunnyIcon />,
    },
    {
      value: "Emploi",
      label: "Emploi",
      icon: <WorkOutlineIcon />,
    },
    {
      value: "Vehicules",
      label: "Vehicules",
      icon: <TimeToLeaveIcon />,
    },
    {
      value: "Immobilier",
      label: "Immobilier",
      icon: <HomeIcon />,
    },
  ];

  const handleSubmit = (e: any) => {
    e.preventDefault();
    navigate({
      pathname: "/annonces/offres",
      search: `?${createSearchParams(inputData)}`,
    });
  };

  return (
    <div className="form">
      <h1>
        Des millions de petites annonces et autant d'occasions de se faire
        plaisir
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="radio">
          <input
            type="radio"
            value="offer"
            checked={inputData.radioChecked === "offer"}
            name="radioChecked"
            onChange={handleChange}
            className={
              inputData.radioChecked === "offer" ? "radio-checked" : ""
            }
          />
          <label>Offres</label>
          <input
            type="radio"
            value="demand"
            checked={inputData.radioChecked === "demand"}
            name="radioChecked"
            onChange={handleChange}
            className={
              inputData.radioChecked === "demand" ? "radio-checked" : ""
            }
          />
          <label>Demandes </label>
        </div>
        <div className="main-data">
          <div className="data-select">
            <FormControl>
              <InputLabel id="demo-simple-select-label">Categories</InputLabel>
              <Select
                className="select"
                label="categories"
                name="category"
                value={inputData.category}
                onChange={handleChange}
              >
                {/* <MenuItem value="">
                  <em>Toutes Categories</em>
                </MenuItem> */}
                {categories.map(({ icon, label, value }) => (
                  <MenuItem key={label} value={value}>
                    <div className="select-input">
                      {icon} <span>{label}</span>
                    </div>
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <input
              type="text"
              className="search-input"
              name="search"
              placeholder="Que recherchez-vous ?"
              onChange={handleChange}
              value={inputData.search}

              // value={inputData.search}
            />
          </div>
          <div className="city">
            <input
              type="text"
              placeholder="Saisissez une ville et un rayon"
              name="city"
              onChange={handleChange}
              value={inputData.city}
            />
            {displayCity && (
              <CityResults
                city={inputData.city}
                setDisplayCity={setDisplayCity}
                inputData={inputData}
                setInputData={setInputData}
              />
            )}
          </div>
        </div>
        <div
          className="price-elm"
          onClick={() => setDisplayPrice(!displayPrice)}
        >
          <span className="price">Prix</span>
        </div>
        {displayPrice && (
          <PriceResults handleChange={handleChange} inputData={inputData} />
        )}
        <div className="submit">
          <input type="submit" value={`Rechercher (x resultars)`} />
        </div>
      </form>
    </div>
  );
};

export default Forms;
