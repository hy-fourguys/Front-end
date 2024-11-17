const navItems = document.querySelectorAll('.navbar span');

for (let item of navItems) {
    item.addEventListener("click", function () {
        navItems.forEach(i => i.classList.remove('active'));
        item.classList.add('active');
    })
}