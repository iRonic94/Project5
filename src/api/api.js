export function getLocations() {
    return fetch('/data/data.json').then(res => res.json());
}

export function getLocation(id) {
    let data = fetch('/data/data.json').then(res => res.json());
    return data.then(val => val.find(place => place.id === id));
}
