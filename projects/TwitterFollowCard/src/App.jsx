
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

export function App() {

const users = [

    {
        userName: 'pheralb',
        name: 'Pablo H.',
        isFollowing: false
    },

    {
        userName: 'realmadrid',
        name: 'Real Madrid',
        isFollowing: false
    },
    {
        userName: 'Coderosmx',
        name: 'Coderos',
        isFollowing: true
    },

    {
        userName: 'CaveCoder',
        name: 'Gabriel - The Coder Cave',
        isFollowing: false
    },

    {
        userName: 'maripydev',
        name: 'Maripy⚡️👩🏻‍💻💭',
        isFollowing: true
    }
]

/* Mapeamos los usuarios  */
    return (
        <section className='App'>
           {
            users.map(user => {
                const {userName, name, isFollowing} = user 
                return (
                    <TwitterFollowCard 
                        key={userName}
                        userName={userName}
                        initialIsFollowing={isFollowing}
                        >
                            {name}
                    </TwitterFollowCard>
                )
            })
           }
        </section>
    )
} 