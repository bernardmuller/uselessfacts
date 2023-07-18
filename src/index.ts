import express, { Request, Response } from "express";
import axios from "axios";

const app = express();

const PORT = process.env.PORT || 5000;

type Fact = {
	id: string;
	text: string;
	source: string;
	source_url: string;
	language: string;
	permalink: string;
};

app.get("/", async (req: Request, res: Response) => {
	const fact = await axios
		.get("https://uselessfacts.jsph.pl/api/v2/facts/random")
		.then((res) => res.data);
	res.send(fact as Fact);
});

app.listen(PORT, () => {
	console.log(`Server is listening on port ${PORT}`);
});
