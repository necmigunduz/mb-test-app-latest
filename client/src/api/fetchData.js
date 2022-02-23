const fetcData = async() => {
    let dataFetched = [];
    await fetch('http://localhost:8080/api/products', {
        method: 'GET',
        mode: 'cors'
    })
        .then(response => response.json())
        .then(data => {
            //console.log(data);
            dataFetched = data;
        } )
        .catch(error => {
            console.log(error);
            dataFetched = error;
        })
    return dataFetched;
}

export default fetcData;