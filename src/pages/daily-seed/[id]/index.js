import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import { Input } from '../../../components/form-elements/input';
import Layout from '../../../components/layout';
import Navbar from '../../../components/navbar';
import { spreadComponentsBySpreadId } from '@/components/spreads';
import { getJournalById, updateJournalById } from '@/data/journal';

export default function DailySeed() {
    const router = useRouter();
    const { id } = router.query;
    const [journal, setJournal] = useState({});
    const spreadId = journal?.spread?.id;
    const SpreadComponent = spreadId
        ? spreadComponentsBySpreadId[spreadId]
        : null;
    const seed = useRef(null);

    useEffect(() => {
        if (id) {
            getJournalById(Number(id)).then((journalData) => {
                setJournal(journalData);
            });
        }
    }, [id]);

    const updateSeedOnJournal = () => {
        const updatedSeed = seed.current?.value || '';
        const updatedJournal = {
            initial_seed: updatedSeed,
        };
        updateJournalById(id, updatedJournal).then(() => {
            setJournal(updatedJournal);
            router.push('/home');
        });
    };

    const startJournal = () => {
        const updatedSeed = seed.current?.value || '';
        const updatedJournal = {
            initial_seed: updatedSeed,
        };

        updateJournalById(id, updatedJournal).then(() => {
            router.push(`/journals/${id}/edit`);
        });
    };

    return (
        <>
            <div className="flex flex-col justify-center mt-10">
                {/*Header Information */}
                <div>
                    <div>
                        <h1 className="font-display text-6xl flex justify-center">
                            {journal?.spread?.name}
                        </h1>
                    </div>
                    <div>
                        {journal?.spread?.num_positions === 1 ? (
                            <>
                                <h3 className="font-body text-3xl flex justify-center mt-1 mb-8">
                                    Select a Card to Guide Your Path, Sage.
                                </h3>
                            </>
                        ) : (
                            <>
                                <h3 className="font-body text-3xl flex justify-center mt-1 mb-8">
                                    Reveal the Cards, Sage.
                                </h3>
                            </>
                        )}
                    </div>
                </div>
                {/*Cards to be flipped*/}
                <div>
                    <>
                        {SpreadComponent ? (
                            <SpreadComponent cards={journal.entry_cards} />
                        ) : (
                            <p>Unknown spread layout.</p>
                        )}
                    </>
                </div>
               {/*Initial Seed Capture*/}
<div className="flex flex-col items-center justify-center mt-10 space-y-6">
    <div>
        <h3 className="text-2xl font-body text-center text-[#EFE5CB]">
            Plant a seed of insight to nurture later...
        </h3>
    </div>
    <form className="w-full flex justify-center">
        <Input
            id="seed"
            refEl={seed}
            type="text"
            label=""
            placeholder="You don't have to say much -- just enough to remember the moment."
            addlClass="w-3/4 text-lg p-3"
        />
    </form>
    {/*Buttons*/}
    <div className="flex flex-row justify-center gap-6 m-4 pb-4">
        <button
            onClick={() => updateSeedOnJournal()}
            className="bg-goldenbrown hover:bg-emerald-900 text-[#EFE5CB]  font-display font-bold py-2 px-6 rounded-full text-lg"
        >
            Save Insight
        </button>
        <button
            onClick={() => startJournal()}
            className="bg-goldenbrown hover:bg-emerald-900 text-[#EFE5CB] font-display font-bold py-2 px-6 rounded-full text-lg"
        >
            Tend to Your Roots
        </button>
    </div>
</div>
            </div>
        </>
    );
}

DailySeed.getLayout = function getLayout(page) {
    return (
        <Layout>
            <Navbar />
            {page}
        </Layout>
    );
};
