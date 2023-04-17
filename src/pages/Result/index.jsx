import { useEffect, useState } from "react";
import repositories from "../../Mock/mock";
import profiles from "../../mock/profileMock";
import GhTitle from "../../components/GhTitle";
import SearchBar from "../../components/SearchBar";
import { getUser } from "../../services/user";

const Result = () => {
    const [user, setUser] = useState({});

    //funcion para recibir el servicio, se guarda en el estado user
    //no se puede utilizar async await dentro del useEfect
    const handleGetUser = async () => {
        //invocamos el servicio y le pasamos el parametro de usuario
        const result = await getUser('fabianeS');
        //almacenamos en el estado user
        setUser(result)
        console.log('handle', result);
    }

    //consumimos el servicio y lo pintamos
    useEffect(() => {
        handleGetUser();
        console.log("result page--->", handleGetUser());
    }, [])

    return (
        <div>
            <div className="search">
                <GhTitle />
                <SearchBar />
            </div>
            <div className='container__result'>
                {user &&
                    <div >
                        <img className="container__result--avatar" src={user.avatar_url} alt={user.name} />
                        <p className="container__result--login" >{user.name}</p>
                    </div>
                }
                {/*     <div className="container__result--repositories">
                    {repositories.map(repository => {
                        return (
                            <div key={repository.projectName}>
                                <h1 >{repository.projectName}</h1>
                                <p>{repository.details}</p>
                                <div>{repository.likes}</div>
                            </div>
                        )
                    })}
                </div> */}
            </div>
        </div>
    )
}

export default Result;