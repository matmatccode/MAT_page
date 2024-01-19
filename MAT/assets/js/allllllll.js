let tbody = document.querySelector(".tbody");

let search = document.querySelector(".search");
let datar = JSON.parse(localStorage.getItem("Users-information")) || [];

function drawTable(data) {
//   tbody.innerHTML = " ";
  data.forEach((element) => {
    let trElemnt = document.createElement("tr");

    trElemnt.innerHTML = `
                      <td>${element.id}</td> 
                     <td>${element.userName} </td> 
                     <td>${element.email}</td> 
                     <td>${element.fin}</td> 
                     <td>${element.id}</td> 
                     <td>${element.percent}</td> `;

    tbody.append(trElemnt);
  });
}

drawTable(datar);

search.addEventListener("input", function (event) {
  let filtered = users.filter((item) =>
    `${item.first_name} ${item.last_name} `
      .toLocaleLowerCase()
      .includes(event.target.value)
  );

  drawTable(filtered);
});
