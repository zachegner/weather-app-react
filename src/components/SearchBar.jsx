const SearchBar = ({ zipCode, setZipCode, searchZipCode}) => {

    return (
        <>
            <div className="search">
                <input
                    value={zipCode}
                    onChange={e => setZipCode(e.target.value)}
                    placeholder='Enter Zipcode'
                    onKeyDown={searchZipCode}
                    type="text" />
            </div>
        </>
    );
};

export default SearchBar;
