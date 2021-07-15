import React from 'react';
import './Home.css';
import Banner from './Banner'
import Card from './Card'

function Home() {
    return (
        <div className='home'>
            <Banner/>
            <div className='home__section'>
            <Card
                src="https://a0.muscache.com/im/pictures/a6b08861-feb8-4a01-a76d-b33d2867b441.jpg?im_w=480"
                title="Online Experiences"
                description="Unique activities we can do together
                , led by a world of hosts."
            />
            <Card 
                src="https://a0.muscache.com/im/pictures/2f13349d-879d-43c6-83e3-8e5679291d53.jpg?im_w=480"
                title="Unique stays"
                description="Spaces that are more than just a place
                to sleep"
            />
            <Card 
                src="https://a0.muscache.com/im/pictures/7d82ca14-56e5-4465-8218-dcfa7d69b6ac.jpg?im_w=480"
                title="Entire homes"
                description="Comfortable private places, with room for
                friends or family"
            />
            </div>
            <div className='home__section'>
                <Card 
                    src="https://media.nomadicmatt.com/2019/airbnb_breakup3.jpg"
                    title="3 Bedroom Flat in Bournemouth"
                    description="Superhost with a stunning view of the beachside
                    in Sunny Bournemouth"
                    price="€130/night"
                />
                <Card 
                    src="https://rew-feed-images.global.ssl.fastly.net/mred/_cloud_media/propertyresi/residential/mrd10730254-23-9954f6fd3279d4de16eaade0072f1cb9-o.jpg"
                    title="Penthouse in London"
                    description="Enjoy the amazing sights of London with this
                     stunning penthouse"
                     price="€350/night"
                />
                <Card 
                    src="https://media.nomadicmatt.com/2018/apartment.jpg"
                    title="1 Bedroom apartment"
                    description="Superhost with great amenities and a fabulous 
                    shopping complex nearby"
                    price="€70/night"
                />
            </div>
        </div>
    )
}

export default Home
