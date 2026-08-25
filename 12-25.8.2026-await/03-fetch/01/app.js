async function fetchData() {
    try {
    const resposne = await fetch("https://jsonplaceholder.typicode.com/posts111");
    let data = await resposne.json();
    console.log(data);
    console.log(data[0]);
    console.log(data[0].title);
    console.log(data[0].body);
    console.log(data[0].userId);
    console.log(data[0].id);
    console.log(data[0].id);

    document.getElementById("title").innerHTML = data[0].title;
    document.getElementById("body").innerHTML = data[0].body;
    document.getElementById("userId").innerHTML = data[0].userId;
    document.getElementById("id").innerHTML = data[0].id;
} catch (error) {
    console.log(error);
    document.getElementById("title").innerText = error;
}
}
fetchData()

console.log("Fetching data...");