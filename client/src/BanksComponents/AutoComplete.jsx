import React, { useState } from "react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";

const AutoComplete = ({ setLocation }) => {
  const [address, setAddress] = useState("");
  const [coordinates, setCoordinates] = useState(null);

  const handleSelect = async (value) => {
    const results = await geocodeByAddress(value);
    const latLng = await getLatLng(results[0]);
    setCoordinates(latLng);

    setAddress(value);
    setLocation({ address: value, latLng });
  };

  return (
    <div className="form-control">
      <PlacesAutocomplete
        value={address}
        onChange={setAddress}
        onSelect={handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <label htmlFor="bloodGroup" className="label text-white">
              Address
            </label>
            <input
              className="input w-full"
              {...getInputProps({ placeholder: "search location" })}
            />

            <div className="mt-1 rounded-box overflow-hidden">
              {loading && <div className="bg-white p-2">Loading...</div>}
              {suggestions.map((suggestion) => {
                return (
                  <div
                    className="bg-white p-2 hover:bg-slate-100"
                    {...getSuggestionItemProps(suggestion)}
                  >
                    {suggestion.description}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
    </div>
  );
};

export default AutoComplete;
