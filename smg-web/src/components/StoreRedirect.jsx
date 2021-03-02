import React, { useEffect } from 'react'
import Hero from './shared/Hero/Hero'

const StoreRedirect = (props) => {
    const {redirectUrl} = props

    useEffect(() => {
        window.location.href = redirectUrl; 
    }, [])

    return (
        <>
            <Hero styles="" title="Redirecting..." subtitle="Please wait while we redirect you to the SMG store." />
        </>
    )
}

export default StoreRedirect