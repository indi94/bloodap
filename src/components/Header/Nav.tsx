import React from 'react'

function Nav() {
    
    return (
        <div>
            <div className="container-fluid">
            <nav className=" navbar navbar-expand-lg  fixed-top " >
            <a className="navbar-brand text" href="blood"><strong className="navbar-text">Blood</strong></a>
             <button className="navbar-toggler navbar-toggler-button" type="button" data-toggle="collapse" data-target="#ngana" 
            aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
             <div className="collapse navbar-collapse" id="ngana">
            <div className="nav navbar-nav mx-auto">
             <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="index.html" >Accueil</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="sos.html">Demande/sos</a>
              </li>
             
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="conseil.html">conseil</a>
              </li>
                  
                  <li className="nav-item">
                    <i className="far fa-bell"data-toggle="modal" data-target="#modal"></i>
                  </li>
                  
                  
                  <div className="modal fade" id="modal" >
                    <div className="modal-dialog" role="document">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title">Titre</h5>
                          <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">x</span></button>
                        </div>
                        <div className="modal-body">
                          <p>Texte du modal + choix et actions...</p>
                        </div>
                        <div className="modal-footer">
                          <button type="button" className="btn btn-secondary" data-dismiss="modal">SOS</button>
                          <button type="button" className ="btn btn-primary">RDV</button>
                        </div>
                      </div>
                    </div>
                  </div>
               
          
               
                </ul>
        </div>
      </div>
  </nav>
  </div>
        </div>
    )
}

export default Nav
