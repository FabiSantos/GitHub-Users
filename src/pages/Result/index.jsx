import repositories from "../../Mock/mock";
import profiles from "../../mock/profileMock";
import GhTitle from "../../components/GhTitle";
import SearchBar from "../../components/SearchBar";



const Result = () => {
    console.log(repositories);
    console.log(profiles);
    return (


        <div>

            <div className="search">
                <GhTitle />
                <SearchBar />

            </div>
            <div className='container__result'>

                {profiles.map(item => {
                    return (
                        <div key={item.name} >
                            <img className="container__result--avatar" src={item.avatar} alt={item.name} />
                            <p className="container__result--login" >{item.name}</p>
                        </div>
                    )
                })}


                <div className="container__result--repositories">
                    {repositories.map(repository => {
                        return (
                            <div key={repository.projectName}>
                                <h1 >{repository.projectName}</h1>
                                <p>{repository.details}</p>
                                <div>{repository.likes}</div>
                            </div>
                        )
                    })}
                </div>
            </div>

        </div>
    )
}

export default Result;