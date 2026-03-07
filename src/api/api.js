let data = fetch('/data/data.json').then(res => res.json());

export function getLocations() {
    return data
}

export function getLocation(id) {
    return data.then(val => val.find(place => place.id === id));
}
