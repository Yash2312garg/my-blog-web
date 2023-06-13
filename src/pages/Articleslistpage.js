import ArticlesList from "../Components/ArticlesList";
import articles from "./ArticleContent";

const Articleslistpage =()=>{
    return (
        <>
         <h1>Articles</h1>
         <ArticlesList articles={articles}></ArticlesList>

        </>
   
    )

}
export default Articleslistpage;