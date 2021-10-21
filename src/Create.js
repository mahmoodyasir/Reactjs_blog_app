import {useState} from "react";

const Create = () => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('');
    const [isPending, setIsPending] = useState(true);

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = {title, body, author};

        setIsPending(true);

       fetch("http://localhost:4000/blogs/",{
           method: 'POST',
           headers:{"Content-Type":"application/json"},
           body: JSON.stringify(blog)

       }).then(() => {
           console.log("New Blog Created");
           setIsPending(false);
       })
    }

    return (
        <div className='create-blog'>
            <h2>Add a new Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog Title</label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required/>
                <label>Blog Body</label>
                <textarea value={body} onChange={(e) => setBody(e.target.value)} required></textarea>
                <label>Blog Author</label>
                <select value={author} onChange={(e) => setAuthor(e.target.value)}>
                    <option value="">Select Author</option>
                    <option value="yasir">Mahmood Yasir</option>
                    <option value="hasan">Mohammad hasan</option>
                </select>
                {!isPending && <button>Adding Blog ...</button>}
                {isPending && <button>Create Blog</button>}
            </form>
        </div>
    );
}
 
export default Create;