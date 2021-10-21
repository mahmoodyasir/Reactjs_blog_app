import BlogList from "./BlogList";
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import useFetch from "./useFetch";

const Home = () => {

    const {data, isPending, error, handleDelete} = useFetch('http://localhost:4000/blogs/');

    return (
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div className='loading-message'>Loading ...</div>}
            {data && <BlogList blogs = {data} title="All Blogs" handleDelete={handleDelete}/>}
            {/*/!* <BlogList blogs = {blogs.filter((blog)=>blog.author === 'author 2')} title="Sumon's Blogs" />*/}
            {/*<BlogList blogs = {blogs.filter((blog)=>blog.author === 'author 3')} title="Tamim's Blogs"/> *!/*/}

            {/*<button className="button-details" onClick={() => setName("Tarek")}>Change the name</button>*/}
            {/*<p>{name}</p>*/}
        </div>

    );
}

export default Home;