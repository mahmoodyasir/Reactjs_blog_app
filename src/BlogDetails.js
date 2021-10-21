import { useParams } from "react-router";
import useFetch from "./useFetch";

const BlogDetails = () => {

    const {id} = useParams();
    const {data, error, isPending} = useFetch('http://localhost:4000/blogs/'+id);

    return (
        <div className='blog-details'>
            {isPending && <div className='loading-message'>Loading ...</div>}
            {error && <div>{error}</div>}
            {data && (
                <article>
                    <h2>{data.title}</h2>
                    <p>Written by {data.author}</p>
                    <div>{data.body}</div>
                </article>
            )}
        </div>
    );
}

export default BlogDetails;