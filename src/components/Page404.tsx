import React from 'react'


export const Page404 = ({ history }: { history: any }) => {

    const handleOnClick = () => {
        history.push('/');
    }
    return (
        <>
            <h4 style={{paddingTop: 50}}> 
                PAGE NOT FOUND! SORRY <span role="img" aria-label="sad">😢</span>
            </h4>
            <button onClick={handleOnClick}>
                Go Back to main page
            </button>
        </>
    )
}

export default Page404;