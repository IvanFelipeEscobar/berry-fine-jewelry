import express, {Request, Response} from 'express'
import { shopItems } from '../models/shopItems'

module.exports = {
    async getShopItems(req: Request, res: Response){
        const allItems = await shopItems.find()
        res.json(allItems)
    }
}