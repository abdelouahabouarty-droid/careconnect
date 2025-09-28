import React from 'react';

interface LogoProps {
    care: string;
    connect: string;
}

export const Logo: React.FC<LogoProps> = ({ care, connect }) => (
    <a href="#home" className="flex items-center gap-2" aria-label="CareConnect Homepage">
        <div className="w-12 h-auto">
            <svg viewBox="0 0 100 75" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Arches */}
                <path d="M95 70C95 36.8629 74.8629 10 45 10" stroke="#40C0B4" strokeWidth="10" strokeLinecap="round"/>
                <path d="M82.5 70C82.5 43.2335 66.2665 20 45 20" stroke="#006A4E" strokeWidth="10" strokeLinecap="round"/>
                
                {/* Icon */}
                <path fillRule="evenodd" clipRule="evenodd" d="M38.5 23C35.46 23 33 25.46 33 28.5C33 31.54 35.46 34 38.5 34C41.54 34 44 31.54 44 28.5C44 25.46 41.54 23 38.5 23ZM42 35.5L35 35.5V57L29 70H35L38.5 60L42 70H48L42 57V35.5ZM40 42L52 54H61V51H53L42 40L40 42ZM63 43C60.24 43 58 45.24 58 48C58 50.76 60.24 53 63 53C65.76 53 68 50.76 68 48C68 45.24 65.76 43 63 43ZM53 55H61L58 66L51 70L49 67L55 63V55H53ZM59 66L72 70L74 63L62 60L59 66Z" fill="#111827" />
            </svg>
        </div>
        <span className="text-2xl font-extrabold tracking-wide uppercase" style={{fontFamily: "'Cairo', sans-serif"}}>
            <span className="text-primary-700">{care}</span>
            <span className="text-secondary-500">{connect}</span>
        </span>
    </a>
);