"use client"

import About from '@/app/(components)/About'
import { useAppContext } from '@/app/(context)/AppWrapper'
import React, { useRef, useState } from 'react'

const AboutPage = () => {
    const container = useRef()
    const { setCambioHeader } = useAppContext()
    const [scroll, setScroll] = useState(0)
    const handleScroll = () => {

        setScroll(container.current.scrollTop);
        if (scroll >= 100 && scroll <= 150) {
            setCambioHeader(true)
        } else if (scroll <= 50) {
            setCambioHeader(false)
        }
    }

    return (
        <div className='w-ful h-full overflow-y-auto' onScroll={handleScroll} ref={container}>
            <About />
        </div>
    )
}

export default AboutPage