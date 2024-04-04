import {createBot, createProvider, createFlow, MemoryDB, addKeyword} from '@bot-whatsapp/bot'
import { BaileysProvider } from '@bot-whatsapp/provider-baileys'

const flowBienvenida=addKeyword('Hola').addAnswer('Buenas, bienvenido')


const main = async ()=>{
    const provider=createProvider(BaileysProvider)
    
    provider.initHttpServer(3033)
    provider.http.server.post('/message', handleCtx( async (bot, res, req)=>{
        const body=req.body
        await bot.sendMessage(584121247580, 'Funciona la api si te llega', {})
        res.end('Mensaje enviado')
    }))
    
    await createBot({
        flow: createFlow([flowBienvenida]),
        database : new MemoryDB(),
        provider
    }
    )
}

main()
