let getData = (apiLink) => {
    return new Promise((resolve, reject) =>{
        let dataReq = new XMLHttpRequest();
        dataReq.onload = function () {
            if (this.readyState === 4 && this.status === 200) {
                resolve(JSON.parse(this.response));
        } else {
                reject(Error("No data found"))
        }

    }
        dataReq.open("GET",apiLink);
        dataReq.send();
        
    })
}

getData( "../../JSON/task22.json").then((result)=>{
    result.length = 5;
    return result
}).then((out)=>{
    for (let i = 0; i < out.length; i++) {
    
        let div = document.createElement("div");
        div.className = `article num-${i}`;
    
        let heading = document.createElement("h3");
        heading.className = "heading";
        heading.innerHTML = `${out[i].title}`;
        div.appendChild(heading);
    
        let artBody = document.createElement("p");
        artBody.className = "article-body";
        artBody.innerHTML = `${out[i].description}`;
        div.appendChild(artBody);
    
        document.body.appendChild(div);
    
    }
}).catch((rej) => {
    return (rej)
})

async function fetchData() {
    try {
        let myData = await fetch("../../JSON/task22.json");
        let data = await myData.json();
        data.length = 5;
        for (let i = 0; i < data.length; i++) {
    
            let div = document.createElement("div");
            div.className = `article num-${i}`;
        
            let heading = document.createElement("h3");
            heading.className = "heading";
            heading.innerHTML = `${data[i].title}`;
            div.appendChild(heading);
        
            let artBody = document.createElement("p");
            artBody.className = "article-body";
            artBody.innerHTML = `${data[i].description}`;
            div.appendChild(artBody);
        
            document.body.appendChild(div);
        
        }
    } catch (error) {
        console.log("no data found")
    }
}
fetchData()



