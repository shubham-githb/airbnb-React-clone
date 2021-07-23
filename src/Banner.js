import { Button } from '@material-ui/core'
import React from 'react'
import './Banner.css'
function Banner() {
    return (
        <div className = 'banner'>
        <div className='banner__searchButton'>
            <Button variant = 'outlined'>Search Dates</Button>
        </div>
            <div className='banner__info'>
                <h1>Get out and stretch your imagination</h1>
                <h5>
                    Plant a different kind of getaway to uncover gems near you
                </h5>

                <Button variant='outlined'>Explore Nearby</Button>

            </div>
            
        </div>
    )
}

export default Banner
