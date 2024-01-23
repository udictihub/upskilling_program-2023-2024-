const getElement = (query) => {
    const element = document.querySelector(query);
    if (element) {
        return element;
    }
    throw new Error(`Please check "${query}" selector, no such element exist`);
    };
export default getElement;