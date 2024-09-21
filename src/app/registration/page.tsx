'use client';
import Footer from '@/components/Footer';
import { Input } from '@/components/ui/input';
import Navbar from '@/components/Navbar';
import { useState } from 'react';
import { Button } from '@/components/ui/Button';

export default function Registration() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (formData: FormData) => {
        const name = formData.get('name');
        const email = formData.get('email');
        const phone = formData.get('phone');
        alert(`Name: ${name}\nEmail: ${email}\nPhone: ${phone}`);
    };

    return (
        <div className='min-h-screen flex flex-col'>
            <Navbar />
            <main className='flex-grow'>
                <div className='container mx-auto px-4 py-8 pt-40 text-white'>
                    <h1 className='text-3xl font-bold text-center mb-8'>
                        Register
                    </h1>
                    <form
                        className='max-w-lg mx-auto p-8 rounded-lg shadow-lg space-y-6'
                        style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
                    >
                        <div>
                            <label
                                htmlFor='name'
                                className='block font-medium mb-2'
                            >
                                Name
                            </label>
                            <Input
                                name='name'
                                type='text'
                                value={formData.name}
                                onChange={handleChange}
                                placeholder='John Doe'
                            />
                        </div>

                        <div>
                            <label
                                htmlFor='email'
                                className='block font-medium mb-2'
                            >
                                Email
                            </label>
                            <Input
                                name='email'
                                type='email'
                                value={formData.email}
                                onChange={handleChange}
                                placeholder='example@mail.com'
                            />
                        </div>

                        <div>
                            <label
                                htmlFor='phone'
                                className='block font-medium mb-2'
                            >
                                Phone Number
                            </label>
                            <Input
                                name='phone'
                                type='tel'
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder='0xx-xxx-xxxx'
                            />
                        </div>

                        <Button formAction={handleSubmit}>Register</Button>
                    </form>
                </div>
            </main>
            <Footer />
        </div>
    );
}
