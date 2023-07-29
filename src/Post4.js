import { NavLink } from 'react-router-dom';
import './Post.css';
import Postimg from './tech.jpg';

export default function Post() {
  return (
   <>
    <div className='post'>
    <NavLink to='/single' className='link'>
<img className='postimg' src={Postimg} alt='postImage'/>
</NavLink>
   <div className='postinfo'>
   <div className='postcats'>
    <span className='postcat'>Tech</span>
    <span className='postcat'>Life</span>
   </div>
   <span className='posttitle'>
   Lorem ipsum dolor sit amet
   </span>
<hr/>
<span className='postdate'>45 mins ago</span>
    </div>
    </div>
   </>
  )
}