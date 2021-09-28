import React from 'react'


function Alert() {
    

    return (
        <div>
  <div className="modal fade" id="modal">
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
                                <button type="button" className="btn btn-primary">RDV</button>
                              </div>
                            </div>
                          </div>
                        </div>
        </div>
    )
}

export default Alert
