import axios from "axios"

export default class CategoryServices{

    state={
        currentCategory:""
    }

    getCategoriesLevel1=()=>{
        return axios("http://localhost:8080/api/categoryLevel1/getAll")
    }

    getCategoriesLevel2=(seoUrl)=>{
        let url="http://localhost:8080/api/categoryLevel2"
        if(seoUrl){
            url+="/getByCategoryLevel1Id?id="+seoUrl
        }
        
        return axios(url)
    }

    changeCategory=(id)=>{
        this.state.currentCategory=id
        this.getCategoriesLevel2(this.state.currentCategory)
    }
}