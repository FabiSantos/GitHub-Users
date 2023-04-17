import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import GhTitle from '../../components/GhTitle';
import SearchBar from '../../components/SearchBar';
import AlertMessage from '../../components/Alert/index';


const Home = () => {
    const navigate = useNavigate();
    const [showAlert, setShowAlert] = useState(false);

    const handleSearch = (value) => {
        const valueFormated = value.trim();

        if (!valueFormated) setShowAlert(true);
        else navigate("/result");
        console.log(valueFormated)
    };

    return (
        <div className='home'>
            <GhTitle />

            <SearchBar
                placeholder={"your username"}
                onSearch={handleSearch}
                onChange={() => setShowAlert(false)}
                status={showAlert && "error"}

            />

            {showAlert &&
                <AlertMessage
                    direction={"vertical"}
                    message={"text required"}
                    style={{ width: "20%" }}
                    type={"error"}
                />}
        </div>
    )
}

export default Home;