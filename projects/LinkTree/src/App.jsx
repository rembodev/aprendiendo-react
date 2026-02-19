
import './App.css'
import { LinkTree } from './Header'
import { Buttonlk } from './lkButton.jsx'

// Este es el archivo padre los demas componentes son sus hijos

export function App () {
  const username = 'midudev'
  const sites = [
    {
      nameSite: 'Youtube',
      linkSite: 'https://www.youtube.com'
    },
    {
      nameSite: 'GitHub',
      linkSite: 'https://github.com'
    },
    {
      nameSite: 'Twitch',
      linkSite: 'https://www.twitch.tv'
    },
    {
      nameSite: 'X',
      linkSite: 'https://www.x.com'
    },
    {
      nameSite: 'Instagram',
      linkSite: 'https://www.instragram.com'
    }
    
  ]


  
  return (
    <>
      <section>
        <LinkTree username={username} />
        <ul className='lk-ul-btn'>
          {sites.map(site => {
            const { nameSite, linkSite } = site
            return (
              <Buttonlk
                key={nameSite}
                linkSite={linkSite}
                nameSite={nameSite}
                username={username}
              />
            )
          })}
        </ul>
      </section>
    </>
  )
}
