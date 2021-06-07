
interface StylesObject {
    any: any
}

function createAndSetStyles(elment: HTMLElement = document.createElement("p"), stylesObject: string) {

    let styleAndProp: Array<Array<string>> = stylesObject[0].split(", ").map(item => item.split(" "));

}

// console.log(createAndSetStyles(undefined, `hello world, it works`))

export { createAndSetStyles };