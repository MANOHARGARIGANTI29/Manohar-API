
const Product = require('../models/products');




const GetallProducts = async(req,res)=>{
    const {company,name,sort,select} = req.query;
    const queryObject = {};
    if(company){
    queryObject.company = company;
     }
     if(name){
        queryObject.name = {$regex : name, $options : "R"};
     }
      let apiData = Product.find(queryObject);
     if(sort){
        let sortFix = sort.replace(","," ");
        apiData = apiData.sort(sortFix);
     }
     if(select){
        // const selectFix = select.replace(","," ");
        const selectFix = select.split(",").join(" ");
        apiData = apiData.select(selectFix);
     }

     let page = Number(req.query.page) || 1 ;
     let limit =Number(req.query.limit) || 4;

     let skip = (page - 1) * limit;
     apiData = apiData.skip(skip).limit(limit);
    const myData = await apiData.sort();
    res.status(200).json({myData});
}

const GetallProductsTesting = async(req,res)=>{
    res.status(200).json({mesg:"iam from getallproductstesting"})
}

module.exports={GetallProducts,GetallProductsTesting}