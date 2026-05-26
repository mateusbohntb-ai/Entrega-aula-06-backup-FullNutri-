import './style.css'


function Card({ personagem }) {
    return (
        <div className='char-card'>
            <img src={personagem.image} alt="" />
            <h2>
            </h2>
            <div className="char-info">
                <span>{personagem.name}</span>
                <span>{personagem.species}</span>
                <span>{personagem.gender}</span>
                <span>{personagem.status}</span>
            </div>
        </div>


    )
}
export default Card