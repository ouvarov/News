const getPublishDate = (date) => {
	const localDate = new Date();
	const publishDate = new Date(date);

	if (localDate.getFullYear() < publishDate.getFullYear()) {
		const differenceYear = publishDate.getFullYear() - localDate.getFullYear();
		return `Published ${differenceYear > 1 ? `${differenceYear} years ago` : `${differenceYear} year ago`}`
	} else if (localDate.getMonth() > publishDate.getMonth()) {
		const differenceMonth = publishDate.getMonth() - localDate.getMonth();
		return `Published ${differenceMonth > 1 ? `${differenceMonth} months ago` : `${differenceMonth} month ago`}`
	} else if (localDate.getDate() > publishDate.getDate()) {
		const differenceDay = localDate.getDate() - publishDate.getDate();
		return `Published ${differenceDay > 1 ? `${differenceDay} days ago` : `${differenceDay} day ago`}`
	} else if (localDate.getHours() > publishDate.getHours()) {
		const differenceHour = localDate.getHours() - publishDate.getHours();
		return `Published ${differenceHour > 1 ? `${differenceHour} hours ago` : `${differenceHour} hour ago`}`
	} else if (localDate.getMinutes() > publishDate.getMinutes()) {
		const differenceMinutes = localDate.getMinutes() - publishDate.getMinutes();
		return `Published ${differenceMinutes > 1 ? `${differenceMinutes} minutes ago` : `${differenceMinutes} minute ago`}`
	} else {
		return 'Published less than a minute'
	}
};
export default getPublishDate;
