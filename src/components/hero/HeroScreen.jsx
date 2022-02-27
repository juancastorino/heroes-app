import { React, useMemo } from 'react'
import { useParams, Navigate, useNavigate } from 'react-router-dom'
import { getHeroById } from '../../selectors/getHeroById';



export const HeroScreen = () => {
    let { id } = useParams();
    const navigate = useNavigate();
    const hero = useMemo(() => getHeroById(id), [id]);

    const imagePath = `/assets/img/heroes/${hero.id}.jpg`


    const handleReturn = () => {
        navigate(-1);
    }


    if (!hero)
        return (
            <Navigate to='/' />
        )



    return (

        <div className="row mt-5">
            <div className="col-5">
                <img src={imagePath} alt={hero.superhero} className='img-tumbnail animate__animated animate__slideInLeft' />
            </div>

            <div className="col-7 animate__animated animate__fadeIn">
                <h3>
                    {hero.superhero}
                </h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <b>Alter ego:</b> {hero.alter_ego}
                    </li>
                    <li className="list-group-item">
                        <b>Publisher:</b> {hero.publisher}
                    </li>
                    <li className="list-group-item">
                        <b>First Appearrance:</b> {hero.first_appearance}
                    </li>
                </ul>

                <h5 className='mt-3'>Character</h5>
                <p>{hero.characters}</p>

                <button
                    className="btn btn-outline-info"
                    onClick={handleReturn}
                >
                    Regresar
                </button>
            </div>
        </div>


    )
}
