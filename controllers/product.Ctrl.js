const Products = require('../models/productModel')
class APIfeatures {
    constructor(query, queryString){
        this.query = query;
        this.queryString = queryString;
    }
    filtering(){
        const queryObj = {...this.queryString} //this.queryString = req.query
        console.log({before: queryObj}) // before deleting

        const excludedFields = ['page', 'sort', 'limit']
        excludedFields.forEach(el => delete(queryObj[el]))

        console.log({after: queryObj}) // after deleting 

        let queryStr = JSON.stringify(queryObj)
        queryStr = queryStr.replace(/\b(gte|gt|lt|lte|regex)\b/g, match => '$' + match)
        
        console.log({queryStr})

        this.query.find(JSON.parse(queryStr))

        return this;
    }

    sorting(){
        if(this.queryString.sort){
            const sortBy = this.queryString.sort.split(',').join(' ')
            console.log(sortBy)
            this.query = this.query.sort(sortBy)
        } else {
            this.query = this.query.sort('-createdAt')
        }

        return this
    }

    paginating(){
        const page = this.queryString.page * 1 || 1
        const limit = this.queryString.limit * 1 || 3
        const skip = (page - 1) * limit
        this.query = this.query.skip(skip).limit(limit)
        return this;
    }
}

const productCtrl = {
    
getProducts: async(req, res) => {
try {
    
    const features = new APIfeatures(Products.find(), req.query).filtering()

    const products = await features.query
    res.json({
        status: 'sucess',
        result: products.length,
        products: products
    })
} catch (err) {
    return res.status(400).json({msg: err.message})
    
}

    },
createProducts: async(req, res) => {
try {
    const {product_id, title, price, description, content, images, category} = req.body;
    if(!images) return res.status(400).json({msg: "No Images uploaded. "})

    const product = await Products.findOne({product_id})
    if(product) 
    return res.status(400).json({msg: "This product already exists. "})

    const newProduct = new Products({

        product_id, title: title.toLowerCase(), price, description, content, images, category
    })

    await newProduct.save()

    res.json({msg: 'Created new product'})


            
} catch (err) {
    return res.status(400).json({msg: err.message})
            
        }
        
    },
deleteProducts: async(req, res) => {
try {
    await Products.findByIdAndDelete(req.params.id)
    res.json({msg: "Deleted a product"})
            
} catch (err) {
    return res.status(400).json({msg: err.message})
            
        }
        
    },
updateProducts: async(req, res) => {
try {
    const {product_id, title, price, description, content, images, category} = req.body;
    if(!images) return res.status(400).json({msg: "No Images uploaded. "})

    await Products.findByIdAndUpdate({_id: req.params.id}, {
        title: title.toLowerCase(), price, description, content, images, category
    })

    res.json({msg: "Updated product"})

                    
} catch (err) {
    return res.status(400).json({msg: err.message})
                    
                }
                
    }

}
module.exports = productCtrl