import React from 'react'

function Footr() {

  return (
    <div>
      <div className="container-fluid footer">
  <div className="container-fluid  text-white text-center">
    <div className="container">
      <div className="row pt-3 pb-3">
        <div className="col-12">
           <h5>Blood Donnation</h5>
           <p>copyright©2021</p>
              <div className="footer">
                <button type="button" className="btn success" data-toggle="modal" data-target="#exampleModal" 
                data-whatever="@mdo" >Nous contacter</button>
                <div className="modal fade" id="exampleModal" >
                  <div className="modal-dialog">
    
                    
                    <div className="modal-content text-left">
                      <div className="modal-header bg-white text-dark">
                        <h5 className="modal-title" id="exampleModalLabel">Nous contacter</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      
                      <div className="modal-body">
                        <div className="form">
                          <label htmlFor="recipient-name" className="col-form-label bg-white text-dark">Name</label>
                          <input type="text" className="form-control" id="recipient-name"></input>
                        </div>
    
                          <div className="form-group">
                            <label htmlFor="recipient-name" className="col-form-label bg-white text-dark">Email</label>
                            <input type="text" className="form-control" id="recipient-name"></input>
                          </div>
                          <div className="form-group">
                            <label htmlFor="message-text" className="col-form-label bg-white text-dark">Message</label>
                            <textarea className="form-control" id="message-text"></textarea>
                          </div>
                          <button type="button" className="btn success btn-lg btn-block">Envoyer</button>
                        </div>
                      </div>
              </div>
                
                </div>
              </div>
            </div>
          </div>
        </div>
  </div>
</div>
    </div>
  )
}

export default Footr
