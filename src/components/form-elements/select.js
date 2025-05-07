export function Select({ id, refEl, defaultValue, options, title, label, addlClass = '' }) {
    return (
        <div className={`flex flex-col gap-1 mb-4 ${addlClass}`}>
            {label && (
                <label htmlFor={id} className="font-body text-2xl">
                    {label}
                </label>
            )}
            <select
                id={id}
                ref={refEl}
                defaultValue={defaultValue}
                className="bg-[#241A14] text-[#EFE5CB] font-body text-lg border border-[#DDBE8B] rounded-xl px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-goldenbrown"
            >
                <option value="0" className="text-[#B7C6A1]">{title}</option>
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
}
