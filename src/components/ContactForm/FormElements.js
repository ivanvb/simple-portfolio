import React from 'react';
import classNames from 'classnames';

export const Input = ({ label, type = 'text', name, id, className, required }) => {
    return (
        <div className={classNames(className, 'w-full text-left')}>
            <label htmlFor={id} className="inline-block mb-1">
                {label}
            </label>
            <input
                name={name}
                id={id}
                type={type}
                required={required}
                className="w-full border border-primary-text rounded-sm text-black px-3 py-2 focus:outline-none focus-visible:ring ring-primary-accent ring-opacity-60"
            />
        </div>
    );
};

export const Textarea = ({ label, name, id, className, required }) => {
    return (
        <div className={classNames(className, 'w-full text-left')}>
            <label htmlFor={id} className="inline-block mb-1">
                {label}
            </label>
            <textarea
                name={name}
                id={id}
                required={required}
                rows={8}
                className="w-full border border-primary-text border-opacity-50 rounded-sm text-black px-3 py-2 focus:outline-none focus-visible:ring ring-primary-accent ring-opacity-60"
            ></textarea>
        </div>
    );
};
