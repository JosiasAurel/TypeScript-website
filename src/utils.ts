
interface StylesObject {
    any: any
}

export  function createAndSetStyles(elment: HTMLElement = document.createElement("p"), stylesObject: string) {

    let styleAndProp: Array<Array<string>> = stylesObject[0].split(", ").map(item => item.split(" "));

}
