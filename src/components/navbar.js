import Link from 'next/link';
import { useAppContext } from '@/context/state';
import {
    Disclosure,
    DisclosureButton,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
} from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { useRouter } from 'next/router';

export default function Navbar() {
    const { token, setToken } = useAppContext();
    const logoDestination = token ? '/home' : '/';
    const router = useRouter()

    const handleLogout = () => {
        localStorage.removeItem('token');
        setToken(null); // clear from context
        router.push('/'); // redirect to landing/login page
    };
    
    return (
        <Disclosure as="nav">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    {/* Mobile menu button */}
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        <DisclosureButton className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-inset">
                            <span className="sr-only">Open main menu</span>
                            <XMarkIcon
                                className="hidden h-6 w-6"
                                aria-hidden="true"
                            />
                        </DisclosureButton>
                    </div>

                    {/* Logo */}
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex flex-shrink-0 items-center">
                            <Link href={logoDestination}>
                                <img
                                    alt="The Rooted Deck"
                                    src="/images/logo.png"
                                    className="h-14 w-auto"
                                />
                            </Link>
                        </div>
                    </div>

                    {/* Right side controls */}
                    <div className="absolute inset-y-0 right-0 flex items-center space-x-4 pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        {token ? (
                            // Logged-in: show profile menu
                            <Menu as="div" className="relative ml-3">
                                <div>
                                    <MenuButton className="relative flex rounded-full bg-[#DDBE8B] text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                        <span className="sr-only">
                                            Open user menu
                                        </span>
                                        <img
                                            alt=""
                                            src="/images/sage-profile-icon.png"
                                            className="h-10 w-10 rounded-full"
                                        />
                                    </MenuButton>
                                </div>
                                <MenuItems className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 focus:outline-none">
                                    <MenuItem>
                                        <Link
                                            href="/journals"
                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                        >
                                            Your Journals
                                        </Link>
                                    </MenuItem>
                                    <MenuItem>
                                        <button
                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                            onClick={handleLogout}
                                        >
                                            Sign out
                                        </button>
                                    </MenuItem>
                                </MenuItems>
                            </Menu>
                        ) : (
                            // Logged-out: show Sign In and Register
                            <>
                                <Link
                                    href="/login"
                                    className="font-display text-2xl text-[#DEBF8C] hover:bg-[#74340F] hover:text-[#DEBF8C] px-3 py-2 rounded-md font-medium"
                                >
                                    Sign In
                                </Link>
                                <Link
                                    href="/register"
                                    className="font-display text-2xl text-[#DEBF8C] hover:bg-[#74340F] hover:text-[#DEBF8C] px-3 py-2 rounded-md font-medium"
                                >
                                    Register
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </Disclosure>
    );
}
