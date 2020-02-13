window.onload=function() {
fetch('https://swapi.co/api/planets/')
    .then((response) => response.json())
    .then((table_content)=> {
        console.log(table_content)
    })

};