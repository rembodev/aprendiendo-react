import React from "react"
export function LinkTree ({ username }) {
  /*Componente header el cual renderiza los botones follow and share, 
  ademas del avatar del user, username and slogan*/
  
  const url = window.location.href 

  const Urlcopiado = async () => {
    try{
      await navigator.clipboard.writeText(url);
      console.log ("Url copiado")
      alert("Url Copiada")
    } catch (error) {
      console.error("Error al copiar", error)
    }
  }
 
  return (
    <>
      <header className='lk-header'>
        <nav className='lk-nav'>
          <ul className='lk-buttons-header'>
            <li className='lk-follow'>
              <a href="https://www.youtube.com/c/midudev?sub_confirmation=1" 
              rel="nofollow" target="_blank" force-new-state="true"
              >Follow</a>
            </li>
            <li className='lk-share'>
              <button onClick={Urlcopiado}>
                <img
                  width='20'
                  height='20'
                  src='https://img.icons8.com/ios-glyphs/500/share.png'
                  alt='share'
                />
              </button>
            </li>
          </ul>
        </nav>
      </header>
      <div className='lk-avatar'>
        <img src={`https://unavatar.io/x/${username}`} alt='avatar' />
        <span className='lk-name'>{`${username}`}</span>
        <p className='lk-slogan'>Practica practica y mas practica</p>
      </div>
      <hr />
    </>
  )
}
