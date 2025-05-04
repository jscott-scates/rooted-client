
export default function JournalCard ({journal}) {
    console.log(journal)

    return <>
        <card>
            <div>
                {/*Spread Information */}
                <div>
                    {journal.spread.name}
                </div>
            </div>
            <div>
                {/* Journal Entry Information */}
                <div>
                    {journal.title !== "" 
                    ? journal.title 
                    : `Untitled Entry`}
                </div>
                <div>
                    {/*Choice Selections Column */}
                    <div>
                        <div>
                            {journal.mood}
                        </div>
                        <div>
                            {journal.lunar_phase}
                        </div>
                    </div>
                    <div>
                        {journal.created_on}
                    </div>
                </div>
            </div>
        </card>
    </>
}