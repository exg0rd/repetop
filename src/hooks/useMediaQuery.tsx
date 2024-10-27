import { useEffect, useState } from 'react';

const useMediaQuery = (query: string) => {
    const [matches, setMatches] = useState<boolean>(false);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const mediaQueryList = window.matchMedia(query);
            const handleChange = (event: MediaQueryListEvent) => setMatches(event.matches);

            setMatches(mediaQueryList.matches);

            mediaQueryList.addEventListener('change', handleChange);

            return () => {
                mediaQueryList.removeEventListener('change', handleChange);
            };
        }
    }, [query]);

    return matches;
};

export default useMediaQuery;
