$(document).ready(() => {
    const insertCountries = () => {
        countriesArray.forEach(country => {
            const countryHref = `https://en.wikipedia.org/wiki/${country.replace(/ /g,"_")}`;
            const countryLink = $("<a>").text(country).attr("href", countryHref).attr("target", "_blank");
            const countryLi = $("<li>").append(countryLink);
            $("#countriesUl").append(countryLi);
        });
    }

    const main = () => {
        insertCountries();
    }

    main();
});
