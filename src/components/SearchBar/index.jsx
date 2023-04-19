import { Input } from "antd";
const { Search } = Input;

const SearchBar = ({ onSearch, onChange, placeholder, status, style }) => {
    return (
        <div className="search-bar">
            <Search
                placeholder={placeholder}
                onChange={onChange}
                onSearch={onSearch}
                status={status}
                style={style}
                className="input-search"
            />
        </div>
    );
};

export default SearchBar;