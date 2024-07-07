import React, { useState } from 'react';

const CommentInput = ({ label, placeholder, maxLength, className }) => {
    const [isFocused, setIsFocused] = useState(false);

    return (
        <div className={className}>
            <label className="block font-bold mb-2">{label}</label>
            <textarea
                
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
