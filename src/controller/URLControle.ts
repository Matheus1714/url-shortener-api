import { Request, Response, response } from "express"
import shortid from "shortid"
import { config } from '../config/Constants'
import { URLModel } from "../database/model/URL"

export class URLController{
    public async shorten(req:Request, res: Response): Promise<void>{
        try{
            const { originURL } = req.body
            const url = await URLModel.findOne({ originURL })
            if(url){
                res.json(url)
                return
            }
            const hash = shortid.generate()
            const shortURL = `${config.API_URL}/${hash}`
            const newURL = await URLModel.create({hash, shortURL, originURL})
            res.json({error: 0, originURL, hash, shortURL})
        }catch(error){
            console.error(error)
            res.json({error: 1, errorMessage: error})
        }
    }

    public async redirect(req:Request, res: Response): Promise<void>{
        const { hash } = req.params
        const url = await URLModel.findOne({ hash })

        if (url){
            res.redirect(url.originURL)
            return
        }
        res.status(400).json({error: 'URL not found'})
    }
}