document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("toggle-btn");
    const block = document.getElementById("task-block");
    if (!btn || !block) return;

    btn.addEventListener("click", () => {
        block.style.display = block.style.display === "none" ? "block" : "none";
        btn.textContent = block.style.display === "none" ? "Показать задание" : "Скрыть задание";
    });
});
