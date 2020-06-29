const inject = (items, sections) => {
    console.log(sections);
    sections.sort((a, b) => {
            return b.index - a.index
        }
    );
    console.log(sections);
    for (let section of sections) {
        let {content, index} = section;
        items.splice(index, 0, content);
    }
    return items;
};

export {inject};
