const categoryModel = require('../models/category');

const CategoryController = {

    add : function(req,res,next){
        var createResult = '';
        categoryModel.create({name: req.body.name, parent:req.body.parent})
        .then(function(result){
            createResult = result;
            if(req.body.parent){
            // if sub category is added then push sub category to parent category                
                return categoryModel.findById(req.body.parent);
            }
            else{
                res.status(200).json(result);
            }
        })
        .then(parentCategory => {             
            parentCategory.subCategories.push(createResult);
            return parentCategory.save();
        })
        .then(result=>{
            res.status(200).json({'msg':"Added New Sub-category", "data":result});
        })
        .catch(err => {
            res.status(500).json({'msg':err.message, "error":err})
        })

    },

    list : function(req, res, next){

        categoryModel.find({parent:null})
            .select('_id name parent subCategories')
            .populate('subCategories', '_id name')
            .then(function(result) {

            categoryList = result;
            res.status(200).json(categoryList);
            console.log(categoryList);

        }).catch(function(err) {
            console.log(err); 
        });
    },

    sublist : function(req, res, next){

        categoryModel.find({parent:{$ne:null}})
        .select('_id name parent subCategories')
        .populate('parent','_id name')
        .then(function(result){

            res.status(200).json({'msg':'SubCategory Listing With Parent', 'data':result});

            console.log(result);

        }).catch(function(err){

            console.log(err);
            next(err)
        });

    },

    edit : function(req, res, next){

        categoryModel.findByIdAndUpdate({_id:req.params.id},{name:req.body.name, parent:req.body.parent})
        .then(function(result) {

            categoryList = result;
            res.status(200).json({'msg':"List category", "data":categoryList});
           // console.log(categoryList);

        }).catch(function(err) {

            console.log(err); 
            next(err)

        });
    },

    delete : function(req, res, next){
        categoryModel.findByIdAndDelete({_id:req.params.id}).then(function(result){
            res.status(200).json({'msg':"Category deleted successfully", "data":result});
        }).catch(function(err){
            console.log(err); 
            next(err)
        })
    }


}

module.exports = CategoryController;