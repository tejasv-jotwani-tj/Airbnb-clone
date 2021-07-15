import React from 'react'
import './SearchPage.css'
import {Button} from "@material-ui/core"
import SearchResult from './SearchResult'

function SearchPage() {
    return (
        <div className='searchPage'>
            <div className='searchPage__info'>
                <p>62 stays . 26 august to 30 august
                . 2 guest</p>
                <h1> Stays nearby</h1>
                <Button
                variant='outlined'>
                Cancellation Flexibility    
                </Button>
                <Button
                variant='outlined'>
                Type of place    
                </Button>
                <Button
                variant='outlined'>
                Price    
                </Button>
                <Button
                variant='outlined'>
                Rooms and beds    
                </Button>
                <Button
                variant='outlined'>
                More filters    
                </Button>
                <SearchResult
                    img="https://media-cdn.tripadvisor.com/media/photo-s/0f/74/1e/99/krome-hotel.jpg"    
                    location="Private room in center of London"
                    title="Stay at this spacious Edwardian House"
                    description="1 guest . 1 bedroom . 1 bed . 1.5 shared bathrooms 
                    . Wifi . Kitchen . Free parking . Washing Machine"
                    star={4.73}
                    price="€30/night"
                    total="€117 total"
                />
                <SearchResult
                    img="https://a0.muscache.com/im/pictures/miso/Hosting-44790975/original/d146d71a-4d38-4b48-a7e3-cf218ab5d2b0.jpeg?im_w=1200"    
                    location="Private room in house"
                    title="Birds of Chorus Homestay"
                    description="2 guests . 1 bedroom . 1 bed . 1.5 shared bathrooms 
                    . Wifi . Kitchen . Free parking . Washing Machine"
                    star={4.63}
                    price="€10/night"
                    total="€60 total"
                />
                 <SearchResult
                    img="https://a0.muscache.com/im/pictures/c44ee791-e0bf-474b-aeca-4be9364c8eaa.jpg?im_w=1200"    
                    location="Room in hotel"
                    title="Deluxe Room at Hotel New Light"
                    description="2 guests . 1 bedroom . 1 bed . 1.5 shared bathrooms 
                    . Wifi . Kitchen . Free parking . Washing Machine"
                    star={4.83}
                    price="€10/night"
                    total="€60 total"
                />
                 <SearchResult
                    img="https://a0.muscache.com/im/pictures/e0a82bf1-9678-4ab1-a454-ebfe866bc993.jpg?im_w=1200"    
                    location="Room in hotel Nature"
                    title="Semi Deluxe Cottage"
                    description="4 guests . 2 bedroom . 2 bed . 1.5 shared bathrooms 
                    . Wifi . Kitchen . Free parking . Washing Machine"
                    star={4.93}
                    price="€50/night"
                    total="€150 total"
                />
            </div>
        </div>
    )
}

export default SearchPage 
