document.addEventListener("DOMContentLoaded", async () => {
    var listItems = document.querySelectorAll(".action__list-item");
    listItems.forEach(async (listItem) => {
        let type = listItem.getAttribute("item-type");
        let url = listItem.getAttribute("item-url");
        // console.log(type, url);
        listItem.addEventListener("click", async () => {
            // console.log(type, url);
            if (type == "folder") {
                await fetch("/api/get_sub_data", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ url: url }), // Sending the specific identifier to the API
                });
            } else {
                console.log("Not supported!");
            }
        });
    });
});
