import './App.css'

// <button> esto de aqui no puede ir asi ya que estamos anidando
// <a>  Dos elementos interactivos lo cual es incorrecto.
// </a>
// </button>
export function Buttonlk ({ username, nameSite, linkSite }) {
  
  /* Para crear el cambio de colores mediante el paso del mouse (hover) 
  se realizo un objeto en donded se guardo los colores de acuerdo al nombre.
  */

  const siteColors = {
    Youtube: '#FF0000',
    X: '#0e0f0f',
    Instagram: '#E1306C',
    Twitch: '#9146FF',
    GitHub: '#232925'
  }

  /* Se utilizo el prop (nameSite) como clave dinamica, para recuperar el valor,
  el cual se asigna a una propiedad css, que posterior a ello es utilizada por el :hover
  para modificar el estiilo visual del elemento. (--hover-color)
  */
  return (
    <li>
      <a
        className='lk-btn-sites '
        target='_blank'
        href={`${linkSite}/${username}`}
        rel='noopener noreferrer'
        style={{ '--hover-color': siteColors[nameSite] || 'gray' }}
      >{`${nameSite}`}</a>
    </li>
  )
}
