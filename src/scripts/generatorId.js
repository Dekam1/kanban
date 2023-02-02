const generatorId = () => {
    let generatedId = Math.floor(Math.random() * 1000) + 1;
    return generatedId;
}

export default generatorId;