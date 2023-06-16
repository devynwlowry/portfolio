import fs from 'fs-extra';
import path from 'path';

export default async function handler(req, res) {
    const directory = path.join(process.cwd(), '/public/images/productshots/complexscreens/')
    const imagePaths = await getImagePaths(directory);

    const completePaths = imagePaths.map((relativePath) => `/public/images/productshots/complexscreens/${relativePath}`);

    res.status(200).json({ imagePaths: completePaths });
}

const getImagePaths = async (directory) => {
    const imagePaths = [];

    const readDirectory = async (dir) => {
        const files = await fs.readdirSync(dir);

        for (const file of files) {
            const filePath = path.join(dir, file);
            const stats = await fs.stat(filePath);

            if(stats.isDirectory()) {
                await readDirectory(filePath);
            } else if (stats.isFile() && isImageFile(file)) {
                const relativePath = path.relative(directory, filePath);
                imagePaths.push(relativePath);
            }
        };
    };

    const isImageFile = (file) => {
        const supportedExtensions = ['.jpg', '.jpeg', '.png'];
        const ext = path.extname(file).toLowerCase();
        return supportedExtensions.includes(ext);
    };

    await readDirectory(directory);

    return imagePaths;
}