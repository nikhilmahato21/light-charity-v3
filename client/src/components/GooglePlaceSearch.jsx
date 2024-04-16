import React from "react";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
const GooglePlaceSearch = () => {
  return (
    
      <GooglePlacesAutocomplete
        apiKey="AIzaSyASBGsWpaUxvusctNbmaflXfohIUGr8-zg"
        selectProps={{
          placeholder: "search location",
          isClearable: true,
          className: "",

        }}
      />
    
  );
};

export default GooglePlaceSearch;
