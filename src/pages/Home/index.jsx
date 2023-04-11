import React from 'react'
import { useNavigate } from 'react-router-dom';
import GhTitle from '../../components/GhTitle';
import SearchBar from '../../components/SearchBar';

const Home = () => {
    const navigate = useNavigate();

    const handleSearch = (value) => {

        if (value) {
            navigate("/result")
        }
        console.log(value)
    };
    return (
        <div className='home'>
            <GhTitle />
            <SearchBar onSearch={handleSearch} />
        </div>
    )
}

export default Home;