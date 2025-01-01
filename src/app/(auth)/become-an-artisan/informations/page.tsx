'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { MapPin } from 'lucide-react';

const ProfilePage = () => {
const router = useRouter();
const [selectedRoles, setSelectedRoles] = useState<string[]>([]);

useEffect(() => {
    // Retrieve selected roles from sessionStorage
    const roles = sessionStorage.getItem('selectedRoles');
    if (!roles) {
    // If no roles found, redirect back to selection page
    // router.push('/become-artisan');
    return;
    }
    setSelectedRoles(JSON.parse(roles));
}, [router]);

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    const profileData = {
    firstName: formData.get('firstName'),
    lastName: formData.get('lastName'),
    contactNumber: formData.get('contactNumber'),
    commune: formData.get('commune'),
    roles: selectedRoles
    };

    // Here you would typically send the data to your API
    console.log('Submitting profile data:', profileData);
    
    // Clear the session storage after successful submission
    sessionStorage.removeItem('selectedRoles');
    
    // Redirect to success page or dashboard
    router.push('/dashboard');
};

return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
    <Card className="w-full max-w-md">
        <CardContent className="pt-6">
        <h1 className="text-center text-xl font-semibold bg-gradient-to-b from-[#5544B7] to-[#724FFF] text-transparent bg-clip-text">
            Become an artisan !
        </h1>
        
        <form onSubmit={handleSubmit}>
            <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
                <div>
                <Input
                    name="firstName"
                    placeholder="First Name"
                    className="w-full"
                    required
                />
                </div>
                <div>
                <Input
                    name="lastName"
                    placeholder="Last Name"
                    className="w-full"
                    required
                />
                </div>
            </div>
            
            <div>
                <Input
                name="contactNumber"
                placeholder="Contact Number"
                type="tel"
                className="w-full"
                required
                />
            </div>
            
            <div className="relative">
                <Input
                name="commune"
                placeholder="Commune"
                className="w-full"
                required
                />
                <button
                type="button"
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-gradient-to-b from-[#5544B7] to-[#724FFF] text-transparent bg-clip-text"
                onClick={() => {
                    // Handle getting current location
                    if (navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition((position) => {
                        console.log(position);
                    });
                    }
                }}
                >
                <MapPin className="w-5 h-5" />
                </button>
            </div>
            </div>

            <Button
            type="submit"
            className="w-full mt-6 bg-gradient-to-b from-[#5544B7] to-[#724FFF] text-white"
            >
            Confirm
            </Button>

            <div className="mt-4 text-center text-sm text-gray-600">
            <span>Already have an account? </span>
            <a href="/login" className="bg-gradient-to-b from-[#5544B7] to-[#724FFF] text-transparent bg-clip-text hover:underline">
                Login
            </a>
            </div>
        </form>
        </CardContent>
    </Card>
    </div>
);
};

export default ProfilePage;