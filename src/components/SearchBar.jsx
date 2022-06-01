const SearchBar = ({ code, setCode, searchCode}) => {

    return (
        <>
            <div className="search">
                <label htmlFor="searchbar">Enter zipcode, city name, postcode, or Latitute and Longitude(e.g: 48.8567,2.3508)</label><br/><br/>
                <input
                    value={code}
                    onChange={e => setCode(e.target.value)}
                    placeholder='Enter code here'
                    onKeyDown={searchCode}
                    type="text"
                    id="searchbar" />
            </div><br/>
        </>
    );
};

export default SearchBar;
