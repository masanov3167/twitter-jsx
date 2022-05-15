import React, { useState} from 'react';

import Poster from '../assets/img/shashlik.png';
import creativphoto from '../assets/img/creativphoto.png';
import rajlahoti from '../assets/img/rajlahoti.png';
import inner from '../assets/img/inner.png';

const Context = React.createContext();

const TokenProvider = ({ children }) => {

	const [month, setMonth] = useState(['January','February','March','April','May','June','Jule','August','September','October','November','December']);

	const [searchDisplay, setSearchDisplay] = useState(false);

	const [mode, setMode] = useState(false);
	const [token ,setToken] = useState(JSON.parse(window.localStorage.getItem("token")) || false)
	
	const modeToggle = () => {
		setMode(!mode);
	};

	React.useEffect(() => {
        if(token) {
            window.localStorage.setItem("token", JSON.stringify(token)
            )
        }
        else{
            window.localStorage.removeItem("token")
        }
    }, [token])
	
    const date = new Date();
	const hours = String(date.getHours()).padStart(2,0);

	const getTime = () =>{
		const date = new Date();
		const oy = date.getMonth();
		const sana = date.getDate();
		const hour = String(date.getHours()).padStart(0,2);
		const minut = String(date.getMinutes()).padStart(0,2);

		return `At ${hour}:${minut} - ${sana} ${month[oy]}`;
	}

	const [tweets, setTweets] = useState(
		JSON.parse(window.localStorage.getItem('tweets')) || [
			{
				id: 0,
				userImg: inner,
				name: 'Designsta',
				username: 'inner',
				hour: '25m',
				tweet: "Twitterdagi ayol-erkak qarama-qarshiliginglardan o'zinglar zerikmadinglarmi?",
				tweetImg: '',
                comment: 10,
				isRepost: false,
				repostNumber: 1,
				like: {
					isLike: false,
					likeNumber: 8,
				},
			},
			{
				id: 1,
				userImg: rajlahoti,
				name: 'cloutexhibition',
				username: 'RajlaHoti',
				hour: '22m',
				tweet: "YPIP dasturining bu yilgi sezoni ham o'z nihoyasiga yetmoqda. Mentorlik davomida talaba va yangi bitiruvchilarni o'sayotganini ko'rib hursand bo'ladi odam.",
				tweetImg: '',
                comment: '',
				isRepost: true,
				repostNumber: 5,
				like: {
					isLike: true,
					likeNumber: 9,
				},
			},
			{
				id: 2,
				userImg: creativphoto,
				name: 'CreativePhoto',
				username: 'cloutexhibition',
				hour: '1h',
				tweet: 'Обетда..... Кечиринглар',
				tweetImg: {Poster},
                comment: 10,
				isRepost: false,
				repostNumber: 1,
				like: {
					isLike: false,
					likeNumber: 8,
				},
			},
		],
	);
    
	return (
		<Context.Provider value={{month,getTime,searchDisplay, setSearchDisplay,date, hours,modeToggle,mode, setMode,tweets, setTweets,token ,setToken}}>{children}</Context.Provider>
	);
};

export { Context, TokenProvider };
