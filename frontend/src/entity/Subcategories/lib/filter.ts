// вернет значения из arr1 которых нет в arr2
// удалит из arr2 те значения которые есть в arr1
export const filter = (arr1: number[], arr2: number[]) => {
    if (!arr1.length) {
      return arr2
    }
    const add:number[] = []
    const del:number[] = []
    arr1.forEach(id => {
      if (arr2.includes(id)) {
        del.push(id)
      } else {
        add.push(id)
      }
    })
    const copy = arr2.filter(id => !del.includes(id))
    return [...copy, ...add]
  }