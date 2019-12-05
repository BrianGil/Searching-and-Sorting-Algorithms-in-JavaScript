class Search
{
    smallestDominance(array)
    {
        if(array.length == 0 || array.length == 1)
            return array
        
        let list = [array[array.length - 1]]

        for(let i = array.length - 2; i >= 0; i--)
        {
            if(list[0] >= array[i])
                list.unshift(array[i])
        }

        return list
    }

    largestDominance(array)
    {
        if(array.length == 0 || array.length == 1)
            return array
        
        let list = [array[array.length - 1]]

        for(let i = array.length - 2; i >= 0; i--)
        {
            if(list[0] <= array[i])
                list.unshift(array[i])
        }

        return list
    }
}

module.exports = {
    Search
}