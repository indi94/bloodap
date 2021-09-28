import React from 'react'
import logo from '../../images.jpg'
import image from '../../semez_un_don.jpg'
function Conseil() {
  

     return (
          <div>
               <div className="container-fluid text-white">
               
               <div className="container-fluid-boue">
               <div className="row">
               <div className="col-xs-12 col-md-4 text-center con ">
               <img className="rounded-circle mb-n5  shadow-lg" src={image} alt="" width="250px" height="240px"/>
               <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto in rem voluptate accusantium voluptatibus deserunt fugit eveniet molestiae ut facilis nostrum tenetur maiores porro culpa quaerat, mollitia temporibus modi veritatis!</p>
               </div>
               <div className="col-xs-12 col-md-8  text-center">
                       <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis, eligendi delectus. Accusamus deserunt quia velit unde vel eum labore quisquam minus voluptates alias. Esse cupiditate asperiores ipsum repellendus in. Sit.</p>
                       <h2 className="mt-5">Semez un don de sang Recoltez la vie</h2>
               </div>
               </div>
               <div className="container" >
               <div className="row ">
               <div className="col-xs-12 col-md-8  text-center"> 
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis, eligendi delectus. Accusamus deserunt quia velit unde vel eum labore quisquam minus voluptates alias. Esse cupiditate asperiores ipsum repellendus in. Sit.</p>
                        <h2 className="mt-5">Semez un don de sang Recoltez la vie</h2>
                </div>
                <div className="col-xs-12 col-md-4 text-center " >    
                    <img className="rounded-circle mb-n5  shadow-lg" src={logo} alt="" width="250px" height="240px"/>
                  </div>
                  <div className="container-fluid conseil text-center" >
                       <h2>ce qu'il faut savoir</h2>
                </div>
               </div>
               </div>
               </div>
               </div>
          </div>
     )
}

export default Conseil
