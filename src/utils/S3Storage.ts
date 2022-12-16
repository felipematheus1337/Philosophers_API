import AWS, { S3 } from 'aws-sdk';
import path from 'path';
import multerConfig from '../config/multerConfig';
import mime from 'mime';
import fs from 'fs';


class S3Storage {
    private client: S3;
    
    constructor() {
        this.client = new AWS.S3({
            region: 'us-east-2',
        })
    }

    async saveFile(filename: string): Promise<string> {
        const originalPath = path.resolve(multerConfig.directory, filename);
        const ContentType = mime.getType(originalPath);

        const URL_IMG = `https://philosophers-api.s3.us-east-2.amazonaws.com/${filename}`

        if (!ContentType) {
            throw new Error("File not found!");
        }

        const fileContent = await fs.promises.readFile(originalPath);

        this.client.putObject({
            Bucket: 'philosophers-api',
            Key: filename,
            ACL: 'public-read',
            Body: fileContent,
            ContentType,
        })
            .promise();
        
        await fs.promises.unlink(originalPath);

        return URL_IMG;

    }

    async deleteFile(filename: string): Promise<Boolean> {
        console.log(filename);
        const deleteObj = { Bucket: 'philosophers-api', Key: filename } as S3.Types.DeleteObjectRequest;

        this.client.deleteObject(deleteObj)
            .promise();
        
        return true;

    }


}

export default S3Storage;