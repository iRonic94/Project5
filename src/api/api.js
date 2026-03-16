export function getLocations() {
    return fetch('/data/data.json').then(res => res.json());
}

export function getLocation(id) {
    let data = fetch('/data/data.json').then(res => res.json());
    return data.then(val => {
        const location = val.find(place => place.id === id);
        if (!location) {
            throw new Error("We didn't find the location!");
        }
        return location;
    });
}
