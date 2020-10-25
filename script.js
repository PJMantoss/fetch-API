document.getElementById("fetchForm").addEventListener("submit", submitPost);

async function submitPost(e){
    e.preventDefault();

    let title = document.getElementById("titleInput").value;
    let body = document.getElementById("bodyInput").value
}