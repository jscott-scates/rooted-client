import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import { Input } from '../../components/form-elements/input';
import Layout from '../../components/layout';
import Navbar from '../../components/navbar';
import { useAppContext } from '../../context/state';
import { getAllJournals } from '@/data/journal';
import JournalCard from '@/components/journalCard';
import Filter from '@/components/filter';

export default function Journals() {
    const [journalList, setJournalList] = useState([]);
    const [filteredJournalList, setFilteredJournalList] = useState([])
    const [searching, setSearching] = useState(false)

    useEffect(() => {
        getAllJournals().then((journalsData) => {
            setJournalList(journalsData);
            setSearching(false)
        });
    }, []);

    const searchOfJournals = (event) => {
        getAllJournals(event).then(journalsData => {
            if(journalsData){
                setFilteredJournalList(journalsData)
            }
        })
    }

    return (
        <>
            <div className="flex justify-center ">
                <h1 className="font-display text-6xl mt-6 mb-4">Reflections</h1>
            </div>

            <div className="grid grid-cols-3 gap-3 mt-4">
                {searching ? (
                   //Journal Entries
                   <>
                   <div className="col-span-2">
                   {filteredJournalList.map((journal) => (
                       <Link href={`/journals/${journal.id}`} key={journal.id}>
                           <JournalCard journal={journal} />
                       </Link>
                   ))}
               </div>
               </>
                ): ( //Journal Entries
                    <div className="col-span-2">
                        {journalList.map((journal) => (
                            <Link href={`/journals/${journal.id}`} key={journal.id}>
                                <JournalCard journal={journal} />
                            </Link>
                        ))}
                    </div>)}

                {/* Filter Bar */}
                <Filter onSearch={searchOfJournals} setSearching={setSearching} />
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
