class Sort {
    selectionSort(array) {
        for (var i = 0; i < array.length - 1; i++) {
            var minIndex = i

            for (var j = i + 1; j < array.length; j++) {
                if (array[j] < array[minIndex])
                    minIndex = j
            }

            var minValue = array[minIndex]
            array[minIndex] = array[i]
            array[i] = minValue
        }

        return array
    }

    insertionSort(array) {
        for (var i = 1; i < array.length; i++) {
            var value = array[i]
            var j = i - 1 

            while (j >= 0 && array[j] > value) 
            {  
                array[j + 1] = array[j]
                j-- 
            } 

            array[j + 1] = value
        }

        return array
    }

    quickSort(array) {
        function quickSortHelper(array) {
            if (array.length == 0)
                return array
            else if (array.length == 1)
                return [array[0]]

            var pivotIndex = Math.floor(Math.random() * ((array.length - 1) - 0 + 1)) + 0
            var pivot = array[pivotIndex]
            var leftPartition = []
            var rightPartition = []
            array.splice(pivotIndex, 1)

            for (var i = 0; i < array.length; i++) {
                if (array[i] < pivot)
                    leftPartition.push(array[i])
                else
                    rightPartition.push(array[i])
            }

            return [].concat(quickSortHelper(leftPartition), [pivot], quickSortHelper(rightPartition))
        }

        return quickSortHelper(array)
    }

    mergeSort(array) 
    {
        function merge(left, right)
        {
            var list = []
            var leftIndex = 0
            var rightIndex = 0

            while(leftIndex != left.length && rightIndex != right.length)
            {
                if(left[leftIndex] < right[rightIndex])
                {
                    list.push(left[leftIndex])
                    leftIndex++
                } else 
                  {
                      list.push(right[rightIndex])
                      rightIndex++
                  }
            }

            if(leftIndex == left.length)
                return list.concat(right.slice(rightIndex, right.length))
            else 
                return list.concat(left.slice(leftIndex, left.length))          
        }

        if(array.length == 0 || array.length == 1)
            return array

        var midpoint = Math.floor((array.length) / 2)        
        var left = this.mergeSort(array.slice(0, midpoint))
        var right = this.mergeSort(array.slice(midpoint, array.length))
   
        return merge(left, right)
    }
}

module.exports = {
    Sort
}