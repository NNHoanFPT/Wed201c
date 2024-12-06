// Hàm cập nhật khi chuột di chuyển qua hình ảnh
function upDate(previewPic) {
    // Kiểm tra sự kiện kích hoạt
    console.log("Mouse over image:", previewPic);

    // Lấy phần tử div có id "image"
    const imageDiv = document.getElementById("image");

    // Cập nhật hình nền bằng thuộc tính src của ảnh
    imageDiv.style.backgroundImage = `url('${previewPic.src}')`;

    // Cập nhật văn bản bằng thuộc tính alt của ảnh
    imageDiv.textContent = previewPic.alt;

    // Log thông tin để kiểm tra
    console.log("Background updated to:", previewPic.src);
    console.log("Text updated to:", previewPic.alt);
}

// Hàm hoàn tác khi chuột rời khỏi hình ảnh
function undo() {
    // Lấy phần tử div có id "image"
    const imageDiv = document.getElementById("image");

    // Đặt lại hình nền và văn bản về giá trị mặc định
    imageDiv.style.backgroundImage = "url('')";
    imageDiv.textContent = "Hover over an image below to display here.";

    // Log để kiểm tra
    console.log("Undo action triggered. Reset to default.");
}

// Thêm sự kiện cho từng ảnh
const previews = document.querySelectorAll(".preview");
previews.forEach((preview) => {
    preview.addEventListener("mouseover", () => upDate(preview));
    preview.addEventListener("mouseout", undo);
});
