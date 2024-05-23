async function fetchModel(url) {
    const reponse = await fetch("http://localhost:8000/users/57231f1a30e4351f4e9f4bda");
    const data = await reponse.json();

    return data;
}

const info = fetchModel("hi").then(data => {
    console.log(data); // Log the fetched data as an object
});