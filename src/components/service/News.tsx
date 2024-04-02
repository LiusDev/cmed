import { useEffect, useMemo, useState } from "react";
import { Trans } from "../common";
import { News as NewsType } from "../../types";
import { instance } from "../../utils";
import NewsItem from "./NewsItem";

export default function () {
	const [news, setNews] = useState<NewsType[]>([])
	useEffect(() => {
		instance
			.get("/news?perPage=3")
			.then((response) => {
				setNews(response.data || []);
			})
			.catch((error) => {
				console.error("Error fetching data:", error);
			});
	}, [])
	const elements = useMemo(() => news.map((item) => (
		<NewsItem
			key={item.id}
			news={item}
			className="col-span-12 sm:col-span-6 lg:col-span-4"
		/>
	)), [news])

	return <div className="container m-auto px-4 mb-20">
		<h1 className="font-bold text-primary text-3xl text-center py-20">
			<Trans text="services.detail.related" />
		</h1>
		<div className="grid grid-cols-3 gap-8 mb-10 w-full">
			{elements}
		</div>
	</div>
}
