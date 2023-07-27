const lengthUnits = {
    cm: 1,
    in: 2.54,
    ft: 30.48,
    m: 100,
    km: 100000,
    yd: 91.44,
    mi: 160934.4
};

function convertLength() {
    const inputValue = parseFloat(document.getElementById('inputValue').value);
    const fromUnit = document.getElementById('fromUnit').value;
    const toUnit = document.getElementById('toUnit').value;

    if (!isNaN(inputValue)) {
        const result = (inputValue * lengthUnits[fromUnit]) / lengthUnits[toUnit];
        document.getElementById('outputValue').value = result.toFixed(2);
    } else {
        document.getElementById('outputValue').value = '';
    }
}

function setUnits(fromUnit, toUnit) {
    document.getElementById('fromUnit').value = fromUnit;
    document.getElementById('toUnit').value = toUnit;
    convertLength();
}

document.getElementById('inputValue').addEventListener('input', convertLength);
document.getElementById('fromUnit').addEventListener('change', convertLength);
document.getElementById('toUnit').addEventListener('change', convertLength);
