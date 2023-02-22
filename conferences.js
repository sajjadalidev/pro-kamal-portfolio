fetch("/conferences.json")
.then(responce => responce.json())
.then(data => {
    document.getElementById("conferences").innerHTML = ""
    for (let index = 0; index < 10; index++) {
        const obj= data[index]

        const html = 
        `<div class="card mt-4" style="width:18rem" class="text-light">
            <div class="card-body">
            <h4 class="card-title">${obj.conference_name}</h4>
            <p  class="card-text d-flex flex-column">
                <span><span class="fw-bold text-muted">Authors:</span>  ${obj.authors}.</span>
                <span class=""><span class="fw-bold text-muted">Year:</span>${obj.year} </span>
                </p>
            </div>
      </div>`
      console.log(obj.institute)
      


      document.getElementById("conferences").innerHTML +=  html
    }



})