import { useEffect, useState } from "react";
import GhTitle from "../../components/GhTitle";
import SearchBar from "../../components/SearchBar";
import { getUser, getUserRepositories } from "../../services/user";
import { useLocation, useNavigate } from "react-router-dom";
import Loading from "../../components/Loading";

const Result = () => {
    const [user, setUser] = useState({});
    const [repositories, setRepositories] = useState([]);
    const [showAlert, setShowAlert] = useState(false);
    const [loading, setLoading] = useState(true);
    const { state } = useLocation();
    const navigate = useNavigate();

    const handleGetUser = async (user) => {
        await getUser(user)
            .then(response => {
                setUser(response)
                setLoading(false);
            })
            .catch(error => {
                navigate("/notFound")
            })
    }

    const handleGetUserRepositories = async (user) => {
        const result = await getUserRepositories(user);
        setRepositories(result);
    }


    const handleSearch = (value) => {
        setLoading(true);
        const valueFormated = value.trim();
        if (!valueFormated) setShowAlert(true);
        else {
            handleGetUser(valueFormated);
            handleGetUserRepositories(valueFormated);
        };
    };

    useEffect(() => {
        handleGetUser(state?.user);
        handleGetUserRepositories(state?.user);
        ;
    }, [])

    return (
        <div>
            <div className="search">
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

            {loading ?
                <Loading /> :
                (
                    <div className='container__result'>
                        {user &&
                            <div >
                                <img className="container__result--avatar" src={user.avatar_url} alt={user.name} />
                                <p className="container__result--login" >{user.name}</p>
                            </div>
                        }
                        <div className="container__result--repositories">
                            {repositories.map(repository => {
                                return (
                                    <div key={repository.name}>
                                        <h1 >{repository.name}</h1>
                                        <a href={repository.html_url} target="_blank" rel="noopener noreferrer">{repository.html_url}</a>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default Result;