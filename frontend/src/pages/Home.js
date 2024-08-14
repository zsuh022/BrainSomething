import React from 'react'

// components
import Game1 from "../components/Game1"

const Home = () => {
    return (
        <div className="home">
            <div className="workouts">
                {/* Render the minigame component */}
                <Game1 />
            </div>
        </div>
    )
}

export default Home
