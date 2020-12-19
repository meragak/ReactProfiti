import React, {useState}from 'react'
import axios from 'axios';
import Card from './Cards';

function MyCards() {
    const [markets, setMarkets] = useState([]);

    const getMarkets=()=>{
    axios.get("http://localhost:8000/markets").then(response=>response)
    .then(res=>setMarkets(res.data));
    
    }
    //<Card title={markets}></Card>
    return (
        
        <div>
            <button onClick={getMarkets()}></button>
    {markets.map(market=><Card title={market.name}></Card>
    )}
        </div>
    )
}

export default MyCards
