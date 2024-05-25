function forwardData(e) {
        var message = e.id;
 
        if (message == "1" || message == "4" || message == "5") {
            localStorage.setItem("id", message);
        } else if (message == "2") {
            var username = prompt("Enter new username");
            if (username != "" && username != undefined && username != null) {
                localStorage.setItem("id", message);
                localStorage.setItem("username", username);
            } else {
                return;
            }
        } else if (message == "3") {
            var rank = prompt("Enter unique rank name");
            if (rank != "" && rank != undefined && rank != null) {
                localStorage.setItem("id", message);
                localStorage.setItem("rank", rank);
            } else {
                return;
            }
        }
 
        // Redirect to the receiver page
        window.location.href = "https://sacremonde.forumactif.fr/post?t=282&mode=reply";
}
