import './post.css'

export default function Post() {
    return (
        <div className='post'>
            <img className='postImg'
            src="https://lasdeliciasdevivir.net/wp-content/uploads/2019/02/Brownies-Red-Velvet-Receta-Las-Delicias-Del-Buen-Vivir.jpg" 
            alt="" 
            /> 
            <div className="postInfo">
                <span className="postTitle">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </span>
                <hr/>
                <span className="postDate">1 hour ago</span>
            </div>
            <p className='postDesc'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                Aliquam vero deleniti quisquam molestias, voluptatem deserunt, 
                repudiandae aut ad repellendus culpa accusamus harum praesentium
                commodi consectetur, hic accusantium corporis animi rerum!
            </p>           
        </div>
    )
}