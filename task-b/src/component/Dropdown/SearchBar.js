import React from 'react'; 
import "../../assets/iconfont/iconfont.css"
//import cssM from './'




const SearchBar= (props)=>{
    return (
        <div className="search-bar-wp">
            <input type="text" className="search-bar" placeholder="搜索" onChange={props.searchHandler}/>
            <i className="iconfont icon-search"></i>
        </div>
    );
}




export default SearchBar;