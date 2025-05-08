import Link from 'next/link';
import { useRouter } from 'next/router';
import { useRef, useState } from 'react';
import { Input } from '../components/form-elements/input';
import Layout from '../components/layout';
import Navbar from '../components/navbar';
import { useAppContext } from '../context/state';
import { createNewJournal } from '@/data/journal';

export default function StartYourReflection() {
    const router = useRouter();

    const createJournalEntry = (spreadId) => {
        createNewJournal({
            spread: Number(spreadId),
        }).then((res) => {
            router.push(`/daily-seed/${res?.id}`);
        });
    };

    return (
        <>
            <div className="flex flex-col mt-10">
                <div>
                    <h1 className="font-display text-6xl flex justify-center">
                        Begin Your Reflection
                    </h1>
                </div>
                <div>
                    <h3 className="font-body text-3xl flex justify-center mt-1 mb-8">
                        What wisdom do you seek today, Sage?
                    </h3>
                </div>
            </div>
            <div>
                <div className="flex flex-row justify-center mt-2 gap-10">
                    {/* Draw One Card - Full Card Button */}
                    <button
                        onClick={() => createJournalEntry(1)}
                        className="flex flex-col items-center px-10 py-12 w-64 bg-[#4B2C20] border border-[#DDBE8B] rounded-lg shadow-md transition hover:shadow-lg hover:bg-[#5a3327]"
                    >
                        <div className="mb-4">
                            <div className="w-24 h-28 bg-[#DDBE8B]/20 rounded-md flex items-center justify-center">
                                <img
                                    src="/images/single-card-icon.png"
                                    alt="Single card icon"
                                    className="h-full object-contain"
                                />
                            </div>
                        </div>

                        <div className="text-3xl font-display text-[#EFE5CB] mb-2">
                            Draw One Card
                        </div>

                        <div className="text-lg text-[#EFE5CB] text-center font-body">
                            Let the deck offer a message for your day.
                        </div>
                    </button>

                    {/* Choose A Spread - Full Card Button */}
                    <button
                        onClick={() => createJournalEntry(2)}
                        className="flex flex-col items-center px-10 py-12 w-64 bg-[#4B2C20] border border-[#DDBE8B] rounded-lg shadow-md transition hover:shadow-lg hover:bg-[#5a3327]"
                    >
                        <div className="text-3xl font-display text-[#EFE5CB] mb-2">
                            Choose A Spread
                        </div>

                        <div className="text-lg text-[#EFE5CB] text-center font-body mb-4">
                            Explore deeper themes and patterns.
                        </div>

                        <div className="w-24 h-28 bg-[#DDBE8B]/20 rounded-md flex items-center justify-center">
                            <img
                                src="/images/spread-icon.png"
                                alt="Spread icon"
                                className="h-full object-contain"
                            />
                        </div>
                    </button>
                </div>
            </div>
        </>
    );
}

StartYourReflection.getLayout = function getLayout(page) {
    return (
        <Layout>
            <Navbar />
            {page}
        </Layout>
    );
};
