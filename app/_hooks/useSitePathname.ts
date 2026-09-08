'use client';

import { usePathname } from 'next/navigation';

/**
 * Custom hook that returns the pathname without the website prefix.
 * Example: /kap-medical/about -> /about
 */
export const useSitePathname = () => {
    const pathnameRaw = usePathname();
    
    // Remove the first segment after the first slash (site name)
    const pathname = '/' + (pathnameRaw?.split('/').filter(Boolean).slice(1).join('/') || '');
    
    return pathname;
};
