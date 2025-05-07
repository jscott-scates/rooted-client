import Link from 'next/link';
import { useRouter } from 'next/router';
import { useRef } from 'react';
import { Input } from '../components/form-elements/input';
import Layout from '../components/layout';
import Navbar from '../components/navbar';
import { useAppContext } from '../context/state';
import { register } from '../data/auth';

export default function Register() {
    const { setToken } = useAppContext();

    const firstName = useRef('');
    const lastName = useRef('');
    const username = useRef('');
    const password = useRef('');
    const email = useRef('');
    const phone_number = useRef('');
    const address = useRef('');
    const router = useRouter();

    const submit = (e) => {
        e.preventDefault();

        const user = {
            username: username.current.value,
            email: username.current.value,
            password: password.current.value,
            first_name: firstName.current.value,
            last_name: lastName.current.value,
            phone_number: phone_number.current.value,
            address: address.current.value,
        };

        register(user).then((res) => {
            if (res.token) {
                setToken(res.token);
                router.push('/home');
            }
        });
    };

    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="w-full max-w-lg px-8 py-10 bg-[#241A14] shadow-xl rounded-2xl border border-[#414831]/40">
                <form className="space-y-6">
                    <h1 className="text-4xl font-display text-center text-[#DDBE8B]">
                        Start Your Path, Sage
                    </h1>

                    <Input
                        id="firstName"
                        refEl={firstName}
                        type="text"
                        label="First Name"
                    />
                    <Input
                        id="lastName"
                        refEl={lastName}
                        type="text"
                        label="Last Name"
                    />
                    <Input
                        id="username"
                        refEl={username}
                        type="text"
                        label="Username"
                    />
                    <Input
                        id="password"
                        refEl={password}
                        type="password"
                        label="Password"
                    />
                    <Input id="email" refEl={email} type="text" label="Email" />

                    <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4">
                        <button
                            type="button"
                            onClick={submit}
                            className="w-full sm:w-1/2 py-2 px-4 bg-goldenbrown text-[#EFE5CB] font-body text-lg rounded-full shadow border border-[#EFE5CB] hover:bg-[#414831] transition"
                        >
                            Submit
                        </button>

                        <Link href="/" className="w-full sm:w-1/2">
                            <button
                                type="button"
                                className="w-full py-2 px-4 bg-goldenbrown text-[#EFE5CB] font-body text-lg rounded-full border border-[#EFE5CB] hover:bg-[#414831]/80 transition"
                            >
                                Cancel
                            </button>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

Register.getLayout = function getLayout(page) {
    return (
        <Layout>
            <Navbar />
            {page}
        </Layout>
    );
};
