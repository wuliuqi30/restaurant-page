
function deleteContent() {
    const contentDOM = document.getElementById("content")
    let child = contentDOM.lastElementChild;
    while (child) {
        contentDOM.removeChild(child);
        child = contentDOM.lastElementChild;
    }
}

export {deleteContent};