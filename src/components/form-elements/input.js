export function Input({
    id,
    type = 'text',
    placeholder = '',
    refEl = undefined,
    label = undefined,
    onChangeEvent,
    addlClass = 'w-2/3',
    children,
}) {
    return (
        <div className={`flex flex-col gap-1 mb-4 ${addlClass}`}>
            {label && (
                <label htmlFor={id} className="font-body text-2xl">
                    {label}
                </label>
            )}
            <input
                id={id}
                type={type}
                ref={refEl}
                onChange={onChangeEvent}
                placeholder={placeholder}
                className="bg-[#241A14] text-[#EFE5CB] placeholder-[#B7C6A1] font-body text-lg border border-[#DDBE8B] rounded-xl px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-goldenbrown"
            />
            {children}
        </div>
    );
}