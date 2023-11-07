// TODO: Untuk enkripsi data string
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

class Authentication {
    // Pakai static supaya ga perlu bikin object lagi
    public static passwordHash = (password: string) : Promise<string> => {
        return bcrypt.hash(password, 10);
    }

    public static passwordCompare = async (text: string, encryptedText: string) : Promise<boolean> => {
        let result = await bcrypt.compare(text, encryptedText);
        return result;
    }

    // TODO: generate token berdasarkan id, username, password
    public static generateToken = (id: number, username: string, password: string) : string => {
        const secretKey: string = process.env.JWT_SECRET_KEY || "secret"; // default

        const token: string = jwt.sign({ id, username, password }, secretKey);
        return token;
    }

}


export default Authentication;