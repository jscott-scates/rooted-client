import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import { Input } from '../../components/form-elements/input';
import Layout from '../../components/layout';
import Navbar from '../../components/navbar';
import { useAppContext } from '../../context/state';
import { getAllJournals } from '@/data/journal';
import JournalCard from '@/components/journalCard';

export default function Journals() {
    const [journalList, setJournalList] = useState([]);

    useEffect(() => {
        getAllJournals().then((journalsData) => {
            setJournalList(journalsData);
        });
    }, []);

    console.log(journalList);

    return (
        <>
            <div className="flex justify-center ">
                <h1 className="font-display text-6xl mt-6 mb-4">Reflections</h1>
            </div>
            <div className="grid grid-cols-3 gap-3 mt-4">
                {/*Journal Entries */}
                <div className="col-span-2">
                    {journalList.map((journal) => (
                        <Link href={`/journals/${journal.id}`} key={journal.id}>
                            <JournalCard journal={journal} />
                        </Link>
                    ))}
                </div>
                {/* Filter Bar */}
                <div className="col-span-1">Filter Bar HERE</div>
            </div>
        </>
    );
}

Journals.getLayout = function getLayout(page) {
    return (
        <Layout>
            <Navbar />
            {page}
        </Layout>
    );
};
