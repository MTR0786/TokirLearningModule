


fetch("https://690098efff8d792314baa179.mockapi.io/job/jobs")
    .then((res) => (res.json()))
    .then((data) => (displaycard(data)))
    .catch((err) => (console.log(err)))



// apiurl = "https://690098efff8d792314baa179.mockapi.io/job/jobs"
// async function fetchjobs() {
//     try {
//       let res = await fetch(apiurl);
//       let data = res.json();
//       displaycard(data);

//     } catch (error) {
//       console.log(error)
//     }
// }

// fetchjobs()

function displaycard(data) {
    // console.log(data);
    data.map(function (elm) {
        document.querySelector(".job-card").innerHTML += `
            
    <div class="job-card-header">
    <div class="company-info">
      <div class="company-logo">M</div>
      <div>
        <div class="company-name">${elm.company_name}</div>
        <div class="job-meta">
          <span class="country">${elm.country}</span>
          <span class="openings">${elm.openings}</span>
        </div>
      </div>
    </div>

    <div class="job-actions">
      <div class="salary">${elm.salary}</div>
      <button class="apply-btn">Apply</button>
    </div>
  </div>

  <div class="job-body">
    <div class="job-title">${elm.job}</div>
    <div class="job-description">${elm.job_description}</div>
  </div>

  <div class="job-footer">
    <small class="job-id">JOb ID ${elm.id}</small>
  </div>
            `
        })
}

// displaycard(data)




// async function  fetchtools() {
//     try {
//         let res = await fetch("https://690098efff8d792314baa179.mockapi.io/job/jobs")
//         let data = await res.json()
//         console.log(data)
//         // displaydata(data)
        
//     }
//     catch (error) {
//       console.log(err)  
//     }
    
// }
// fetchtools()

// {
//     "id": 1,
//     "company_name": "Meta",
//     "job": "Backend Developer",
//     "salary": "186775",
//     "country": "USA",
//     "openings": 11,
//     "job_description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
//   },