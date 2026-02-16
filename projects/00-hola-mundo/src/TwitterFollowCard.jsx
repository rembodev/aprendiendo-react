import {useState} from 'react'

export function TwitterFollowCard({ children, userName, initialIsFollowing }) {
    
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)

    // Alternativa 1 = const avatarSrc = 'https://unavatar.io/${userName}'
    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing ?
        'tw-followCard-button is-following'
        : 'tw-followCard-button'

    const handleClick =() => {
        setIsFollowing(!isFollowing)
    }
    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img
                    className='tw-followCard-avatar'
                    alt="Avatar de {name}"
                    src={`https://unavatar.io/x/${userName}`} />
                <div className='tw-followCard-info'>
                    {children}
                    <span className='tw-followCard-infoUserName'>@{userName}</span>
                </div>
            </header>
            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    <span className='tw-followCard-text'>{text}</span>
                    <span className='tw-followCard-stopFollow'>Dejar de Seguir</span>
                </button>
            </aside>
        </article>
    )
}

/* Props 

aside envuelve button y este envuelve un texot se le llama children
children 

*/