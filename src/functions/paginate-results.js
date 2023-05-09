const paginatedResults = (model) => {
    return async (req, res, next) => {

    const page = parseInt(req.query.page);
    const limit = parseInt(req.query.limit)

    console.log(page)
    console.log(limit)

    const startIndex = (page - 1) * limit
    const endIndex = page * limit

    const results = {}

    if(endIndex <= await model.countDocuments().exec()) {
        results.next = {
            page: page + 1,
            limit: limit
        }
    } else {
        results.next = {
            page: page + 1,
            limit: limit
        }
    }

    if(startIndex > 0) {
        results.previous = {
            page: page - 1,
            limit: limit
        }
    }

    try {
        results.results = await model.find().limit(limit).skip(startIndex).exec()
        const productCount = await model.find().countDocuments().exec()
        res.paginatedResults = results
        res.productCount = productCount

        console.log("//")
        console.log("res.paginatedResults.next = ", res.paginatedResults.next)
        console.log("res.paginatedResults.previous = ", res.paginatedResults.previous)
        console.log("//")
        console.log("productCount = ", productCount)
        console.log("//")
        
        next()
    } catch (e) {
        res.status(500)
        console.log(e.message)
    }
    }
}

export default paginatedResults