function HideShowPopUp(){
    var popup = document.getElementById("popup");
    if(popup.style.display === "none"){
        popup.style.display = "flex";
    }else{
        popup.style.display = "none";
    }
}

function VerifyDate(){
    var date = document.getElementById("block_date").value;
    var dateInput = new Date(date);
    var currentDate = new Date();
    if(dateInput > currentDate || dateInput == "Invalid Date"){
        alert("Please select a valid date");
        return false;
    }
    return true;
}

function clearBlockDate(username){
    // send the username to the server
    setRequestHeader();
    $.ajax({
        dataType: 'json',
        type: 'POST',
        url: "/clear_block_date",
        data: {
            username: username
        },
        success: function(data){
            alert(data.status);
            location.reload();
        },
        error: function(error){
            alert("Error: " + error);
        }
    });
}