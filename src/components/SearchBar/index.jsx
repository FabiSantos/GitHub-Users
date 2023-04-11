import { Input } from "antd";
const { Search } = Input;

const SearchBar = ({ onSearch, placeholder }) => {
    return (
        <div className="search-bar">
            <Search
                placeholder={placeholder}
                onSearch={onSearch}
                style={{ width: 200 }}
            />
        </div>
    );
};

export default SearchBar;