const cache = new Map<string, any>();
const promises = new Map<string, Promise<any>>();

export function useFetch<T>(url: string): { result: T } {
    if (!url) {
        throw new Error("URL is required");
    }

    if (cache.has(url)) {
        return { result: cache.get(url) as T };
    }

    if (promises.has(url)) {
        throw promises.get(url);
    }

    const fetchPromise = fetch(url)
        .then((res) => {
            if (!res.ok) {
                throw new Error(`Request failed with status ${res.status}`);
            }
            return res.json();
        })
        .then((data) => {
            cache.set(url, data);
            promises.delete(url);
        });

    promises.set(url, fetchPromise);
    throw fetchPromise;
}