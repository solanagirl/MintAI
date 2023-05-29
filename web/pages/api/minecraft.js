import axios from "axios";

export async function getMinecraftCharacter(character, uuid) {
    try {
        const response = await axios.get(`https://crafatar.com/renders/body/${uuid}?size=512&scale=10&overlay`, { responseType: 'blob' })
        let image = URL.createObjectURL(response.data)
        console.log(image)
        return image
    } catch (err) {
        console.log(err);
    }
}