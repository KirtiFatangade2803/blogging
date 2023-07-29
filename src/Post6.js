import { NavLink } from 'react-router-dom';
import './Post.css';
import Postimg from './dance.jpg';

export default function Post() {
  return (
   <>
    <div className='post'>
    <NavLink to='/single' className='link'>
<img className='postimg' src={Postimg} alt='postImage'/>
</NavLink>
   <div className='postinfo'>
   <div className='postcats'>
    <span className='postcat'>Dance</span>
    <span className='postcat'>Entertainment</span>
   </div>
   <span className='posttitle'>
   Lorem ipsum dolor sit amet
   </span>
<hr/>
<span className='postdate'>2 hours ago</span>
    </div>
    </div>
   </>
  )
}