// Hàm cập nhật khi chuột di chuyển qua hình ảnh
function upDate(previewPic) {
    const imageDiv = document.getElementById("image");
    imageDiv.style.backgroundImage = `url('${previewPic.src}')`;
    imageDiv.textContent = previewPic.alt;
    console.log("Mouse over:", previewPic.alt);
}

// Hàm hoàn tác khi chuột rời khỏi hình ảnh
function undo() {
    const imageDiv = document.getElementById("image");
    imageDiv.style.backgroundImage = "url('')";
    imageDiv.textContent = "Hover over an image below to display here.";
    console.log("Mouse left image.");
}

// Hàm xử lý sự kiện focus
function focusHandler(previewPic) {
    const imageDiv = document.getElementById("image");
    imageDiv.style.backgroundImage = `url('${previewPic.src}')`;
    imageDiv.textContent = previewPic.alt;
    console.log("Focus on:", previewPic.alt);
}

// Hàm xử lý sự kiện blur
function blurHandler() {
    const imageDiv = document.getElementById("image");
    imageDiv.style.backgroundImage = "url('')";
    imageDiv.textContent = "Hover over an image below to display here.";
    console.log("Blur triggered.");
}

// Hàm thêm thuộc tính tabindex
function addTabindex() {
    const figures = document.querySelectorAll("#gallery figure");
    figures.forEach((figure, index) => {
        figure.setAttribute("tabindex", index + 1);
        console.log(`Tabindex added to figure ${index + 1}`);
    });
}

// Hàm kích hoạt khi trang tải xong
function pageLoad() {
    console.log("Page loaded. Adding tabindex...");
    addTabindex();
}

// Gán sự kiện cho từng hình ảnh
const figures = document.querySelectorAll("#gallery figure img");
figures.forEach((figure) => {
    figure.addEventListener("mouseover", () => upDate(figure));
    figure.addEventListener("mouseout", undo);
    figure.addEventListener("focus", () => focusHandler(figure));
    figure.addEventListener("blur", blurHandler);
});

// Thêm sự kiện onload
window.onload = pageLoad;
