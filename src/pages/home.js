import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import Layout from '../components/layout';
import Navbar from '../components/navbar';
import { getAllJournals } from '@/data/journal';
import JournalCard from '@/components/journalCard';

export default function Home() {
    const [journalList, setJournalList] = useState([]);

    useEffect(() => {
        getAllJournals().then((journalData) => {
            setJournalList(journalData);
        });
    }, []);

    return (
        <>
            <div>
                <div className="flex justify-center mt-6">
                    <h1 className="font-display text-6xl font-bold mb-0.5">
                        Welcome back, Sage.
                    </h1>
                </div>
                <div className="flex justify-center mt-0 pt-0 mb-[-30]">
                    <h3 className="font-body text-3xl">
                        The cards are waiting, and so is your reflection.
                    </h3>
                </div>
                <div className="relative flex flex-col justify-center items-center space-y-0 h-48 mt-1">
                    <Link href="/start-your-reflection">
                        <button className="relative z-10 w-full py-2 px-10 bg-goldenbrown text-[#EFE5CB] font-body text-2xl rounded-full border border-[#EFE5CB] hover:bg-[#414831]/80 transition mb-4">
                            Reveal Todays Wisdom
                        </button>
                    </Link>
                    <img
                        src="/images/linebreak.png"
                        className="absolute h-36 top-24 z-0"
                    />
                </div>
            </div>
            <div className="flex flex-col items-center px-4">
                <div className="w-full max-w-5xl bg-[#241A14] border border-[#414831]/50 rounded-2xl shadow-lg px-8 py-10">
                    <div>
                        <h3 className="font-display text-4xl mt-4 mb-6 text-center text-[#DDBE8B]">
                            Your Reflection Pool
                        </h3>
                    </div>

                    {journalList?.length > 0 ? (
                        <>
                            <div>
                                <h5 className="font-body text-2xl mb-6 text-center text-[#EFE5CB]">
                                    Glimpse the thoughts that have surfaced this
                                    past week.
                                </h5>
                            </div>
                            <div className="space-y-4">
                                {journalList.map((journal) => (
                                    <Link
                                        href={`journals/${journal.id}`}
                                        key={journal.id}
                                    >
                                        <JournalCard journal={journal} />
                                    </Link>
                                ))}
                            </div>
                        </>
                    ) : (
                        <div>
                            <h5 className="font-body text-2xl mb-2 text-center text-[#EFE5CB]">
                                A seeds potential lies unseen within the soil.
                                What will you uncover?
                            </h5>
                        </div>
                    )}
                </div>
            </div>
            <div></div>
        </>
    );
}

Home.getLayout = function getLayout(page) {
    return (
        <Layout>
            <Navbar />
            {page}
        </Layout>
    );
};
