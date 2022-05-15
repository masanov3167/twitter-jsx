import React, { useState, useContext, useRef } from 'react';
import { Context } from '../../components/Context';
import { HomeItem, TweetItem } from '../../components/HomeItem';
import userImg from '../../assets/img/userdefaultimg.png';
import Dislike from '../../assets/img/dislike.png';
import Like from '../../assets/img/like.png';
import TweetImg from "../../components/TweetImg";
import { CommentImg, LikeSvg, RepostImg, StatImg, UpImg } from "../../components/Images";

const Home = () => {

	const {getTime, modeToggle,mode, token, tweets, setTweets, setSearchDisplay } = React.useContext(Context);
	
	const Val = useRef('');
	const inputFile = useRef('');
	const editInputVal = useRef();

	const [edit, setEdit] = useState({
		isedit: false,
		display: false,
		index: 0,
		data: {}
	})

	const homeProfilImg = token.pic ? token.pic : userImg;

	function CreateTweets(e) {
		e.preventDefault();
		const newTweets = {
			id: tweets.length,
			userImg: homeProfilImg,
			name: token.name ? token.name : 'Bobur',
			username: token.userName ? token.userName : 'bobur_mavlonov',
			hour: getTime(),
			tweet: Val.current.value.trim(),
			tweetImg: {
				Poster:  inputFile.current.files[0] ? window.URL.createObjectURL(inputFile.current.files[0]) : '',
			},
			isRepost: false,
			repostNumber: 0,
			like: {
				isLike: false,
				likeNumber: 0,
			},
		};
		window.localStorage.setItem(
			'tweets',
			JSON.stringify([newTweets, ...tweets]),
		);
		Val.current.value = null;
		inputFile.current.value = null;
		return setTweets([newTweets, ...tweets]);
	}


	window.localStorage.setItem('tweets',JSON.stringify([...tweets]));

	React.useEffect(() =>{
		setSearchDisplay(false);
	},[])

	const repostFunc = (evt) =>{
		const checkId = evt.target.dataset.imgId - 0;

		const find = tweets.find((a) => a.id === checkId);
		find.isRepost = !find.isRepost;
		
		if (find.isRepost) {
			find.repostNumber =	find.repostNumber + 1;
			setTweets([...tweets])
			window.localStorage.setItem('tweets',JSON.stringify([...tweets]));
		}
		if (!find.isRepost) {
			find.repostNumber =	find.repostNumber - 1;
			setTweets([...tweets])
			window.localStorage.setItem('tweets',JSON.stringify([...tweets]));
		}
	}

    
	const likeFunc = (evt) =>{
		const checkId = evt.target.dataset.imgId - 0;

		const find = tweets.find((a) => a.id === checkId);
		find.like.isLike = !find.like.isLike;
		
		if (find.like.isLike) {
			find.like.likeNumber =	find.like.likeNumber + 1;
			setTweets([...tweets])
			window.localStorage.setItem('tweets',JSON.stringify([...tweets]));
		}
		if (!find.like.isLike) {
			find.like.likeNumber =	find.like.likeNumber - 1;
			setTweets([...tweets])
			window.localStorage.setItem('tweets',JSON.stringify([...tweets]));
		}
	}

	function delTweet(evt) {
		const btnId = evt.target.dataset.delId - 0;

		const filter = tweets.filter((a) => a.id !== btnId);
		window.localStorage.setItem('tweets', JSON.stringify(filter));
		return setTweets(filter);
	}

	function editTweet(evt) {
		const btnId = evt.target.dataset.delId - 0;

		const filter = tweets.filter((a) => a.id == btnId);
		const find = tweets.findIndex(a => a.id == btnId);
		setEdit({
			display:true,
			data: filter,
			index: find,
		})

		return setEdit(...edit)
	}

	const test =(e) =>{
		e.preventDefault();
		tweets[edit.index].tweet = editInputVal.current.value.trim();
		setTweets([...tweets]);
		window.localStorage.setItem('tweets', JSON.stringify([...tweets]));

		editInputVal.current.value = null;

		setEdit({
			display:false,
		})

		return setEdit(...edit)
	}

	const closeFunc = () =>{
		setEdit({
			display:false,
		})
		return setEdit(...edit)
	}

	return (
		<>
			<HomeItem  title='Home' mode={mode} modeToggle={modeToggle} />

			<div className='home-hero'>
				<img src={token.pic ? token.pic : userImg} alt='profil img' />

				<form
					className='home-form'
					onSubmit={CreateTweets}
					method='POST'
					autoComplete='off'>
					<input
						className='home-form-input'
						ref={Val}
						type='text'
						placeholder="What's happening"
						aria-label="What's happening"
						required
					/>

					<div>
						<input ref={inputFile} className='home-form-file' type='file' accept='image/*' placeholder='fgdf' />
						<span className='gif'></span>
						<span className='stat'></span>
						<span className='stick'></span>
						<span className='calendar'></span>
					</div>
					<button className='home-form-btn' type='submit'>
						Tweet
					</button>
				</form>
			</div>

			<ol className='tweets-container'>
            {tweets.length > 0 ? (
				tweets.map((e) => (
					<>
						<li  id={e.id} className="tweet-item">
							<img className="tweet-item-img" src={e.userImg} alt="profil img" />
							<div className="tweet-item-right">
								<div className="tweet-item-top">
									<h2>{e.name}</h2>
									<span>@{e.username}</span>
									<strong>•</strong>
									<time>{e.hour}</time>
								</div>
				
								<TweetItem  delTweet={delTweet} delId={e.id} editTweet={editTweet} />
				
								<h2 className="tweet-text">{e.tweet}</h2>
								{e.tweetImg.Poster ?  <TweetImg imgId={e.id} likeFunc={likeFunc} tweetimgurl={e?.tweetImg.Poster} /> : <></>}
				
								<ol className="control-list">
									<CommentImg commentnumber={e?.comment} /> 
									<RepostImg repostnumber={e?.repostNumber > 0 ? e?.repostNumber : <></>} repostTitleClass={e?.isRepost ? "repost-title repost-color" : "repost-title"} repostFunc={repostFunc} imgId={e.id} repostImgClass={e?.isRepost ? "repost-img repost-color" : "repost-img"} />
									<LikeSvg likeFunc={likeFunc} imgId={e.id} likenumber={e?.like?.likeNumber >0 ? e?.like?.likeNumber : <></>} twlikeimg={e?.like?.isLike ? Like : Dislike} likeTitleClass={e?.like?.isLike ? "like-title-red" : ''} />
									<UpImg  />
									<StatImg />
								</ol>
							</div>
						</li>
					</>                  
					))
			):(
				<h2>Sizning reklamangiz uchun joy ....</h2>
			)}
                </ol>


				<div className={edit.display ? "form-wrapper" :"d-none"}>
					<span onClick={closeFunc} className='edit-closer'></span>
					<form className='edit-tweet' onSubmit={test} method="post" autoComplete='off'>
						<label >Edit tweet text</label>
						<input className='edit-tweet-input' ref={editInputVal}  type="text" placeholder='edit tweet' defaultValue={edit?.data ? edit?.data[0]?.tweet : ""} />
						<button type="submit">Edit tweet</button>
					</form>
				</div>
		</>
	);
};

export default Home;
