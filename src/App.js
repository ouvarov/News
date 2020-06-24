// @flow

import React ,{ useState, useCallback,useEffect }from 'react';
import './index.css';
import Header from "./components/Header";
import News from "./components/News";


const App = () => {
    const [pageCounter, setPageCounter] = useState(1);
    const [topicValue, seTopicValue] = useState('');
    const [topic, setTopic] = useState(null);
    const [positionBottom, setPositionBottom] = useState(null);
    const [data, setData] = useState([]);
    const [item, setItem] = useState(data);

    const inputRefCallback = useCallback((node) => {
        if (node) setTopic(node);
    }, []);

    const newsRefCallback = useCallback((node) => {
        if (node) setPositionBottom(node);
    }, []);

    const  fetchNews = () => {
        let url = `http://newsapi.org/v2/everything?q=${topicValue}&sortBy=publishedAt&pageSize=10&page=${pageCounter}&apiKey=e694d9cdc2964ac8bd46732096b96936`;
        fetch(url)
                .then(response => response.json())
                .then(data => data.articles)
                .then(item => setData(item))
        console.log(data,item)
    };
    const onChangeInput = () => {
        seTopicValue(topic.value)
    };

    const isActive = () => {
        document.getElementsByTagName('body')[0].onscroll = function () {
            if(positionBottom ) {if(positionBottom.getBoundingClientRect().bottom <= document.documentElement.clientHeight) {
                setPageCounter(pageCounter + 1);
                fetchNews();
                setItem([...item,...data])
                console.log(data,item)
            }}

        }
    };
    isActive();
    const onClickSearch = () => {
        setPageCounter(1);
        fetchNews();
        setItem(data)
    };

    return (
        <div className="App">
            <Header inputRefCallback={inputRefCallback}  onChange={onChangeInput} onClick={onClickSearch}/>
            <button >ffdfd</button>
            {item && <News data={item} newsRefCallback={newsRefCallback}/>}
        </div>
    );
};

export default App;
