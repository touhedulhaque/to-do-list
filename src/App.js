import React from 'react';
import Card from './Components/Card';
import Data from './Data/data.json';
import NewCard from './Components/NewCard';



function App() {
    return <div>
        <h1 className="headingStyle"> To Do App</h1>
        <Card titleText="Drink Water" description="minimum half liter" />
        <Card titleText="Yoga/Meditation" description="minimum five minutes" />
        <Card titleText="write plan and study" description="minimum two hours dedication" />
        {
            Data.map((item, index) => <NewCard key={index} titleText={item.titleText} description={item.description} />)
        }
    </div>
}
export default App;