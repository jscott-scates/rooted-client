import { useEffect, useRef, useState } from 'react';
import { getChoices, getSpreads } from '@/data/journal';
import { Select } from './form-elements/select';
import { Input } from './form-elements/input';

export default function Filter({ onSearch, setSearching }) {
    const refEls = {
        name: useRef(),
        spread: useRef(),
        mood: useRef(),
        lunarPhase: useRef(),
    };

    const [showFilters, setShowFilters] = useState(false);
    const [query, setQuery] = useState('');
    const [spreads, setSpreads] = useState([]);
    const [moodList, setMoods] = useState([]);
    const [lunarPhasesList, setLunarPhases] = useState([]);

    const clearFilter = () => {
        for (let ref in refEls) {
            if (refEls[ref]?.current) {
                refEls[ref].current.value = ['name'].includes(ref) ? '' : 0;
            }
        }
        onSearch('');
        setQuery('');
    };

    useEffect(() => {
        if (query) {
            onSearch(query);
            setSearching(true);
        } else {
            setSearching(false);
        }
    }, [query]);

    useEffect(() => {
        getChoices().then((choiceData) => {
            console.log(choiceData);
            setMoods(choiceData.moods);
            setLunarPhases(choiceData.lunar_phases);
        });
        getSpreads().then((spreadsData) => {
            setSpreads(
                spreadsData.map((spread) => ({
                    label: spread.name,
                    value: spread.id, // stored in DB as an FK
                }))
            );
        });
    }, []);

    const buildQuery = (key, value) => {
        if (value && value !== '0') {
            return `${key}=${value}&`;
        }
        return '';
    };

    const filter = () => {
        let newQuery = '';
        for (let refEl in refEls) {
            newQuery += buildQuery(refEl, refEls[refEl].current?.value);
        }
        setQuery(newQuery);
    };

    console.log(spreads);
    return (
        <>
            <div>
                <div className="mt-6">
                    <Input
                        placeholder="Search By Journal Title"
                        id="name"
                        refEl={refEls.name}
                        addlClass="w-2/3"
                    />
                </div>
                <div>
                    <Select
                        refEl={refEls.spread}
                        options={spreads}
                        title="Filter by Spread"
                        addlClass="w-2/3"
                    />
                </div>
                <div>
                    <Select
                        refEl={refEls.mood}
                        options={moodList}
                        title="Filter by Mood"
                        addlClass="w-2/3"
                    />
                </div>
                <div>
                    <Select
                        refEl={refEls.lunarPhase}
                        options={lunarPhasesList}
                        title="Filter by Lunar Phase"
                        addlClass="w-2/3"
                    />
                </div>
                <div className="flex flex-row">
                    <div className="pr-4">
                        <button
                            className="sm:w-auto py-0.5 px-2 bg-goldenbrown text-[#EFE5CB] font-body text-xs rounded-full shadow border border-[#EFE5CB] hover:bg-[#414831] transition"
                            onClick={filter}
                        >
                            Filter
                        </button>
                    </div>
                    <div>
                        <button
                            className="sm:w-auto py-0.5 px-2 bg-goldenbrown text-[#EFE5CB] font-body text-xs rounded-full shadow border border-[#EFE5CB] hover:bg-[#414831] transition"
                            onClick={clearFilter}
                        >
                            Clear
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

//Filter Bar should contain search options by:
//date range add in v2
