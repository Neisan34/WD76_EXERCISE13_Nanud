  function convert(action) {
      const fromUnit = document.getElementById("fromUnit").value;
      const toUnit = document.getElementById("toUnit").value;
      const inputValue = parseFloat(document.getElementById("value").value);

      if (isNaN(inputValue)) {
        document.getElementById("result").textContent = "Invalid input";
        return;
      }

      let result;

      if (action === "to") {
        result = lengthConverter(inputValue, fromUnit, toUnit);
      } else {
        result = lengthConverter(inputValue, toUnit, fromUnit);
      }

      document.getElementById("result").textContent = result;
    }

    function lengthConverter(value, fromUnit, toUnit) {
      const units = {
        m: 1,
        cm: 0.01,
        km: 1000,
        in: 0.0254,
        ft: 0.3048,
        yd: 0.9144,
        mi: 1609.34
      };

      const convertedValue = value * units[fromUnit] / units[toUnit];
      return convertedValue.toFixed(2);
    }
// Custom dropdown functionality
const customDropdowns = document.querySelectorAll('.custom-dropdown');

customDropdowns.forEach((dropdown) => {
  const label = dropdown.querySelector('.dropdown-label');
  const options = dropdown.querySelector('.dropdown-options');

  label.addEventListener('click', () => {
    dropdown.classList.toggle('open');
  });

  options.addEventListener('click', (event) => {
    const selectedValue = event.target.getAttribute('data-value');
    label.textContent = event.target.textContent;
    dropdown.classList.remove('open');
  });
});
