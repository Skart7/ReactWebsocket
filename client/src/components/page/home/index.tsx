import React from 'react'

import LeftBar from './leftbar'
import ChatContent from './mainchat'
import Header from '../../header'

import './homepage.scss'

export default function HomePage() {


    return (
    <>
        <Header/>

        <div className="homepage">
            <LeftBar/>
            <ChatContent/>
        </div>
    </>
    )
}