export default function JournalCard({ journal }) {
    return (
        <div className="w-2/3 max-w-3xl mx-auto my-4 bg-[#2D2417]/70 border border-[#E6C997]/30 rounded-2xl px-8 py-4 shadow-md text-[#F5F1E8]">
            <div className="grid grid-cols-[140px_1fr] gap-6 items-start">
                {/* Column 1: Spread Name */}
                <div className="text-base font-display font-semibold text-[#EFE5CB]">
                    {journal.spread.name}
                </div>

                {/* Column 2: Title + Details */}
                <div className="flex flex-col gap-2">
                    <div className="text-lg font-display font-semibold leading-snug text-[#EFE5CB]">
                        {journal.title !== ''
                            ? journal.title
                            : 'Untitled Entry'}
                    </div>

                    <div className="grid grid-cols-[1fr_auto] gap-8 text-sm text-[#CBBFAF] font-body">
                        {/* Mood & Lunar Phase */}
                        <div className="flex flex-col gap-[2px] text-[#CBBFAF] ">
                            {journal.mood !== "0" && <div>{journal.mood }</div>}
                            {journal.lunar_phase !== "0" &&<div>{journal.lunar_phase}</div>}
                        </div>

                        {/* Date */}
                        <div className="flex items-start whitespace-nowrap text-[#EFE5CB]">
                            {new Date(journal.created_on).toLocaleDateString(
                                'en-US',
                                {
                                    month: 'long',
                                    day: 'numeric',
                                    year: 'numeric',
                                }
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
