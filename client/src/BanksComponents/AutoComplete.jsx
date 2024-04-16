import React, { useState } from "react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";

const AutoComplete = () => {
  const [address, setAddress] = useState("");

  const handleSelect = async (value) => {};

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
              Blood Group
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
