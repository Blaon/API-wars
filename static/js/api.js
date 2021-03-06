fetch('https://swapi.co/api/planets/')
.then((response) => response.json())
.then((data)=> {
    header();
    process(data);
    console.log(data);

});

function formatNumber(num) {
  return num.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}




function header() {
    let headers = ['Name', 'Diameter', 'Climate', 'Terrain', 'Surface Water Percentage', 'Population', 'Residents', 'Vote'];
    for (let header of headers){
        let header_name = document.createElement("div");
        header_name.textContent = header;
        header_name.style.fontWeight = 'bold';
        header_name.id = 'stable_div';
        document.getElementById('stable').appendChild(header_name)
    }
}

function process(data) {
    let keys = ['name', 'diameter', 'climate', 'terrain', 'surface_water', 'population', 'residents', 'vote'];
    for (let planet of data.results) {
        for (let key of keys) {
            if (key !== 'vote' && key !== 'residents' && key !== 'diameter' && key !=='surface_water') {
                let new_row = document.createElement('div');
                new_row.textContent = formatNumber(planet[key]);
                new_row.id = 'stable_div';
                document.getElementById('stable').appendChild(new_row)
            }
            else if (key === 'surface_water') {
                let surface_water = document.createElement('div');
                surface_water.textContent = `${formatNumber(planet[key])} %`;
                surface_water.id = 'stable_div';
                document.getElementById('stable').appendChild(surface_water)
            }
            else if (key === 'diameter') {
                let surface_water = document.createElement('div');
                surface_water.textContent = `${formatNumber(planet[key])} km`;
                surface_water.id = 'stable_div';
                document.getElementById('stable').appendChild(surface_water)
            }
            else if (key === 'residents') {
                if (planet[key].length < 1) {
                    let resident = document.createElement('div');
                    resident.textContent = 'no known residents';
                    resident.id = 'stable_div';
                    document.getElementById('stable').appendChild(resident)
                } else {
                    let resident = document.createElement('button');
                    resident.textContent = `${planet[key].length} resident(s)`;
                    resident.id = 'stable_buttons';
                    document.getElementById('stable').appendChild(resident)
                }
            }
            else {
                let vote_button = document.createElement('button');
                vote_button.textContent = 'VOTE';
                vote_button.id = 'stable_buttons';
                document.getElementById('stable').appendChild(vote_button)

            }
        }

    }

}

