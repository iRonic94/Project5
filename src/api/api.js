let data = [];
fetch('/data/data.json').then(res => res.json()).then(val => data = val);

export function getLocations() {
    return data;
}

export function getLocation(id) {
    const detail = data.find(place => place.id === id);
    return detail;
}

console.log(data);
