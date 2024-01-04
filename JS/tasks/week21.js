// Needed Output
let myRequest = new XMLHttpRequest();
myRequest.open("GET","../../JSON/task21.json");

myRequest.send();
myRequest.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
        console.log(this.responseText);
        let mainData = JSON.parse(this.responseText);
        for (let i = 0; i < mainData.length; i++) {
            mainData[i].category = "All"
        }
        console.log(mainData);
        let updatedData = JSON.stringify(mainData)
        console.log(updatedData);
    }
};
myRequest.onloadend = function () {
    console.log("Data Loaded");
};
console.log(myRequest);

let dataReq = new XMLHttpRequest();
dataReq.open("GET", "../../JSON/task21.json");
dataReq.send();
dataReq.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
        let jsData = JSON.parse(this.responseText);
        let mainHolder = document.createElement("div");
        mainHolder.id = "data";
        for (let i = 0; i < jsData.length; i++) {
            let div = document.createElement("div");
            div.className = `article num-${i}`;

            let heading = document.createElement("h2");
            heading.className = "heading";
            heading.innerHTML = `${jsData[i].title}`;
            div.appendChild(heading);

            let artBody = document.createElement("p");
            artBody.className = "article-body";
            artBody.innerHTML = `${jsData[i].body}`;
            div.appendChild(artBody);

            let artAuthor = document.createElement("p");
            artAuthor.className = "author";
            artAuthor.innerHTML = `${jsData[i].author}`;
            div.appendChild(artAuthor);

            let artCat = document.createElement("p");
            artCat.className = "category";
            artCat.innerHTML = `${jsData[i].category}`;
            div.appendChild(artCat);

            mainHolder.appendChild(div);
            mainHolder.appendChild(document.createElement("hr"));
        }
        document.body.appendChild(mainHolder);
    }
};
"JSON Object Content Here"
"Data Loaded"