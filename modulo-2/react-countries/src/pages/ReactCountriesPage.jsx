import Main from "../components/Main"
import Header from "../components/Header"
import InputText from "../components/InputText"
import { allCountries } from "../data/Countries";
import { useState } from "react";
import Countries from "../components/Countries";
import Country from "../components/Country";

export default function ReactCountriesPage() {

    const [countryFilter, setCountryFilter] = useState('');
    const [visitedCountries, setVisitedCountries] = useState([]);

    function handleCountryFilter(newFilter) {
        setCountryFilter(newFilter);
    }

    function toogleVisitedCountry(countryId) {
        let newVisitedCountries = [...visitedCountries];
        if (newVisitedCountries.includes(countryId)) {
            newVisitedCountries = newVisitedCountries.filter(visitedCountryId => visitedCountryId !== countryId)
        } else {
            newVisitedCountries.push(countryId);
        }
        setVisitedCountries(newVisitedCountries);
    }

    const countryFilterLowerCase = countryFilter.trim().toLocaleLowerCase();

    const filteredCountries = countryFilterLowerCase.length >= 3
        ? allCountries.filter(({ nameLowerCase }) => { return nameLowerCase.includes(countryFilterLowerCase) })
        : allCountries;

    return (
        <div>
            <Header>react-countries</Header>
            <Main>
                <InputText
                    id="inputCountryFilter"
                    labelDescription="Informe o nome do país (pelo menos 3 caractees):"
                    inputValue={countryFilter}
                    onInputChange={handleCountryFilter}
                />
                <Countries>
                    <h2 className="text-center font-semibold">{filteredCountries.length}{filteredCountries.length > 1 ? " países" : " país"}</h2>
                    <h3 className="text-center font-semibold text-sm">{visitedCountries.length}{visitedCountries.length > 1 ? " países visitados" : " país visitado"}</h3>
                    {
                        filteredCountries.map(country => {
                            const isVisited = visitedCountries.includes(country.id);
                            return <Country isVisited={isVisited} key={country.id} onCountryClick={toogleVisitedCountry}>{country}</Country>
                        })
                    }
                </Countries>
                {/* <Countries visitedCountries={visitedCountries} onCountryClick={toogleVisitedCountry}>{filteredCountries}</Countries> */}
            </Main>
        </div>
    );
}