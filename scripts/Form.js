const name = "";
const mobno = 0;
const password = ""

console.log("welcome")

const submit = () => {
    // console.log("Enter in Submit")

    // var firstname = document.getElementById('name').value

    // console.log("Name: ", firstname);


    const name = $('#name').val();
    console.log("name: ",name);

    const mobno = $('#mobNo').val();
    console.log("Mobile Number: ", mobno);

    const password = $('#password').val();
    console.log("Password: ", password);


    let senddata = {
        "name": name,
        "mobno": mobno,
        "password": password
      }



      $.ajax({
        type: "POST",
        url: "http://localhost:3000/employees",
        contentType: "application/json",
        data: JSON.stringify( senddata),

        success: function(data) {
            console.log("Data Added: ",data);
          alert("Data sent successfully!");
        },
        error: function() {
          alert("Error sending data!");
        }
      });
    }




$(document).ready(function() {
    fetchAllData();
})


function fetchAllData() {
    $.ajax({
        type: "GET",
        url: "http://localhost:3000/employees",
        contentType: "application/json",

        success: function(data) {
            console.log(data);
            let output = data.map(i => "<p>" +i.name+ "</p><p>" +i.mobno+ "</p>");
            $('#displaydata').html(output);
        },
        error: function() {
          alert("Error sending data!");
        }
      });

}