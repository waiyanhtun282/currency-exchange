import useFetch from "./useFetch";

function useCurrencyFetch() {
  const { loading: countryLoading, data: countryLists } = useFetch("list");
  const { loading: currencyLoading, data: currencyLists } = useFetch("live");
  return {
    countryLists: countryLists?.currencies,
    currencyLists: currencyLists?.quotes,
    loading: countryLoading || currencyLoading,
  };
}

export default useCurrencyFetch;
