import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import Layout from '../../../components/layout';
import Navbar from '../../../components/navbar';
import { useAppContext } from '../../../context/state';
import { deleteJournalById, getJournalById } from '@/data/journal';
import EntryCardDisplay from '@/components/entryCard';

export default function Journal() {
    const router = useRouter();
    const { id } = router.query;
    const [journal, setJournal] = useState({});

    useEffect(() => {
        if (id) {
            getJournalById(Number(id)).then((journalData) => {
                setJournal(journalData);
            });
        }
    }, [id]);

    const deleteEntry = () => {
        deleteJournalById(Number(id));
        router.push(`/journals`);
    };

    console.log(journal);

    if (!journal) return;

    return (
        <>
            {/* Journal Header */}
            <div className="mt-6">
                {journal.title ? (
                    <div>
                        <h1 className="font-display text-6xl flex justify-center">
                            {journal.title}
                        </h1>
                    </div>
                ) : (
                    <div>
                        <h1 className="font-display text-6xl flex justify-center">
                            Untitled Entry for {journal.spread?.name}
                        </h1>
                    </div>
                )}
            </div>
            {/* Initial Seed or Spread Overview */}
            <div>
                {journal.initial_seed ? (
                    <div>
                        <h3 className="font-body text-3xl flex justify-center mt-1 mb-1">
                            Your Initial Thoughts: {journal.initial_seed}
                        </h3>
                    </div>
                ) : (
                    <div>
                        <h3 className="font-body text-3xl flex justify-center mt-1 mb-1">
                            {journal.spread?.description}
                        </h3>
                    </div>
                )}
            </div>
            <div className="grid grid-cols-4 gap-5 mt-8">
                {/* Journal Information (2/3 width) */}
                <div className="col-span-2 pt-6 ml-10">
                    {/* Created On Date */}
                    <div className="flex justify-left font-body text-2xl mb-2">
                        {new Date(journal.created_on).toLocaleDateString(
                            'en-US',
                            {
                                month: 'long',
                                day: 'numeric',
                                year: 'numeric',
                            }
                        )}
                    </div>

                    {/* Choice Selections */}
                    <div className="flex flex-col gap-1 mb-4">
                        <div className="flex flex-row gap-2 text-2xl font-body">
                            Mood:
                            {journal.mood !== '0' &&
                            journal.mood !== '' &&
                            journal.mood !== null ? (
                                <p>{journal.mood}</p>
                            ) : (
                                <p className="italic ">
                                    You’ve named no mood—perhaps it waits to
                                    emerge.
                                </p>
                            )}
                        </div>
                        <div className="flex flex-row gap-2 text-2xl font-body">
                            Lunar Phase:
                            {journal.lunar_phase !== '0' &&
                            journal.lunar_phase !== '' &&
                            journal.lunar_phase !== null ? (
                                <p>{journal.lunar_phase}</p>
                            ) : (
                                <p className="italic">
                                    The moon’s phase is veiled in shadow.
                                </p>
                            )}
                        </div>
                    </div>

                    {/* Journal Entry Preview */}
                    <div className="relative z-10 flex justify-center mt-6">
                        <div className="w-full max-w-3xl ">
                            <h3 className="font-display text-2xl pt-2 mb-2">
                                Journal Entry:
                            </h3>
                            {journal.entry_text !== '<p></p>' &&
                            journal.entry_text !== '' ? (
                                <div
                                    className="font-body text-xl leading-relaxed text-[#EFE5CB] break-words"
                                    dangerouslySetInnerHTML={{
                                        __html: journal.entry_text,
                                    }}
                                />
                            ) : (
                                <h3 className="italic font-body text-xl text-[#EFE5CB] mb-2">
                                    The page remains still, awaiting your
                                    thoughts.
                                </h3>
                            )}
                        </div>
                    </div>
                </div>

                {/* Entry Cards Display (1/3 width) */}
                <div className="col-span-2 flex items-start justify-start p-6">
                    <EntryCardDisplay cards={journal.entry_cards} />
                </div>
            </div>

            {/* Buttons */}

            <div className="flex flex-row justify-center gap-6 mt-16 mb-10">
                <div>
                    <button
                        onClick={() => {
                            router.push(`${id}/edit`);
                        }}
                        className="bg-goldenbrown text-[#EFE5CB] font-body shadow border border-[#EFE5CB] hover:bg-[#414831] transition text-2xl font-bold py-2 px-10 rounded-full"
                    >
                        Edit Your Journal
                    </button>
                </div>
                <div>
                    <button
                        onClick={() => deleteEntry()}
                        className="bg-goldenbrown text-[#EFE5CB] font-body shadow border border-[#EFE5CB] hover:bg-[#414831] transition text-2xl font-bold py-2 px-10 rounded-full"
                    >
                        {' '}
                        Delete Your Journal Entry
                    </button>
                </div>
            </div>
        </>
    );
}

Journal.getLayout = function getLayout(page) {
    return (
        <Layout>
            <Navbar />
            {page}
        </Layout>
    );
};
