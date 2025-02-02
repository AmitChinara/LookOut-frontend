import { SignedIn, SignedOut, SignInButton, UserButton, useUser } from "@clerk/clerk-react";
import Home from "./pages/Home.tsx";

export default function App() {
    const { isLoaded } = useUser(); // Get current user information

    if (!isLoaded) {
        return <div>Loading...</div>;
    }

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
            <header className="w-full max-w-lg mx-auto bg-white shadow-lg rounded-lg p-4">
                <div className="flex justify-between items-center">
                    <h1 className="text-2xl font-semibold text-gray-800">Lookout</h1>
                    <div className="space-x-4">
                        <SignedOut>
                            <SignInButton mode="modal">
                                {/* Render the SignInButton directly */}
                                <button className="text-blue-500 hover:text-blue-700">
                                    Sign In
                                </button>
                            </SignInButton>
                        </SignedOut>
                        <SignedIn>
                            <UserButton />
                            <Home />
                        </SignedIn>
                    </div>
                </div>
            </header>
        </div>
    );
}
