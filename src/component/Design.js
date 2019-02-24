import React, { Component } from 'react';

import "./App.css"

class Design extends Component{

  render(){
    return(
      <div>
        <div className="header">
        <h1 >Corporate Wellness</h1> 
        <button className="button button1" type="submit" >Get Connected</button>
        </div>
        <img src="https://www.halo.com/blog/wp-content/uploads/2017/05/Corporate-Wellness.gif?x45549" alt="corporatewellness" width="500" height="250"/>
        <div className="middle">
        <p ><img className="middle1"src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxBi-9rqpbhxWJa0t-xdpb3iLFVcGm2T8H26ccBwM_xz0at7Wv" alt="happy" align="right"/>
        Deevefit membership is the fitness your team will use<br/>
        Ehance the employee engagement and track the usage while your employee stay healthy.<br/>
        Deevefit is the best way to connect with the team outside the work.
        </p>
        </div>
        <br/>
        <br/>
        <br/>
        <div className="quote"><p>"Effective Wellnes interventions helps for better employee perfomance at work"</p></div>
        <h3><img className="middle1" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUhzJjBPosVuHCqqNM3Wagq2mthIW1iGLPipKbsNMSTK3U0yFk" alt="monthly report" align="left"/> <p className="middle2">Recive Monthly Report </p></h3>


        <h4><img className="middle3" src="http://www.bigv.in/wp-content/uploads/2014/07/Easy-Integration.png" alt="monthly report" align="right"/> <p className="middle4">Easy Integration</p></h4>
        

      
      </div>
    )
  }
}

export default Design;
