import { NavLink } from 'react-router-dom';

const HomeImg = () => {
	return (
		<NavLink className='nav-item' to='/'>
			<span className='home-img'></span>
			<p className='nav-title'>Home</p>
		</NavLink>
	);
};

const ExloreImg = () => {
	return (
		<NavLink className='nav-item' to='/explore'>
			<span className='explore-img'></span>
			<p className='nav-title'>Explore</p>
		</NavLink>
	);
};

const NotifImg = () => {
	return (
		<NavLink className='nav-item' to='/notifications'>
			<span className='notif-img'></span>
			<p className='nav-title'>Notifications</p>
		</NavLink>
	);
};

const MessagesImg = () => {
	return (
		<NavLink className='nav-item' to='/messages'>
			<span className='message-img'></span>
			<p className='nav-title'>Messages</p>
		</NavLink>
	);
};

const BookmarksImg = () => {
	return (
		<NavLink className='nav-item' to='/bookmarks'>
			<span className='bookmark-img'></span>
			<p className='nav-title'>Bookmarks</p>
		</NavLink>
	);
};

const ListsImg = () => {
	return (
		<NavLink className='nav-item' to='/lists'>
			<span className='lists-img'></span>
			<p className='nav-title'>Lists</p>
		</NavLink>
	);
};

const ProfilImg = () => {
	return (
		<NavLink className='nav-item' to='/profil'>
			<span className='profil-img'></span>
			<p className='nav-title'>Profile</p>
		</NavLink>
	);
};

const MoreImg = () => {
	return (
		<NavLink className='nav-item' to='/more'>
			<span className='more-img'></span>
			<p className='nav-title'>More</p>
		</NavLink>
	);
};

export {
	HomeImg,
	ExloreImg,
	NotifImg,
	MessagesImg,
	BookmarksImg,
	ListsImg,
	ProfilImg,
    MoreImg
};
