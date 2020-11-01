import React, { useState, useEffect } from 'react'
import {NativeSelect, FormControl} from '@material-ui/core';
import styles from "./CountryPicker.module.css";
import {fetchCountries} from "../../api";

const CountryPicker = ({onHandleCountryChange}) => {
    const [fetchedCountries, setFetchCountries] = useState([]);

    useEffect(()=> {
        const fetchApi = async () => {
            setFetchCountries(await fetchCountries());
        }

        fetchApi();
    },[setFetchCountries]) // only re-run if fetchCountries function changes!

    return (
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue="" onChange={(e) => onHandleCountryChange(e.target.value)}>
                <option value=''>Global</option>
                {fetchedCountries.map((fetchedCountry,i) => 
                    <option key={i} value={fetchedCountry}>{fetchedCountry}</option>
                )}
            </NativeSelect>
        </FormControl>
    )
}

export default CountryPicker;
