import React, { useState } from 'react';

const CommentInput = ({ value, label, placeholder, maxLength, className, onChange}) => {
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
                rows="4" 
            />
        </div>
    );
};

export default CommentInput;
