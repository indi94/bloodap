import React from 'react'

function Nav() {
    
    return (
        <div>
            <div className="container-fluid">
            <nav className=" navbar navbar-expand-lg  fixed-top " >
            <a className="navbar-brand text"   href="blood"><strong className="navbar-text">Blood</strong></a>
             <button className="navbar-toggler navbar-toggler-button" type="button" data-toggle="collapse" data-target="#ngana" 
            aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
             <div className="collapse navbar-collapse" id="ngana">
            <div className="nav navbar-nav mx-auto">
             <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/" >Accueil</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/Sos">Demande/sos</a>
              </li>
             
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/Conseil">conseil</a>
              </li>
                  
                  <li className="nav-item">
                    <i className="far alert fa-bell"data-toggle="modal" data-target="#modal"></i>
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
  <div>
            <div className="container-fluid-banner">
            
             <button  type="button" className="go"><a className="btnsubmi" href="/Inscription" >s'inscrire</a></button>
            </div>
        </div>
        <div className="container-fluid-bou">
   <div className="row">
   <div className="col-xs-12 col-sm-6 col-md-3 col-lg-4 text-center">
   <a className="btnsubmi"  href="/Sos"><i className="fas fa-first-aid fonteowsome"></i></a>
      <div>
  </div>
   
 
    </div>
    <div className="col-xs-12 col-sm-6 col-md-3 col-lg-4 text-center">
    <a className="btnsubmi"  href="/Nav"><i className="far fa-user-md-chat fonteowsome "></i></a>
      <div>
  </div>
 
    </div>
     <div className="col-xs-12 col-sm-6 col-md-3 col-lg-4 text-center">
     <a className="btnsubmi"  href="/Conseil"><i className="far alert fa-bell fonteowsome"></i></a>
    </div>
 
    </div>
    
   </div>
  </div>
  
        
    )
}

export default Nav
