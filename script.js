document.getElementById('emissionsForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get input values
    const milesDriven = parseFloat(document.getElementById('milesDriven').value);
    const numVehicles = parseFloat(document.getElementById('numVehicles').value);
    const electricityUsage = parseFloat(document.getElementById('electricityUsage').value);
    const naturalGasUsage = parseFloat(document.getElementById('naturalGasUsage').value);
    const plantFactor = parseFloat(document.getElementById('plantFactor').value);
    const wasteWater = parseFloat(document.getElementById('wasteWater').value);

    // Constants for calculations
    const CO2_PER_MILE = 0.404; // kg CO2 per mile driven
    const CO2_PER_KWH = plantFactor; // kg CO2 per kWh
    const CO2_PER_THERM = 5.3; // kg CO2 per therm of natural gas
    const CO2_PER_GALLON_WASTE = 0.0007; // kg CO2 per gallon of wastewater

    // Calculate emissions
    const transportationEmissions = milesDriven * numVehicles * CO2_PER_MILE * 52; // Annual emissions
    const electricityEmissions = electricityUsage * CO2_PER_KWH; // Monthly emissions
    const naturalGasEmissions = naturalGasUsage * CO2_PER_THERM; // Monthly emissions
    const wastewaterEmissions = wasteWater * CO2_PER_GALLON_WASTE; // Monthly emissions

    // Total emissions
    const totalEmissions = transportationEmissions + electricityEmissions + naturalGasEmissions + wastewaterEmissions;

    // Store emissions data in localStorage
    const emissionsData = {
        totalEmissions,
        transportationEmissions,
        electricityEmissions,
        naturalGasEmissions,
        wastewaterEmissions
    };
    localStorage.setItem('emissionsData', JSON.stringify(emissionsData));

    // Open new tab with emissions details
    window.open('emissions-details.html', '_blank');
});