import "../styles/index.scss";

const filters = document.querySelectorAll(
    ".collection__filter-item"
) as NodeListOf<HTMLButtonElement>;
const collections = document.querySelectorAll(
    ".collection__list"
) as NodeListOf<HTMLUListElement>

filters.forEach((btn) => {
    btn.addEventListener("mouseover", () => {
        let origin = btn.dataset.origin;
        switchCollection(origin);
        changeFilter(btn);
    })
})

const switchCollection = (origin) => {
    collections.forEach((collection => {
        collection.id == origin ? collection.classList.add("active") : collection.classList.remove("active");
    }))
}
const changeFilter = (btn) => {
    filters.forEach((filter) => {
        filter == btn ? filter.classList.add("active") : filter.classList.remove("active");
    })
}