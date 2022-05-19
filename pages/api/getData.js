import Service from "../../services/getData";

export default async function getData(req, res) {
    try {
        const data = await Service.getData();
        res.status(200).json(data);
    } catch {
        res.status(400).json('error');
    }
}