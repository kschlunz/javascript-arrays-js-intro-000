var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(array, element){
    arrays = [element, ...array]

    return arrays
}

function destructivelyAddElementToBeginningOfArray(array, element){
   array.unshift(element)
   return array 
}
