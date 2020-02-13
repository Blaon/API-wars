fetch('https://swapi.co/api/planets/', {
    method: 'POST'
})
.then((response) => response.json())
.then((data)=> {
        header();
        // process(data);

});

function header() {
    let headers = ['Name', 'Diameter', 'Climate', 'Terrain', 'Surface Water Percentage', 'Population', 'Residents', 'Vote'];
    for (let header of headers){
        let header_name = document.createElement("div");
        header_name.textContent = header;
        header_name.style.fontWeight = 'bold';
        document.getElementById('stable').appendChild(header_name)
    }
}

function process(data) {
    let keys = ['name', 'diameter', 'climate', 'terrain', 'surface_water', 'population', 'residents.length', 'vote'];
    for (let planet of data.results) {
        for (let ertec of keys){
            if (ertec !== 'vote'){
                let new_row = document.createElement('div');
                new_row.textContent = data[ertec];
                document.getElementById('stable').appendChild(new_row)
            }
            else{
                let vote_button = document.createElement('button');

            }
        }

    }

}

