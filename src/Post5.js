import { NavLink } from 'react-router-dom';
import './Post.css';
import Postimg from './write.jpg';

export default function Post() {
  return (
   <>
    <div className='post'>
    <NavLink to='/single' className='link'>
<img className='postimg' src={Postimg} alt='postImage'/>
</NavLink>
   <div className='postinfo'>
   <div className='postcats'>
    <span className='postcat'>Travel</span>
    <span className='postcat'>Life</span>
    <span className='postcat'>Community</span>
   </div>
   <span className='posttitle'>
   Lorem ipsum dolor sit amet
   </span>
<hr/>
<span className='postdate'>Half hour ago</span>
    </div>
    </div>
   </>
  )
}