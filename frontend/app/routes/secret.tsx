import { useAuth } from "@clerk/clerk-react";



export default function Example() {
    const { isLoaded, isSignedIn, userId, sessionId, getToken } = useAuth()

    if (!isLoaded) {
        return <div>Loading...</div>
    }

    if (!isSignedIn) {
        // You could also add a redirect to the sign-in page here
        return (
            <div className='flex items-center justify-center text-2xl' > 🚫 🚫 🚫Sorry you don't have access to this stuff, try logging in^^^ 🚫 🚫 🚫</div >
        )
    }

    return (
        <div className='flex items-center justify-center text-2xl' >
            Hello, {userId}! 🌱🌱🌱 Welcome to your secrets. 🌱🌱🌱
        </div>
    )
}