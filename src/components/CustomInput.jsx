import React, { useState, useRef, ClipboardEvent } from 'react';

export const CommentInput = ({ value, label, placeholder, maxLength, className, onChange, rows = 4 }) => {
    const [isFocused, setIsFocused] = useState(false);

    return (
        <div className={className}>
            <label className="block font-bold mb-2">{label}</label>
            <textarea
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                maxLength={maxLength}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                className={`w-full p-2 bg-cach-l1 border rounded ${isFocused ? 'border-blue-400 shadow-outline' : 'border-gray-300'
                    }`}
                rows={rows}
            />
        </div>
    );
};

export const SecurityCodeInput = ({value, setChange}) => {
    //const [code, setCode] = useState('');
    const inputRef = useRef(null);

    const handleChange = (e) => {
        const value = e.target.value.replace(/\D/g, '').slice(0, 4)
        setChange(value)
    }

    const handlePaste = (e) => {
        e.preventDefault()
        const pastedData = e.clipboardData.getData('text').replace(/\D/g, '').slice(0, 4)
        setChange(pastedData)
    }

    const handleFocus = () => {
        if (inputRef.current) {
            inputRef.current.focus()
        }
    }

    return (
        <div className="w-full my-4" onClick={handleFocus}>
            <input
                ref={inputRef}
                type="text"
                inputMode="numeric"
                value={value}
                onChange={handleChange}
                onPaste={handlePaste}
                className="sr-only"
                aria-label="Código de seguridad de 4 dígitos"
            />
            <div className="flex justify-between">
                {[0, 1, 2, 3].map((index) => (
                    <div
                        key={index}
                        className={`w-14 h-14 border-2 rounded-xl flex items-center justify-center dark:text-cach-l1 text-2xl font-bold ${value[index] ? 'border-cach-l3' : 'border-cach-l2 cursor-text'
                            }`}
                    >
                        {value[index] || ''}
                    </div>
                ))}
            </div>
        </div>
    )
}

