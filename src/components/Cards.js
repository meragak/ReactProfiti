import React from 'react'
import '../Cards.css'
function Cards({title}) {
    return (
        <div className="card-container">
        
            <img className="image-container" src="https://lvdneng.rosselcdn.net/sites/default/files/dpistyles_v2/ena_16_9_extra_big/2020/06/03/node_760977/47275299/public/2020/06/03/B9723628339Z.1_20200603180021_000%2BGNIG3UNJM.1-0.jpg?itok=AwE6DN1E1591203761" alt="Magasin"></img>
            <div className="content-container">
            <div className="card-title"><h1>{title}</h1></div>
            <p>{title}</p>  
            </div>
        </div>
    )
}

export default Cards
