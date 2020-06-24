// @flow
import React from 'react';
import getPublishDate from '../helpers/getPublishDate'
type NewsProps = {
	data: [];
	newsRefCallback:(node: HTMLElement | null) => void;
}
const News = ({data,newsRefCallback}:NewsProps) => {
	const renderImage = (image) => {
		return image ? <img className="news__image" src={image} alt="img" /> : <i className="news__image news__image--default">Icon not found</i>
	};

	return (
		<div className="news" ref={newsRefCallback}>
			{data.map((data) => (
				<div className="news__item">
					<a className="news__link" href={data.url} target="_blank">
						{data.title}
					</a>
					<div className="news__inner-wrap">
						{renderImage(data.urlToImage)}
						<div className="news__description">
							{data.description}
						</div>
					</div>
					<div className="news__author">
						Author: {data.author ? data.author : 'Unknown'}
					</div>
					<div className="news__data">
						{getPublishDate(data.publishedAt)}
					</div>
				</div>
			))}
		</div>

	)
};
export default News;
