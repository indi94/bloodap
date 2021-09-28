import React from 'react'


function Sos() {

  return (
     <div>
         <div className="container-fluid-so">
         <div className="container sectionTwo">
         <div className="row">
         <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 forms mb-4">
         <label htmlFor="exampleFormControlInput1">Nom /Prenom</label>
         <input id="namedInput" className="form-control" type="text" name="name"/>
         </div>
         <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 forms mb-4">
         <label htmlFor="exampleFormControlSelect1">groupe sanguin</label>
         <select className="form-control" id="exampleFormControlSelect1">
                         <option>O-</option>
                         <option>O+ </option>
                         <option>A-</option>
                         <option>A+</option>
                         <option>B-</option>
                         <option>B+ </option>
                         <option>AB-</option>
                         <option>AB+</option>
         </select>
         </div>
         <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 forms mb-4">
         <label htmlFor="exampleFormControlInput1">Contact</label>
         <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="contact"></input>
         </div>
         <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 forms mb-4">
             <label htmlFor="exampleFormControlInput1">Residence</label>
             <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Residence"></input>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 forms mb-4">
             <label htmlFor="exampleFormControlInput1">Raison de votre demande</label>
             <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="texte"></input>
        </div>
        
  
         <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 forms mb-4">
             <button type="button" className=" btn-lg butonisncrip " >valider</button>
         </div> 
          </div>
         </div>
         </div>
         
     </div>
  )
}

export default Sos
