import { MDBContainer, MDBRow} from "mdbreact";
import {Link} from "react-router-dom";

const BlogList = ({blogs, title, handleDelete}) => {


    // const blogs = props.blogs;

    // console.log(blogs);

    return ( 


        <MDBContainer>
            <MDBRow>
            <h1>{title}</h1>
                    {blogs.map(b => (
                        <div className="blog-list" key={b.id}>
                            <div className="blog-preview">
                                <h2>{b.title}</h2>
                                <p>Written by {b.author}</p>
                                <button className="button-details" key={b.id}><Link to={`/blogs/${b.id}`} style = {{
                                    color: 'white',
                                }}>Details</Link></button>
                                <button className="button-delete" onClick={()=>handleDelete(b.id)}>Delete</button>
                            
                            
                            </div>
                        </div>
                       
                    ))}
               
            </MDBRow>
        </MDBContainer>
     );
}
 
export default BlogList;