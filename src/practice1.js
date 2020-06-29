const parseData = (input) => {
    let {data, column} = input;
    let array = [];
    for (let item of column) {
        array.push(item.name);
    }
    let result=[];
    for (let item of data) {
        let obj = {};
        for (let i in item) {
            obj[array[i]] = item[i];
        }
        result.push(obj);
    }
    return result;
};

export {parseData};
