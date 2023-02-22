fetch("/journals.json")
.then(responce => responce.json())
.then(data => {
    document.getElementById("journals").innerHTML = ""
    for (let index = 1; index < 10; index++) {
        const obj= data[index]
        console.log(obj)

        const html = 
        `<div class="card mt-4" style="width:18rem" class="text-light">
        <a class="text-decoration-none" style="color:white;"  href="https://doi.org/${obj.doi}">
            <img src="./images/${index}.png" class="card-img-top" alt="...">
            <div class="card-body">
            <h4 class="card-title">${obj.title}</h4>
            <p class="card-text d-flex flex-column">
                <span><span class="fw-bold text-muted">Authors:</span>  ${obj.authors}.</span>
                <span><span class="fw-bold text-muted">Journal:</span> ${obj.journal}.</span>
                <span class=""><span class="fw-bold text-muted">Year:</span>${obj.year} </span>
                <span class=""><span class="fw-bold text-muted">DOI:</span> ${obj.doi} </span>

                </p>
            </div>
        </a>
      </div>`

      document.getElementById("journals").innerHTML +=  html
    }



})