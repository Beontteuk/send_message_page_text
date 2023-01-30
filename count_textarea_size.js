const count_textarea_size = (textarea) => {
    const text_size = document.getElementById("text_size");
    text_size.innerText = `${textarea.value.length}/200`
}