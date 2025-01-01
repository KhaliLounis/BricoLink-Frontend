import Image from 'next/image';
import Link from 'next/link';

const NotFound = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-white p-6">
            <Image 
                src="/assets/icons/Frame.png" 
                alt="Not Found Image" 
                width={500} 
                height={500} 
            />

            <h1 className="text-xl font-semibold text-indigo-500 mb-2">
                Ohh! Page Not Found
            </h1>
            <p className="text-gray-500 mb-6">
                We can&apos;t seem to find the page you&apos;re looking for
            </p>

            <div className="w-full max-w-md flex flex-col items-center gap-4">
                <div className="flex w-full gap-2">
                    <input 
                        type="email" 
                        placeholder="Enter your email"
                        className="flex-1 p-2 border border-gray-300 rounded" 
                    />
                    <button className="bg-indigo-500 hover:bg-indigo-600 text-white p-2 rounded">
                        Subscribe
                    </button>
                </div>
                
                <Link href="/">
                    <div className="text-indigo-500 hover:underline">
                        Back to Home
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default NotFound;