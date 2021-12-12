const layersOrder = [
    { name: 'background', number: 1 },
    { name: 'ball', number: 3 },
    { name: 'eye color', number: 6 },
    { name: 'iris', number: 6 },
    { name: 'bottom lid', number: 6 },
    { name: 'top lid', number: 6 },
];

const format = {
    width: 1000,
    height: 1000
};

const rarity = [
    { key: "", val: "original" },
    { key: "_r", val: "rare" },
    { key: "_sr", val: "super rare" },
];

const defaultEdition = 1000;

module.exports = { layersOrder, format, rarity, defaultEdition };