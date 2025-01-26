import { Request, Response } from 'express';
import shortid from 'shortid';
import { dataSource } from '../data-source';
import { URLEntity } from '../entities/url.entity';

export class URLController {
    public async shorten(req: Request, res: Response): Promise<void> {
        try {
            const { originURL } = req.body;
            const host = req.get('host');

            const url = await dataSource.getRepository(URLEntity).findOne({
                where: { originURL },
            });

            if (url) {
                res.json(url);
                return;
            }
            const hash = shortid.generate();
            const shortURL = `${host}/${hash}`;

            await dataSource.getRepository(URLEntity).save({
                hash,
                originURL,
                shortURL,
            });

            res.json({ error: 0, originURL, hash, shortURL });
        } catch (error) {
            console.error(error);
            res.json({ error: 1, errorMessage: error });
        }
    }

    public async redirect(req: Request, res: Response): Promise<void> {
        const { hash } = req.params;

        const url = await dataSource.getRepository(URLEntity).findOne({
            where: { hash },
        });

        if (url) {
            res.redirect(url.originURL);
            return;
        }

        res.status(400).json({ error: 'URL not found' });
    }
}