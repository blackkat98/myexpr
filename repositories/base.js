module.exports = (Model) => {
    // Mongoose powered functions
    const model = Model

    return {
        store: async (data) => {
            try {
                let record = await model.create(data)

                return record
            } catch (err) {
                console.log(err)

                return null
            }
        },
        getById: async (id, select = '') => {
            try {
                let record = await model.findById(id, select)

                return record
            } catch (err) {
                console.log(err)

                return null
            }
        },
        getSingle: async (queryObject, select = '') => {
            try {
                let record = await model.findOne(queryObject, select)

                return record
            } catch (err) {
                console.log(err)

                return null
            }
        },
        getMultiple: async (queryObject, select = '') => {
            try {
                let records = await model.find(queryObject, select)
                let collection = []
                records.forEach(record => {
                    collection.push(record)
                })
            } catch (err) {
                console.log(err)

                return null
            }
        },
    }
}
