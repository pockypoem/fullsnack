// TODO: Untuk enkripsi data string
import bcrypt from "bcrypt";

class PasswordHash {
    // Pakai static supaya ga perlu bikin object lagi
    public static hash = (password: string) : Promise<string> => {
        return bcrypt.hash(password, 10);
    }
}


export default PasswordHash;