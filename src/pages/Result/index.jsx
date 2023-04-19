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

    //función para recibir el servicio, se guarda en el estado user
    //no se puede utilizar async await dentro del useEfect
    //utilizamos el parametro user, para  el valor dinamico que será escrito y capturado en el search, desde la pagina result, cambiando la información que viene desde la pagina home 
    const handleGetUser = async (user) => {
        await getUser(user)
            .then(response => {
                setUser(response)
                setLoading(false);
                console.log('handle', response);
            })
            .catch(error => {
                navigate("/notFound")
                console.log('error resultUser', error)
            })
    }


    //función para recibir el servicio, se guarda en el estado repositories
    const handleGetUserRepositories = async (user) => {
        const result = await getUserRepositories(user);
        setRepositories(result);
        console.log('handle2', result);
    }


    //función que captura el valor del search de result, 
    const handleSearch = (value) => {
        setLoading(true);
        const valueFormated = value.trim();
        console.log('valueFormated', valueFormated);
        if (!valueFormated) setShowAlert(true);
        else {
            handleGetUser(valueFormated);
            handleGetUserRepositories(valueFormated);
        };
        console.log(valueFormated)
    };

    //consumimos el servicio y lo pintamos al actualizar la pagina, la primera vez con el resultado que viene desde la pagina home, a traves de la información enviada por el useNavigate.
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

                                        {/* <div>{repository.stargazers_count}</div> */}
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